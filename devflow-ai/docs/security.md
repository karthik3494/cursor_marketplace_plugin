# Security

## General

- Secrets only via plugin **variables** (dashboard), never in git
- Hooks discourage destructive git and gate MCP writes (and HIPAA reads when configured)
- No auto push, merge, deploy, or production DB mutation
- Least privilege on tokens (GitHub/Jira)
- Separate read vs write; writes logged with explicit approval record
- Do not log full tokens or **PII/PHI** in comments or chat summaries
- Rate limits / auth errors: report and refresh stale issues

## HIPAA mode (`COMPLIANCE_MODE=hipaa`)

See **`skills/hipaa-compliance/SKILL.md`** and **`docs/hipaa-operating-guide.md`**.

### Threat model highlights

| Vector | Mitigation in DevFlow |
|--------|------------------------|
| PHI in issues → LLM | Redacted summaries; stop on detection; no full-body paste |
| PHI in GitHub comments | De-identified template; PHI scan before approved writes |
| PHI in tests/logs | QA skill: synthetic data only; reviewer checks logging |
| Unbounded MCP reads | Hook: ask user when `COMPLIANCE_MODE=hipaa` |
| Subprocessors | Documented BAA checklist; no agent claims compliance |

### BAA checklist (organizational)

- [ ] Cursor / model provider posture approved for workspace data
- [ ] GitHub org + repo visibility + token scope
- [ ] MCP packages (`server-github`, etc.) accepted in vendor review
- [ ] No ePHI in issue tracker by policy

DevFlow agents **do not** replace a HIPAA risk assessment or Security Officer sign-off.