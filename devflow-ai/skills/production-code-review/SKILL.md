---
name: production-code-review
description: Independent production-focused review checklist with severity-classified findings. Use for review-code and post-implementation gates.
---

# Production Code Review

## Review dimensions

Correctness, AC compliance, security/auth/validation, errors/logging, performance/DB, API compatibility, resource cleanup, duplication, abstraction excess, test gaps, operability.

## Red flags

Swallowed exceptions, missing authz, N+1, wrong transactions, races, hardcoded IDs/secrets, silent data loss paths.

## Finding record

```
ID | Severity | Location | Description | Impact | Evidence | Fix
```

## Severity guide

- **Critical:** exploit, data loss, prod outage risk
- **High:** AC miss, major bug, serious security gap
- **Medium:** maintainability, missing edge tests
- **Low:** style, minor suggestions

Reviewer does not patch code.