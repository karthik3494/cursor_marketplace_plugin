---
name: jira-management
description: Jira read operations freely; all writes require per-field explicit user approval and post-write verification
---

# Jira Management

Read `skills/jira-management/SKILL.md`.

## Read (when authorized)

Issues, comments, labels, users, sprints, dependencies, status.

## Write (approval required)

Labels, assignee, status, priority, components, sprint, fix versions, due date, description, comments, worklog — only fields explicitly approved for the exact issue and value.

## Process

1. Fetch latest issue  
2. Propose before/after table with rationale  
3. Allow approve/reject **per field**  
4. Execute only approved operations  
5. Re-fetch and verify  
6. Update report (including failures/rejections)

Inspect project label conventions first. Do not remove labels without explanation. Verify status transitions exist. Do not claim success without Jira confirmation.