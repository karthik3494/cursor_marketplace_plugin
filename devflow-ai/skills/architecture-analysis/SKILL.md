---
name: architecture-analysis
description: Analyze repository architecture, impacted components, and propose the simplest maintainable solution. Use during technical design.
---

# Architecture Analysis

## Discovery steps

1. Run `skills/project-discovery` workflow on target repo
2. Map modules/layers (API, domain, data, UI, jobs)
3. Trace call paths from entry points to persistence
4. List external integrations

## Impact analysis

For the issue, list files/modules, API contract deltas, schema migrations, feature flags, config.

## Solution bar

Prefer smallest change that meets AC. Document alternatives and why rejected (complexity, risk, time).

## Required deliverable sections

See `agents/solution-architect.md` mandatory output list.

## Risks

Call out: backward compatibility, authz holes, N+1, transactions, race conditions, observability gaps.