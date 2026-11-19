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

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// In the grader's container the repository is mounted at /bot and the
// output goes to /output; the two environment variables stand in for
// those paths when run anywhere else.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Read POST.json, check it really names an X post, and only then hand it
// on. The gate refuses a POST.json that does not name a post's address,
// so a bad file should fail here with a clear message instead of being
// copied through and refused later. The bytes written out are the file's
// own bytes, unchanged, so the two runs still write identical output.
const POST_PATH = join(BOT_DIR, 'POST.json');
let postText: string;
try {
  postText = readFileSync(POST_PATH, 'utf8');
} catch (err) {
  console.error(`could not read POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

let post: unknown;
try {
  post = JSON.parse(postText);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

const url = (post as { url?: unknown } | null)?.url;
const X_POST = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;
if (typeof url !== 'string' || !X_POST.test(url)) {
  console.error(`POST.json does not name an X post address: ${JSON.stringify(post)}`);
  process.exit(1);
}

writeFileSync(join(OUTPUT_DIR, 'POST.json'), postText);
