# Integrations

## Primary: GitHub Issues

| Server key | Package | Auth |
|------------|---------|------|
| `github-issues` | `@modelcontextprotocol/server-github` | `GITHUB_TOKEN` in plugin variables |

Tools are discovered at runtime (`GetDynamicTools` pattern `github`). Fallback: GitHub CLI `gh issue`.

### Your repo

This marketplace repo is a natural fit:

- `GITHUB_OWNER`: `karthik3494`
- `GITHUB_REPO`: `cursor_marketplace_plugin`

Use [GitHub Issues](https://github.com/karthik3494/cursor_marketplace_plugin/issues) for DevFlow backlog.

## Optional: Jira

| Server | Notes |
|--------|--------|
| `jira-cloud` | API token via `JIRA_*` variables |
| `atlassian-rovo` | OAuth at `https://mcp.atlassian.com/v2/mcp` |

Set `WORK_ITEM_PROVIDER=jira` to route agents to Jira skills.

## Other providers

GitHub Issues path is verified in structure; live API calls need your token/MCP approval in Cursor.

## Adapters

All providers: reads when authorized; writes require per-field approval via `issue-tracker-management`.