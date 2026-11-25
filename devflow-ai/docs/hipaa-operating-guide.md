# HIPAA Operating Guide (DevFlow AI)

Use branch **`feature/hipaa-compliance`** and set **`COMPLIANCE_MODE=hipaa`** in Plugins → Configure.

## Before you start

- [ ] Legal/security confirmed BAAs and approved use of Cursor + GitHub (+ MCP) for this work **without ePHI in tools**
- [ ] GitHub Issues use a **no-PHI** template; label `no-phi` on safe work items
- [ ] Application repo has its own `.cursor/rules` for org-specific controls

## Install from branch

```bash
git fetch origin feature/hipaa-compliance
git checkout feature/hipaa-compliance
```

Install plugin from `devflow-ai/` path in Cursor.

## Variables

| Variable | Value |
|----------|--------|
| `COMPLIANCE_MODE` | `hipaa` |
| `GITHUB_*` | As usual (private repo recommended) |

## Command habits

See `skills/hipaa-compliance/SKILL.md`. Prefer issue `#` references; use `/github-progress-update` only with de-identified template.

## Not on `main`

This track is intentionally **not merged** until your security team reviews. Keep `main` on `COMPLIANCE_MODE=standard` for non-regulated use.