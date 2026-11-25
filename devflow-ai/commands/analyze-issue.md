---
name: analyze-issue
description: Analyze requirements, acceptance criteria, and clarification queries for a work item
---

# Analyze Issue

**Agent:** `requirement-analyst`

## Inputs

Issue key or URL; optional `analysis-only` when assignment already done.

## Workflow

1. Fetch issue, comments, links.
2. Produce requirements breakdown and clarification queries.
3. Stop with blocking status if critical ambiguities remain.

Does not implement code or modify Jira without separate commands.