# Agent Responsibilities

| Agent | Role | Writes code? | Writes Jira? |
|-------|------|--------------|--------------|
| workflow-orchestrator | Phase coordination, final report | No | No |
| work-item-selector | Backlog retrieval, recommendations | No | No (hands off assignment) |
| requirement-analyst | Requirements, clarification | No | No |
| solution-architect | Architecture, impact analysis | No | No |
| implementation-planner | Tasks, estimates, DoD | No | No |
| developer | Implementation, bug fixes | Yes | No |
| qa-automation | Tests, execution reports | Tests only | No |
| code-reviewer | Independent review | **No** | No |
| jira-management | PM read/write with approval | No | After approval only |

See `agents/*.md` for full prompts.