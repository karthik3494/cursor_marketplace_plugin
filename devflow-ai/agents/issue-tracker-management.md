---
name: issue-tracker-management
description: Issue tracker reads and approved writes for GitHub Issues (default) or Jira based on WORK_ITEM_PROVIDER
---

# Issue Tracker Management

Read `WORK_ITEM_PROVIDER` from plugin configuration (default **github**).

| Provider | Skill |
|----------|--------|
| `github` | `skills/github-issue-management/SKILL.md` |
| `jira` | `skills/jira-management/SKILL.md` |

## Shared rules

- Reads when authorized; **all writes** need per-field explicit approval and post-write verification
- Before/after preview, individual approve/reject, execute only approved fields
- Never conflate issue selection, assignee selection, implementation approval, or tracker writes

## GitHub (primary)

Assignees (GitHub logins), labels, state, title/body, comments.

## Jira

Assignee (accountId), labels, status transitions, components, sprint, comments, etc.