# Integrations

## Release 1 — Jira (primary)

**Verified path:** User-configured Jira/Atlassian MCP + plugin variables for REST fallback documentation.

### Setup checklist

- [ ] Atlassian account with API token
- [ ] Jira permissions: browse project, assign issues, transition, edit labels (as needed)
- [ ] MCP server connected in Cursor (team or user)
- [ ] Plugin variables set in dashboard

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