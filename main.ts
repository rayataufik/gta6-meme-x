// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The post itself is the entry: a GTA 6 meme posted on X from a public
// account. All this program does is hand the post's address to the grader:
// it copies POST.json from the repository root into the output directory,
// where the gate reads it. The house then reads the post from X itself
// (its first picture and its text) and hands that to the judge. Nothing
// this program writes is judged.
//
// Local run, the way the grader does it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// In the grader's container the repository is mounted at /bot and the
// output goes to /output; the two environment variables stand in for
// those paths when run anywhere else.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
