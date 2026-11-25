---
name: assign-issue
description: Assign a specific Jira issue after identity resolution, preview, and explicit confirmation
---

# Assign Issue

**Agent:** `jira-management` (with `work-item-selector` for user resolution).

## Inputs

- Issue key (required)
- Target assignee display name or account ID (required)

## Workflow

1. Fetch latest issue.
2. Resolve assignee via Jira user search; no ambiguous assignments.
3. Preview: current vs proposed assignee and metadata.
4. Require explicit approval naming **exact issue and assignee**.
5. Perform assignment; verify; report failures.
6. If issue changed since preview, refresh preview and re-approve.

Do not assume Cursor user equals Jira user.