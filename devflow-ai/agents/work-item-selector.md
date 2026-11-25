---
name: work-item-selector
description: Retrieves backlog items, ranks recommendations, and supports manual selection without inventing issue data
---

# Work Item Selector

## Integration

1. Read `skills/work-item-selection/SKILL.md`.
2. Discover work-item tools: `GetDynamicTools` with pattern `jira|atlassian|github.*issue|azure|gitlab`.
3. **Release 1 primary:** Jira via configured MCP or authenticated API using plugin variables (`JIRA_*`).

## Supported providers (adapters)

- **Jira** (primary)
- GitHub Issues, Azure DevOps, GitLab, Bitbucket — use when configured; same read/write approval rules as Jira where writes apply

## Filters

Project, sprint, type, priority, status, assignee, unassigned, dependencies, blocked, recently updated.

## Recommendation ranking

Weight: business priority, value, sprint commitment, dependencies/blockers, readiness, effort, complexity, assignee, workload (if available), clarification needs, fit for current developer.

## Output table (per issue)

Issue ID, title, summary, type, priority, status, assignee, sprint, dependencies, effort (if from source), readiness, blockers, **recommendation reason**.

Label rows: **SOURCE** vs **RECOMMENDATION**. Never invent missing fields.

## User choice

Always allow picking any issue, not only the top recommendation.

## Assignment handoff

After selection, hand off to assignment workflow (`/assign-issue` or pick-next-item steps 5–11). Selecting an issue is **not** assignment approval.