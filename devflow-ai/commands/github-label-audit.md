---
name: github-label-audit
description: Audit GitHub issue labels and recommend additions aligned with repo conventions
---

# GitHub Label Audit

**Agent:** `issue-tracker-management`

1. `gh label list --repo {owner}/{repo}`
2. Inspect labels on target issue(s)
3. Recommend additions (e.g. `bug`, `enhancement`, `documentation`, `good first issue`)
4. Apply only via explicit `/update-github-issue` field approvals