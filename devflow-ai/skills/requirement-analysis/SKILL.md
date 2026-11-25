---
name: requirement-analysis
description: Parse issue requirements and acceptance criteria; produce blocking and non-blocking clarification queries. Use before implementation.
---

# Requirement Analysis

## Sources

Description, AC fields, custom fields, comments, linked issues, attachments metadata.

## Checklist

- Business objective stated?
- Functional requirements enumerable?
- NFRs (performance, security, compliance)?
- Edge cases and error paths?
- Dependencies on other teams/systems?
- AC testable and unambiguous?

## Clarification template

```
Q{n} | Requirement: ... | Ambiguity: ... | Why: ... | Options: A/B/C | Recommended: ... | If unanswered: ... | Blocks: yes/no
```

## Assumptions

Prefix with `ASSUMPTION:` and require user ack for assumptions that affect scope or security.

## Stop implementation when

Any `Blocks: yes` question lacks an answered decision.