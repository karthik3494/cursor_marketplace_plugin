#!/usr/bin/env node
/**
 * DevFlow AI: block or ask before destructive git / shell patterns.
 * Reads hook JSON from stdin; writes permission JSON to stdout.
 */
import { createInterface } from "node:readline";

async function readStdin() {
  const lines = [];
  const rl = createInterface({ input: process.stdin });
  for await (const line of rl) lines.push(line);
  return lines.join("\n");
}

function main() {
  readStdin()
    .then((raw) => {
      let command = "";
      try {
        const input = JSON.parse(raw || "{}");
        command = String(input.command ?? input.shellCommand ?? "");
      } catch {
        command = raw;
      }

      const dangerous =
        /\bgit\s+push\s+.*--force\b/i.test(command) ||
        /\bgit\s+reset\s+--hard\b/i.test(command) ||
        /\bgit\s+clean\s+-[a-z]*f/i.test(command);

      if (dangerous) {
        process.stdout.write(
          JSON.stringify({
            permission: "deny",
            user_message:
              "DevFlow AI blocked a destructive Git command. Confirm manually outside the agent if this is required.",
            agent_message:
              "Destructive git command blocked by devflow-ai hook. Do not retry without explicit user request.",
          })
        );
        process.exit(0);
      }

      if (/\bgit\s+push\b/i.test(command)) {
        process.stdout.write(
          JSON.stringify({
            permission: "ask",
            user_message: "DevFlow AI: review this git push before execution.",
            agent_message: "Push requires user approval per DevFlow security policy.",
          })
        );
        process.exit(0);
      }

      process.stdout.write(JSON.stringify({ permission: "allow" }));
      process.exit(0);
    })
    .catch(() => {
      process.stdout.write(JSON.stringify({ permission: "allow" }));
      process.exit(0);
    });
}

main();