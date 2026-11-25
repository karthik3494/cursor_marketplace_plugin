---
name: jira-management
description: Jira reads freely; writes require per-field explicit approval, preview, execute, and verify. Use for assign, update-jira, label audit, progress updates.
---

# Jira Management

## Tooling

Discover Jira MCP tools via `GetDynamicTools`. Auth via plugin variables — never embed tokens in prompts or commits.

## Write approval record (in-session)

Before each write, log:

```
APPROVED: issue={KEY} field={field} action={set|add|transition} value={exact value}
```

Without this record, refuse write.

## Preview table

| Field | Existing | Proposed | Rationale | User decision |

## Assignment

Use accountId (Cloud). Steps: search user → preview → explicit question → assign → verify assignee field.

## Labels

Merge, do not replace entire set unless approved. Inspect project conventions first.

## Status

List available transitions; refuse invalid transition.

## Failure handling

Report HTTP/MCP error, stale issue refresh, partial apply with verification checklist.

## Phrases that are NOT approval

"continue", "looks good", "proceed with dev", "go ahead" (without naming field/value).