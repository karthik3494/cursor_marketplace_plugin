---
name: assign-issue
description: Assign a GitHub issue or Jira issue after preview and explicit confirmation
---

# Assign Issue

**Agent:** `issue-tracker-management`

## GitHub

- Inputs: issue **number** (required), GitHub **username** (required)
- Repo from `GITHUB_OWNER` / `GITHUB_REPO`
- Preview, explicit approval, `gh issue edit --add-assignee` or MCP, verify

## Jira

- Inputs: issue **key**, assignee **accountId** or resolvable user
- Same approval rules

Do not assume Cursor user equals GitHub/Jira user.