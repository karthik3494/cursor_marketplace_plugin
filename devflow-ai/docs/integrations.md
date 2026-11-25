# Integrations

## Release 1 — Jira (primary)

DevFlow ships two Jira MCP entries in `mcp.json` (enable one or both in Cursor):

| Server key | Transport | Auth | Best for |
|------------|-----------|------|----------|
| `jira-cloud` | `npx @aashari/mcp-server-atlassian-jira` | API token via plugin variables | Token-based CI-friendly reads/writes (with approval gates) |
| `atlassian-rovo` | `https://mcp.atlassian.com/v2/mcp` | Atlassian OAuth (browser) | Official Atlassian Rovo MCP |

### Plugin variables (`jira-cloud`)

| Variable | Example |
|----------|---------|
| `JIRA_BASE_URL` | `https://your-org.atlassian.net` |
| `JIRA_SITE_NAME` | `your-org` |
| `JIRA_EMAIL` | `you@company.com` |
| `JIRA_API_TOKEN` | (dashboard secret) |
| `JIRA_PROJECT_KEY` | `MAG` |

Cursor exposes bundled MCP as `plugin-devflow-ai-jira-cloud` (prefix may vary).

### Setup checklist

- [ ] Atlassian account with API token
- [ ] Jira permissions: browse project, assign issues, transition, edit labels (as needed)
- [ ] Plugin variables set in **Plugins → Configure**
- [ ] Approve MCP server on first use in Cursor
- [ ] Optional: connect `atlassian-rovo` and complete OAuth

### REST fallback (manual / scripted with approval)

```
GET {JIRA_BASE_URL}/rest/api/3/issue/{KEY}
```

Use Basic auth with email + API token. All PUT/POST require same approval flow as MCP writes.

## Other providers

| Provider | Approach |
|----------|----------|
| GitHub Issues | `gh` CLI / GitHub MCP |
| Azure DevOps | Azure MCP or CLI |
| GitLab | API/MCP |
| Bitbucket | API where supported |

Adapters share: **reads automatic when authorized; writes need per-field approval.**

## Status in this environment

| Integration | Implementation | Live verified |
|-------------|----------------|---------------|
| Jira interface (skills/agents) | Complete | **Not verified** — no Jira MCP/credentials in build environment |
| GitHub Issues | Documented adapter | Not verified |
| Plugin manifest | Complete | Structure validated locally |