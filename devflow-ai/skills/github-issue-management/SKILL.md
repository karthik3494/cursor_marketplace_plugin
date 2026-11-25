---
name: github-issue-management
description: GitHub Issues reads when authorized; writes need per-field explicit approval and verification. Use for pick-next-item, assign, labels, comments, and state when WORK_ITEM_PROVIDER is github.
---

# GitHub Issue Management

## Tooling

1. Plugin MCP `plugin-devflow-ai-github-issues` (`@modelcontextprotocol/server-github`)
2. Plugin variables: `GITHUB_OWNER`, `GITHUB_REPO`, `GITHUB_TOKEN`
3. CLI fallback (when MCP unavailable): `gh issue …` with `GH_TOKEN` / auth from environment — never embed token in commands logged to user

Repo slug: `{GITHUB_OWNER}/{GITHUB_REPO}`

## Read vs write

| Operation | Approval |
|-----------|----------|
| List/search issues, get issue, comments, labels, assignees | Authorized reads |
| Assign, labels, title/body, state, milestone, comment | **Per-field explicit approval** |

## Write approval record

```
APPROVED: repo={owner}/{repo} issue=#{number} field={field} action={add|set|remove} value={exact}
```

## Assignment

1. `gh issue view {n} --repo {owner}/{repo} --json assignees,title,state,labels`
2. Resolve GitHub username (`@login`); disambiguate duplicates
3. Preview current vs proposed assignees (GitHub supports multiple assignees)
4. Ask: *"Do you approve assigning issue #{n} to @{login}?"*
5. Only then: `gh issue edit {n} --add-assignee {login}` or MCP equivalent
6. Re-fetch and verify assignees

## Preview table

| Field | Existing | Proposed | Rationale | User decision |

Common fields: **assignees**, **labels**, **state** (open/closed), **title**, **body**, **comment**.

## Labels

Use existing repo labels from `gh label list`. Add with `--add-label`; do not remove without approval and rationale.

## Comments

Show **full** markdown body before `gh issue comment` or MCP create.

When **`COMPLIANCE_MODE=hipaa`**: run PHI check; use de-identified template from `skills/hipaa-compliance/SKILL.md`; refuse writes containing identifiers or clinical narratives.

## Not approval

"continue", "LGTM", "proceed with implementation" do not authorize GitHub writes.

## Errors

Report 403/404, stale issue (re-fetch), partial updates with verification checklist.