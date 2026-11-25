#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, ".cursor-plugin", "plugin.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

const errors = [];

const kebab = /^[a-z0-9]+(-[a-z0-9]+)*(\.[a-z0-9]+(-[a-z0-9]+)*)?$/;
if (!kebab.test(manifest.name)) errors.push("name must be kebab-case");
if (!/^\d+\.\d+\.\d+/.test(manifest.version ?? "")) errors.push("version should be semver");
if (!manifest.description) errors.push("description required");
if (!manifest.author?.name) errors.push("author.name required");

const props = manifest.variables?.properties ?? {};
for (const key of manifest.variables?.required ?? []) {
  if (!props[key]) errors.push(`required variable missing schema: ${key}`);
}

if (errors.length) {
  console.error("manifest validation failed:");
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}
console.log("manifest OK");