---
name: pick-next-item
description: Recommend and select the next Jira work item, then optional assignment with explicit confirmation
---

# Pick Next Item

**Agent:** `work-item-selector` → `jira-management` for assignment → `requirement-analyst` to start analysis.

## Steps

1. Retrieve available issues (default project: plugin variable `JIRA_PROJECT_KEY` if set).
2. Analyze and present **ranked recommendations** (SOURCE vs RECOMMENDATION).
3. Let user **manually select** any issue.
4. Fetch latest issue details.
5. Let user select intended assignee (or skip if analyzing assigned issue only).
6. Resolve Jira user identity (account ID); disambiguate if needed.
7. Show assignment preview (issue, current/proposed assignee, project, priority, status, action).
8. Ask: *"Do you approve assigning {ISSUE} to {USER}?"* — only explicit yes proceeds.
9. Execute assignment only after approval.
10. Re-fetch and verify assignee.
11. Invoke `requirement-analyst` for the selected issue.

**Not approval:** picking issue, picking user, or implementation approval.