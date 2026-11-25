# DevFlow AI – Multi-Agent Software Development Team

[![Cursor Plugin](https://img.shields.io/badge/Cursor-Plugin-blue)](https://cursor.com/docs/reference/plugins)

DevFlow AI is a **production-oriented Cursor plugin** that coordinates the software development lifecycle: backlog selection, **confirmed assignment**, requirements clarification, architecture and planning, implementation, automated QA, independent code review, and **user-approved GitHub Issues or Jira updates**.

**Default issue tracker:** GitHub Issues (`WORK_ITEM_PROVIDER=github`).

**HIPAA track:** branch `feature/hipaa-compliance`, version `1.3.0-hipaa`, set `COMPLIANCE_MODE=hipaa` — see [docs/hipaa-operating-guide.md](docs/hipaa-operating-guide.md). Stay on this branch; do not merge to `main` without security review.

## Features

- **Nine specialized agents** with explicit delegation (orchestrator does not do specialist work)
- **Eleven slash commands** for full workflow or single steps
- **Eight skills** for Jira approval, testing, discovery, and review
- **Approval gates**: issue pick, assignment, implementation, per-field Jira writes
- **Multi-stack** via repository discovery (not hardcoded project metadata)
- **Hooks** for destructive Git patterns and Jira write awareness

## Quick start

### 1. Install locally

From this repository:

- **Single plugin:** point Cursor at `devflow-ai/`
- **Marketplace repo:** install from root; marketplace lists `devflow-ai` via `.cursor-plugin/marketplace.json`

### 2. Configure GitHub Issues

In **Plugins → Configure** set:

- `WORK_ITEM_PROVIDER` = `github` (default)
- `GITHUB_OWNER` — e.g. `karthik3494`
- `GITHUB_REPO` — e.g. `cursor_marketplace_plugin`
- `GITHUB_TOKEN` — PAT with issue access

Approve bundled MCP **`github-issues`** on first use.

Optional Jira: set `WORK_ITEM_PROVIDER=jira` and `JIRA_*` variables — see [docs/integrations.md](docs/integrations.md).

### 3. Run commands

| Command | Purpose |
|---------|---------|
| `/pick-next-item` | Recommend backlog items, select, assign with confirmation |
| `/assign-issue` | Assign one issue after preview |
| `/analyze-issue` | Requirements and clarification queries |
| `/implement-issue` | Plan → approve → build → test → review |
| `/fix-bug` | Focused bug fix workflow |
| `/review-code` | Independent review |
| `/onboard-project` | Discover repo architecture |
| `/generate-test-cases` | Structured test scenarios |
| `/update-github-issue` | Approved GitHub issue updates |
| `/github-label-audit` | GitHub label recommendations |
| `/github-progress-update` | GitHub progress comment |
| `/update-jira` | Jira field updates (when provider is jira) |
| `/jira-label-audit` | Jira labels |
| `/jira-progress-update` | Jira progress |

For the full lifecycle, ask the agent to run **`workflow-orchestrator`** after `/pick-next-item`.

## Validate

```bash
node devflow-ai/scripts/validate-plugin.mjs
```

## Project layout

```
devflow-ai/
├── .cursor-plugin/plugin.json
├── agents/          # 9 agents
├── commands/        # 11 commands
├── skills/          # 8 skills
├── rules/
├── hooks/
├── scripts/
├── docs/
└── assets/logo.svg
```

## Documentation

- [Architecture](docs/architecture.md)
- [Workflow](docs/workflow.md)
- [Configuration](docs/configuration.md)
- [Integrations](docs/integrations.md)
- [Security](docs/security.md)
- [Marketplace publishing](docs/marketplace-publishing.md)

## Known limitations (v1.0.0)

- Jira live integration **not verified** in plugin build CI; requires your MCP + credentials
- GitHub/Jira live calls require your token and MCP approval in Cursor
- Jira MCP optional unless `WORK_ITEM_PROVIDER=jira`
- Non-Jira providers are adapter-documented; Jira is Release 1 primary

## License

MIT — see [LICENSE](LICENSE).

## Publishing

See [docs/marketplace-publishing.md](docs/marketplace-publishing.md). Submission: [cursor.com/marketplace/publish](https://cursor.com/marketplace/publish).