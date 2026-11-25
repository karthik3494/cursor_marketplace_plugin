---
name: hipaa-compliance
description: >-
  PHI-safe DevFlow behavior for regulated health workloads. Use when
  COMPLIANCE_MODE is hipaa or the repository handles HIPAA obligations.
disable-model-invocation: false
---

# HIPAA Compliance (DevFlow)

Apply when plugin variable **`COMPLIANCE_MODE=hipaa`** or the target repo is HIPAA-regulated.

## Definitions

- **PHI / ePHI:** Individually identifiable health information in any medium (names, MRNs, dates + conditions, full faces, contact info + health context, etc.).
- **Minimum necessary:** Only the least data needed for the task—especially in chat, issues, comments, logs, and tests.

## Non-negotiable rules

1. **No PHI in GitHub/Jira issues or comments** — use internal ticket IDs, control IDs (e.g. `AC-12`), and generic descriptions.
2. **No PHI in Cursor chat** — summarize by issue `#` and control reference; redact if source text contains identifiers.
3. **No PHI in code, logs, errors, analytics, or test fixtures** — synthetic data only (see testing section).
4. **No production patient data** in dev, CI, or agent-driven shell commands.
5. **Stop and escalate** if an issue body/comment appears to contain PHI: do not quote it; ask user to remediate the issue and use de-identified text.
6. **Tracker writes** still require per-field approval; additionally reject proposed comments/bodies that contain PHI patterns or clinical narratives.

## Issue and backlog handling

| Do | Don't |
|----|-------|
| List `#123` + short **sanitized** title | Paste full issue body into chat |
| Flag `contains-phi` label if seen | Continue requirement analysis on PHI-laden text |
| Prefer labels `no-phi`, `synthetic-data-only` | Bulk-fetch all open issues without user scope |

## Requirement analysis

- Map NFRs to safeguards: **access control**, **audit controls**, **integrity**, **transmission security**, **authentication**, **person/entity authentication** where applicable.
- Clarification questions must use **hypothetical/synthetic** examples only.
- Assumptions touching PHI handling require explicit user acknowledgment.

## Architecture & implementation

- Document **data flows**, **PHI stores** (if any in product), **trust boundaries**, and **subprocessors** (hosting, AI, issue tracker).
- Changes affecting audit, encryption, retention, or authz are **High** risk until reviewed.

## Testing

- Fixtures: synthetic names, fake MRNs (invalid checksum / reserved test ranges), no real individuals.
- Never commit exports from prod DB; never log request/response bodies with identifiers in CI output shared to Issues.

## Code review (HIPAA add-on)

**Critical/High** if:

- PHI or credentials in logs/errors
- Missing authz on clinical or admin functions
- Audit events missing for sensitive reads/writes (when product requires)
- Unencrypted PHI at rest/transit where encryption is required
- Weak session handling on privileged surfaces

## External posts (GitHub progress)

Use this comment template only:

```markdown
## DevFlow status (de-identified)
- Issue: #N (no clinical details)
- Scope: [control/framework reference]
- State: [implemented | in review | blocked]
- Verification: [test type passed, no patient data used]
- Risks/limitations: [generic]
```

## BAA / subprocessors (human decision)

Agents do **not** certify HIPAA compliance. Remind user to confirm BAAs and approved configurations for: Cursor/LLM, GitHub, MCP vendors, cloud runtime—**before** processing ePHI.

## When unsure

Stop implementation; status `Blocked – compliance review required`.