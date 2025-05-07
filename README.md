# AutomationTest

Outline a Test Strategy: Describe your overall approach to testing this feature. Consider:

Types of testing needed
> Types of testing needed are functional testing and UI testing.

Key areas of focus.
> the main focus of testing is on the filter feature of the area of ​​expertise.

Environments (where would you test?).
> Based on the link received above in the Scenario section: https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring. Testing in the development environment.

Any assumptions you're making.
> which will be made to do testing on the following link: https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring using TypeScript Automation Testing

Identify High-Level Test Scenarios: List the main scenarios you would test. Don't write detailed steps, but cover the different paths and conditions. 
Main Scenario 
> Access the Mentoring Page
> Click the Career Tab
> Click the IT & Eng Expertise Filter
> Ensure the Mentor List matches the selected filter (ex: QA Software Engineer)



=========================================
Script Automation
=========================================
automation script using TypeScript based Playwright. and the main scenario tested is filter feature of the area of ​​expertise in Mentoring menu.

1. FIrst Initiate Playwright for project
2. Create File TypeScript for script Automation testing filter feature of the are of expertise in Mentoring Menu (Open File mentoring.spec.ts)
3. Run Command "npx playwright test mentoring.spec.ts"
