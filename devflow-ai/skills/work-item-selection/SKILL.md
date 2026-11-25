---
name: work-item-selection
description: Retrieve backlog items from GitHub Issues or Jira, rank recommendations, and support manual selection. Use for pick-next-item and backlog triage.
---

# Work Item Selection

Check **`WORK_ITEM_PROVIDER`** (default: `github`).

## GitHub Issues (default)

### Tooling

1. MCP: `plugin-devflow-ai-github-issues` — discover tools via `GetDynamicTools` pattern `github`
2. Variables: `GITHUB_OWNER`, `GITHUB_REPO`, `GITHUB_TOKEN`
3. CLI: `gh issue list --repo {owner}/{repo} --state open --json number,title,body,labels,assignees,createdAt,updatedAt`

### Filters

State (open/closed), labels, assignee, author, milestone, no:assignee, sort, search keywords.

### Ranking

Priority labels (if present), project signals, dependencies (linked issues/PRs in body), readiness, complexity hints, assignee load, fit for developer.

### Issue reference

Display `#123` and URL `https://github.com/{owner}/{repo}/issues/{n}`

---

## Jira (`WORK_ITEM_PROVIDER=jira`)

1. MCP `plugin-devflow-ai-jira-cloud` or `atlassian-rovo`
2. Variables: `JIRA_*`
3. JQL examples in prior docs

---

## Output rules

- **SOURCE** — API/MCP data only
- **RECOMMENDATION** — AI ranking
- Never fabricate metadata

## Read vs write

Search/list/get = reads. Assign/label/comment/state = approval via `issue-tracker-management`.