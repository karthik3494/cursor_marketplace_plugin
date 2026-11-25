#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const mcp = JSON.parse(fs.readFileSync(path.join(root, "mcp.json"), "utf8"));
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, ".cursor-plugin", "plugin.json"), "utf8")
);

const declared = new Set(Object.keys(manifest.variables?.properties ?? {}));
const errors = [];

function scan(obj) {
  if (typeof obj === "string") {
    for (const m of obj.matchAll(/\$\{([A-Z0-9_]+)\}/g)) {
      if (!declared.has(m[1])) {
        errors.push(`mcp.json references undeclared variable: ${m[1]}`);
      }
    }
  } else if (obj && typeof obj === "object") {
    for (const v of Object.values(obj)) scan(v);
  }
}

if (!mcp.mcpServers?.["jira-cloud"]) {
  errors.push('mcp.json must define mcpServers["jira-cloud"]');
}

scan(mcp);

if (errors.length) {
  console.error("mcp validation failed:");
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}
console.log("mcp.json OK");