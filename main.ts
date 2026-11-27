// One Emoji, One Dream Vacation — make.fun entry.
//
// Exactly one emoji, nothing else, standing in for the trip of
// dreams: one particular place, stone giants on a remote island,
// the postcard you would send home from Easter Island.
// The program writes exactly that emoji to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🗿";

// The gate allows 1 to 8 characters and exactly one emoji: refuse to
// write anything that could not pass it, instead of shipping an
// invalid entry.
if ([...EMOJI].length !== 1 || EMOJI.length < 1 || EMOJI.length > 8) {
  throw new Error(`entry is ${JSON.stringify(EMOJI)}, outside the 1-8 one-emoji gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
