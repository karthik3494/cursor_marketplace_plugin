# Configuration

## Plugin install

1. Clone or install marketplace repo
2. In Cursor: add plugin from path `devflow-ai` or install marketplace root per [marketplace docs](https://cursor.com/docs/reference/plugins)

## Variables (Plugins → Configure)

| Variable | Required | Purpose |
|----------|----------|---------|
| `JIRA_BASE_URL` | Yes | Cloud/site URL |
| `JIRA_SITE_NAME` | Yes | Subdomain for `jira-cloud` MCP (`your-org`) |
| `JIRA_EMAIL` | Yes | API user |
| `JIRA_API_TOKEN` | Yes | Atlassian token |
| `JIRA_PROJECT_KEY` | No | Default backlog project |
| `WORK_ITEM_PROVIDER` | No | Default `jira` |

Never commit token values.

## Bundled MCP (`mcp.json`)

- **`jira-cloud`** — `@aashari/mcp-server-atlassian-jira` (API token; uses variables above)
- **`atlassian-rovo`** — official cloud endpoint (OAuth in browser)

Disable either server in Cursor if your team standardizes on one auth model.

## Per-project

Use `/onboard-project` in each repository. Do not store repo-specific paths in the plugin.