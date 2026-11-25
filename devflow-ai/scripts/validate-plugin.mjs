#!/usr/bin/env node
/**
 * Validates DevFlow AI plugin structure and frontmatter.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pluginRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(pluginRoot, "..");

const errors = [];
const warnings = [];

function readJson(rel) {
  const p = path.join(pluginRoot, rel);
  if (!fs.existsSync(p)) {
    errors.push(`Missing: ${rel}`);
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch (e) {
    errors.push(`Invalid JSON ${rel}: ${e.message}`);
    return null;
  }
}

function frontmatterName(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) {
    errors.push(`No frontmatter: ${path.relative(pluginRoot, filePath)}`);
    return null;
  }
  const name = m[1].match(/^name:\s*(.+)$/m);
  const desc = m[1].match(/^description:\s*(.+)$/m);
  if (!name) errors.push(`Missing name in ${path.relative(pluginRoot, filePath)}`);
  if (!desc) errors.push(`Missing description in ${path.relative(pluginRoot, filePath)}`);
  return name?.[1]?.trim();
}

const manifest = readJson(".cursor-plugin/plugin.json");
if (manifest) {
  if (manifest.name !== "devflow-ai") errors.push("manifest name must be devflow-ai");
  if (!manifest.version) errors.push("manifest missing version");
  if (!manifest.variables?.properties?.JIRA_API_TOKEN) {
    warnings.push("JIRA variables schema incomplete");
  }
}

readJson("hooks/hooks.json");
const mcp = readJson("mcp.json");
if (mcp && !mcp.mcpServers?.["github-issues"]) {
  warnings.push('mcp.json missing github-issues server (default provider)');
}

const requiredAgents = [
  "workflow-orchestrator",
  "work-item-selector",
  "requirement-analyst",
  "solution-architect",
  "implementation-planner",
  "developer",
  "qa-automation",
  "code-reviewer",
  "issue-tracker-management",
  "jira-management",
];

for (const a of requiredAgents) {
  const fp = path.join(pluginRoot, "agents", `${a}.md`);
  if (!fs.existsSync(fp)) errors.push(`Missing agent: ${a}`);
  else if (frontmatterName(fp) !== a) {
    errors.push(`Agent frontmatter name mismatch: ${a}`);
  }
}

const requiredCommands = [
  "pick-next-item",
  "assign-issue",
  "analyze-issue",
  "implement-issue",
  "fix-bug",
  "review-code",
  "onboard-project",
  "generate-test-cases",
  "update-jira",
  "jira-label-audit",
  "jira-progress-update",
  "update-github-issue",
  "github-label-audit",
  "github-progress-update",
];

for (const c of requiredCommands) {
  const fp = path.join(pluginRoot, "commands", `${c}.md`);
  if (!fs.existsSync(fp)) errors.push(`Missing command: ${c}`);
  else if (frontmatterName(fp) !== c) errors.push(`Command name mismatch: ${c}`);
}

const requiredSkills = [
  "work-item-selection",
  "requirement-analysis",
  "architecture-analysis",
  "implementation-planning",
  "automated-testing",
  "production-code-review",
  "jira-management",
  "github-issue-management",
  "project-discovery",
];

for (const s of requiredSkills) {
  const fp = path.join(pluginRoot, "skills", s, "SKILL.md");
  if (!fs.existsSync(fp)) errors.push(`Missing skill: ${s}`);
  else if (frontmatterName(fp) !== s) errors.push(`Skill name mismatch: ${s}`);
}

const marketplacePath = path.join(repoRoot, ".cursor-plugin", "marketplace.json");
if (fs.existsSync(marketplacePath)) {
  try {
    const mp = JSON.parse(fs.readFileSync(marketplacePath, "utf8"));
    if (!mp.plugins?.some((p) => p.name === "devflow-ai")) {
      warnings.push("marketplace.json missing devflow-ai entry");
    }
  } catch (e) {
    errors.push(`Invalid marketplace.json: ${e.message}`);
  }
}

console.log("DevFlow AI plugin validation");
console.log(`Root: ${pluginRoot}`);
if (warnings.length) {
  console.log("\nWarnings:");
  warnings.forEach((w) => console.log(`  - ${w}`));
}
if (errors.length) {
  console.log("\nErrors:");
  errors.forEach((e) => console.log(`  - ${e}`));
  process.exit(1);
}
console.log("\nOK — all checks passed.");
process.exit(0);