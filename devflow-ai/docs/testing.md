# Testing DevFlow AI

## Static validation

From repo root:

```bash
node devflow-ai/scripts/validate-plugin.mjs
```

Checks: manifest JSON, hooks JSON, marketplace entry, frontmatter on agents/commands/skills, required paths.

## Manual acceptance (see master prompt §13)

Work through scenarios:

1. Install plugin locally from `devflow-ai/`
2. Configure Jira variables + MCP
3. Run `/pick-next-item` — verify ranked list and manual override
4. Assignment preview + confirmation + verify
5. `/analyze-issue` — clarification output
6. `/onboard-project` on a sample repo
7. `/implement-issue` — approval gate before edits
8. `/update-jira` — per-field approve/reject

## Automated external tests

Blocked without Jira MCP in CI. Document results as **unverified** until team runs checklist.