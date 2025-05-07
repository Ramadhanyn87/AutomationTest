import { chromium, test, expect } from "@playwright/test";

test.describe("Mentoring - Dealls", () => {
  const BASE_URL = "https://job-portal-user-dev-skx7zw44dq-et.a.run.app";

  test("Filter mentor berdasarkan keahlian", async ({ page }) => {
    const browser = await chromium.launch();
    const pages = await browser.newPage();
    await page.goto(`${BASE_URL}/mentoring`);

    await expect(page).toHaveURL(/.*\/mentoring/);
    await expect(page.locator("text=Karier")).toBeVisible();
    await page.locator("text=Karier").click();
    await page.locator("text=IT & Eng").click();

    const mentorList = page.locator("text=QA Software Engineer");
    await expect(mentorList.first()).toBeVisible();
  });
});
