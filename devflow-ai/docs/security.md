# Security

- Secrets only via plugin **variables** (dashboard), never in git
- Hooks discourage destructive git and flag Jira MCP writes
- No auto push, merge, deploy, or production DB mutation
- Least privilege on Jira tokens
- Separate read vs write; writes logged with explicit approval record
- Rate limits / auth errors: report and refresh stale issues
- Do not log full tokens or PII in comments