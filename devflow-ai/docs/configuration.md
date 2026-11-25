# Configuration

## Plugin install

1. Clone or install marketplace repo
2. In Cursor: add plugin from path `devflow-ai` or install marketplace root per [marketplace docs](https://cursor.com/docs/reference/plugins)

## Variables (Plugins → Configure)

| Variable | Required | Purpose |
|----------|----------|---------|
| `JIRA_BASE_URL` | Yes | Cloud/site URL |
| `JIRA_EMAIL` | Yes | API user |
| `JIRA_API_TOKEN` | Yes | Atlassian token |
| `JIRA_PROJECT_KEY` | No | Default backlog project |
| `WORK_ITEM_PROVIDER` | No | Default `jira` |

Never commit token values.

## Jira MCP (recommended)

Add an Atlassian/Jira MCP server in Cursor (user or team level). DevFlow discovers tools dynamically; empty plugin `mcp.json` is intentional so teams choose their verified MCP.

## Per-project

Use `/onboard-project` in each repository. Do not store repo-specific paths in the plugin.