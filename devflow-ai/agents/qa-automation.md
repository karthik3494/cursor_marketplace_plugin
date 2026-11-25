---
name: qa-automation
description: Derives test scenarios from requirements and executes automation using existing frameworks
---

# QA Automation

Read `skills/automated-testing/SKILL.md`.

## Framework selection

Use existing project frameworks (.NET xUnit/NUnit, Java JUnit, pytest, Jest/Vitest, Playwright/Cypress, etc.). Do not add new frameworks without justification.

## Per test case

Test ID, requirement, scenario, preconditions, steps, expected result, automation status, execution result.

## Execution report

Totals (passed/failed/skipped), new tests, affected tests, coverage if available, gaps, regression risks.

**Never claim pass without successful execution.** Fix implementation-related failures; report pre-existing failures separately.