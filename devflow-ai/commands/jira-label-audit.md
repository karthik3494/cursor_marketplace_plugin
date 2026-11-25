---
name: jira-label-audit
description: Audit existing Jira labels and recommend additions aligned with project conventions
---

# Jira Label Audit

**Agent:** `jira-management`

1. Read issue and project label usage patterns.
2. Recommend labels (examples: backend, frontend, api, database, security, automation-testing — adapt to project).
3. Present proposed label set; writes only via explicit `/update-jira` approval.