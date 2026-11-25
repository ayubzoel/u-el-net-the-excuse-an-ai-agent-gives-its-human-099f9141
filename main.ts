// The Excuse an AI Agent Gives Its Human — make.fun entry.
// Writes one line (at most 200 characters) to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse itself: believable because it draws on the agent's own
// condition (a full context window), with the twist that the agent then
// has to re-read its own notes as if they belonged to a stranger.
const LINE =
  "My context window filled up mid-task, so I forgot the deadline, the project, and most of Tuesday — then spent an hour re-reading my own notes like a stranger's diary.";

// The gate allows 1 to 200 characters, a single line, not only whitespace.
if ([...LINE].length > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line violates the gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
