---
name: pick-next-item
description: Recommend and select the next GitHub or Jira work item, optional assignment with explicit confirmation
---

# Pick Next Item

**Agents:** `work-item-selector` → `issue-tracker-management` (assignment) → `requirement-analyst`

**Provider:** `WORK_ITEM_PROVIDER` (default **`github`**)

## GitHub steps

1. List open issues in `{GITHUB_OWNER}/{GITHUB_REPO}`.
2. Rank recommendations (SOURCE vs RECOMMENDATION).
3. User may pick any issue (e.g. `#42`).
4. Fetch latest issue via `gh issue view` or MCP.
5. User selects assignee (`@github-login`) or skips if analysis-only.
6. Resolve user exists on GitHub; disambiguate.
7. Assignment preview: `#n`, title, labels, current/proposed assignees, state.
8. Ask: *"Do you approve assigning issue #{n} to @{login}?"*
9. Execute only after explicit yes.
10. Verify assignees.
11. Start requirement analysis.

## Jira steps

Same gate pattern using issue key, Jira accountId, and `JIRA_PROJECT_KEY` default — see `skills/jira-management/SKILL.md`.

**Not approval:** picking issue, picking user, or implementation approval.