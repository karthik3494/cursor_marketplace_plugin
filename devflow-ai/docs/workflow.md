# End-to-End Workflow

Phases enforced by `workflow-orchestrator` and `commands/implement-issue.md`.

## Phase diagram

```
Discovery → Assignment* → Requirements → Clarification? → Architecture → Plan → Impl approval → Dev → QA → Review → Fix loop → Jira prep → Jira approval → Final report
```

\*Skip assignment when user requests analysis-only or issue already assigned.

## Final report template

### Work item
- Issue ID/URL, selection, assignee, assignment verification

### Requirement analysis
- Objective, functional/NFR, AC, clarifications, assumptions

### Architecture
- Existing, proposed, impacts, risks

### Estimation
- Task table summary, total, actual if known, variance

### Implementation
- Files, API/DB/config/docs changes

### Automated testing
- Scenarios, pass/fail/skip, coverage, gaps

### Code review
- Findings by severity, resolved/outstanding

### Jira updates
- Recommended vs approved, verification

### Final status
`Completed` | `Completed with accepted limitations` | `Blocked – clarification required` | `Blocked – technical dependency` | `In Progress` | `Failed`