---
name: github-progress-update
description: Draft GitHub issue progress comment and optional state/labels with approval before posting
---

# GitHub Progress Update

**Agent:** `issue-tracker-management`

1. Summarize dev/test/review progress (**de-identified** if `COMPLIANCE_MODE=hipaa`; use template in `skills/hipaa-compliance/SKILL.md`)
2. Show full comment markdown before post; refuse PHI in proposed text
3. Propose label/state changes in before/after table
4. Execute approved items only; verify with `gh issue view`