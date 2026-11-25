# DevFlow AI Architecture

## Overview

DevFlow AI is a **Cursor Plugin** (`.cursor-plugin/plugin.json`) that packages agents, commands, skills, rules, hooks, and optional MCP servers into a distributable SDLC workflow.

```mermaid
flowchart TB
  subgraph user [User]
    CMD[Commands]
  end
  subgraph orchestration [Orchestration]
    WO[workflow-orchestrator]
  end
  subgraph specialists [Specialists]
    WIS[work-item-selector]
    RA[requirement-analyst]
    SA[solution-architect]
    IP[implementation-planner]
    DEV[developer]
    QA[qa-automation]
    CR[code-reviewer]
    JM[jira-management]
  end
  subgraph external [External]
    JIRA[Jira / PM APIs]
    REPO[Target Git Repos]
  end
  CMD --> WO
  WO --> WIS & RA & SA & IP & DEV & QA & CR & JM
  WIS --> JIRA
  JM --> JIRA
  DEV & QA & SA --> REPO
```

## Boundaries

| Layer | Responsibility |
|-------|----------------|
| Commands | User entry points; map to agents/skills |
| Agents | Role prompts and delegation contracts |
| Skills | Reusable procedures (Jira approval, test structure) |
| Rules | Always-on engineering standards |
| Hooks | Git/MCP safety guards |
| Variables | Jira connection metadata (secrets in dashboard) |

## Approval gates (Release 1)

1. Issue selection (user choice)
2. Assignment (`APPROVED: issue=… assignee=…`)
3. Implementation (explicit plan approval)
4. Jira writes (per-field)

## Multi-repo

Plugin content is repo-agnostic. Target repository context comes from **project-discovery** at runtime in the user's workspace—not from plugin source.