---
name: project-discovery
description: Onboard a repository by detecting stack, build/test commands, architecture, and integrations. Use for onboard-project and before implementation.
---

# Project Discovery

## Steps

1. List root: solution files, `package.json`, `pom.xml`, `pyproject.toml`, `go.mod`, `Dockerfile`, `.github/workflows`
2. Read README, AGENTS.md, `.cursor/rules`, CONTRIBUTING
3. Infer architecture (monolith, modular monolith, microservices, SPA+BFF)
4. Find DB configs (connection strings names only — no secret values)
5. Detect test runners and CI commands
6. Note existing MCP or integration docs

## Output template

```markdown
## Project context
- Languages / frameworks:
- Entry points:
- Data stores:
- External integrations:
- Build:
- Test:
- Architecture summary:
- Conventions observed:
```

Do not hardcode discovered facts into plugin files; keep per-repo in session/report.