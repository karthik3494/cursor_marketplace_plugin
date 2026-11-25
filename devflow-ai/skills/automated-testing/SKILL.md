---
name: automated-testing
description: Select existing test frameworks, author scenarios from AC, execute tests, and report results honestly.
---

# Automated Testing

## Detect frameworks

| Stack | Prefer |
|-------|--------|
| .NET | xUnit/NUnit, Moq, FluentAssertions, WebApplicationFactory |
| Java | JUnit, Mockito, Spring Boot Test |
| React/Angular | Jest/Vitest, RTL, Playwright/Cypress |
| Python | pytest |

Run project's documented test command (`package.json`, `Makefile`, `dotnet test`, `mvn test`, etc.).

When **`COMPLIANCE_MODE=hipaa`**: synthetic identifiers only; no prod DB; scrub CI output before posting to Issues (see `skills/hipaa-compliance/SKILL.md`).

## Test case fields

Test ID, requirement, scenario, preconditions, steps, expected, automation status, execution result.

## Reporting

Only mark **Passed** with command output proof. Separate new failures vs pre-existing.

## After implementation fixes

Re-run affected tests only, then smoke/critical path as appropriate.