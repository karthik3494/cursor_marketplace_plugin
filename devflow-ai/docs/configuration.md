# Configuration

## Plugin install

Install from `devflow-ai/` or marketplace root. Set variables in **Plugins → Configure**.

## GitHub Issues (default)

| Variable | Required | Purpose |
|----------|----------|---------|
| `WORK_ITEM_PROVIDER` | Yes | Use `github` (default) |
| `GITHUB_OWNER` | Yes | Org or user |
| `GITHUB_REPO` | Yes | Repository with issues |
| `GITHUB_TOKEN` | Yes | PAT (`repo` scope; issue write if assigning/updating) |

Bundled MCP: **`github-issues`** → `@modelcontextprotocol/server-github`

### Token scopes

- Minimum: `repo` (private) or `public_repo` (public only)
- Assign/label/comment: write access to issues

### Quick test

```bash
gh issue list --repo OWNER/REPO --limit 5
```

(`gh` uses your login; MCP uses `GITHUB_TOKEN` from plugin config.)

## Jira (optional)

Set `WORK_ITEM_PROVIDER` to `jira` and configure `JIRA_*` variables. Enable `jira-cloud` MCP. See [integrations.md](integrations.md).

## Per-project repo work

Use `/onboard-project` in the application codebase (separate from issues repo if different).