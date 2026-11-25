# DevFlow AI – Multi-Agent Software Development Team

[![Cursor Plugin](https://img.shields.io/badge/Cursor-Plugin-blue)](https://cursor.com/docs/reference/plugins)

DevFlow AI is a **production-oriented Cursor plugin** that coordinates the software development lifecycle: backlog selection, **confirmed assignment**, requirements clarification, architecture and planning, implementation, automated QA, independent code review, and **user-approved Jira updates**.

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

### 2. Configure Jira

In **Plugins → Configure** set:

- `JIRA_BASE_URL`
- `JIRA_EMAIL`
- `JIRA_API_TOKEN`
- Optional: `JIRA_PROJECT_KEY`

Connect a **Jira/Atlassian MCP** server in Cursor (recommended). See [docs/integrations.md](docs/integrations.md).

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
| `/update-jira` | Approved field updates |
| `/jira-label-audit` | Label recommendations |
| `/jira-progress-update` | Progress comment and status |

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
- Plugin `mcp.json` is empty by design — attach your team's Jira MCP
- Non-Jira providers are adapter-documented; Jira is Release 1 primary

## License

MIT — see [LICENSE](LICENSE).

## Publishing

See [docs/marketplace-publishing.md](docs/marketplace-publishing.md). Submission: [cursor.com/marketplace/publish](https://cursor.com/marketplace/publish).