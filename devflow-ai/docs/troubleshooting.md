# Troubleshooting

## Jira tools not found

- Confirm MCP server connected (Settings → MCP)
- Run agent with `GetDynamicTools` pattern `jira`
- Verify variables in Plugins → Configure

## Assignment fails

- Refresh issue; confirm accountId
- Check "Assign Issues" permission
- User must explicitly approve assignment string

## Hook blocks MCP

- Expected for unapproved writes; complete approval record in skill
- Adjust matcher in `hooks/hooks.json` only if false positives

## Destructive git blocked

- `scripts/guard-destructive-shell.mjs` — user must run risky git manually if intended

## Empty mcp.json

- Intentional: add team Jira MCP in Cursor; do not commit tokens into plugin