---
name: work-item-selection
description: Retrieve backlog items from Jira and other PM systems, rank recommendations, and support manual selection. Use for pick-next-item, backlog triage, and sprint planning.
---

# Work Item Selection

## Integration order

1. `GetDynamicTools` — pattern `jira|atlassian`
2. Plugin variables: `JIRA_BASE_URL`, `JIRA_EMAIL`, `JIRA_API_TOKEN`, `JIRA_PROJECT_KEY`
3. If no MCP: document **unverified** and ask user to add Atlassian/Jira MCP (see `docs/integrations.md`)

## Jira JQL examples (adapt filters)

```
project = {KEY} AND status in ("Open","To Do","Backlog") ORDER BY priority DESC, updated DESC
```

## Read vs write

| Operation | Approval |
|-----------|----------|
| Search, get issue, users, sprint | Authorized reads |
| Assign, transition, label, comment | Explicit per-action approval |

## Ranking factors

Priority, value, sprint, blockers/dependencies, readiness, effort/complexity, assignee/workload, clarification debt, developer fit.

## Output rules

- Mark **SOURCE** fields from API
- Mark **RECOMMENDATION** for AI ranking only
- Never fabricate issue metadata

## Provider adapters

| Provider | Discovery |
|----------|-----------|
| Jira | MCP or REST v3 |
| GitHub | `gh issue list` / Issues MCP |
| Azure DevOps | MCP or CLI |
| GitLab | API/MCP |
| Bitbucket | API where available |