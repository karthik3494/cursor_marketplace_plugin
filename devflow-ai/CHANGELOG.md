# Changelog

All notable changes to DevFlow AI are documented here.

## [1.2.0] - 2026-11-25

### Changed

- **Default work item provider: GitHub Issues** (`github-issues` MCP, `GITHUB_*` variables)
- New agent `issue-tracker-management` and skill `github-issue-management`
- Commands: `/update-github-issue`, `/github-label-audit`, `/github-progress-update`
- Jira remains optional via `WORK_ITEM_PROVIDER=jira`

## [1.1.0] - 2026-11-25

### Added

- Bundled `jira-cloud` MCP (`@aashari/mcp-server-atlassian-jira`) and optional `atlassian-rovo` endpoint
- `JIRA_SITE_NAME` plugin variable
- GitHub Actions workflow `validate-plugin.yml`
- `validate-manifest.mjs` and `validate-mcp.mjs` CI checks

## [1.0.0] - 2026-11-25

### Added

- Initial Cursor Marketplace plugin: 9 agents, 11 commands, 8 skills
- Mandatory work-item selection, assignment confirmation, and per-field Jira approval flows
- Workflow orchestrator with phased approval gates
- Development standards rule and safety hooks (destructive git, Jira MCP advisory)
- Plugin variables for Jira configuration
- Documentation set and `validate-plugin.mjs`
- Marketplace manifest at repository root