---
name: implement-issue
description: Run architecture, planning, approval gate, development, QA, and review for an approved issue
---

# Implement Issue

**Agents:** `workflow-orchestrator` delegates `solution-architect` → `implementation-planner` → (approval) → `developer` → `qa-automation` → `code-reviewer` → fix loop.

## Prerequisites

- Issue context established (via `/pick-next-item` or user-provided assigned issue)
- No open **blocking** clarification questions

## Workflow

1. Technical analysis and implementation plan.
2. Present plan; obtain **explicit implementation approval**.
3. Implement; run tests; independent review; resolve Critical/High findings.
4. Offer `/update-github-issue` or `/update-jira` per `WORK_ITEM_PROVIDER` (separate approval).

Does not assign issues or post Jira updates without approval commands.