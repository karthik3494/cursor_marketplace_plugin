# Marketplace Submit Checklist (PR / Release)

Use this before [Cursor Marketplace publish](https://cursor.com/marketplace/publish).

## Repository

- [ ] Public repo: `https://github.com/karthik3494/cursor_marketplace_plugin`
- [ ] Default branch `main` includes `devflow-ai/.cursor-plugin/plugin.json`
- [ ] CI green: **Validate DevFlow AI Plugin** workflow

## Local validation

```bash
cd devflow-ai
node scripts/validate-plugin.mjs
node scripts/validate-manifest.mjs
node scripts/validate-mcp.mjs
```

## Configure in Cursor

- [ ] Install plugin from repo path
- [ ] Set all required variables (`JIRA_*`)
- [ ] Enable `jira-cloud` MCP; test `jira_get` on `/rest/api/3/myself`
- [ ] Run `/pick-next-item` on a test project

## Publish

1. Open https://cursor.com/marketplace/publish
2. Submit repository URL
3. Wait for review — do not claim “listed” until approved

## PR template (internal)

**Title:** Prepare DevFlow AI v1.1.0 for marketplace

**Summary:** Jira MCP wired, CI validation, docs and version bump.

**Test plan:** CI passes; manual Jira smoke test with token MCP.