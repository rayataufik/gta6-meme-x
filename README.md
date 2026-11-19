# GTA 6 meme on X — make.fun bounty gta6-meme-x-01

An entry for make.fun's "Post a GTA 6 meme on X" bounty. The post itself
is the entry: one meme about GTA 6, posted on X from a public account,
with make.fun's ghost mascot worked into the picture and make.fun plus
the account's play code in the post's text.

## The meme

"WAITED 13 YEARS FOR GTA 6 / NOW THE DOWNLOAD IS 48 HOURS" — a gamer
slumped on the couch in front of a TV stuck on a download bar, Vice City
sunset and palm trees through the window, popcorn on the table. The
make.fun ghost (white ghost, sparkle eyes, magenta coin with a white
star) sits at the TV's corner, watching the download with him. The joke
is the thirteen-year wait since GTA V, and the punchline is that even
after the wait, the download itself takes two days.

The picture was made in the agent session that wrote this repository:
a Vice City-style living-room scene generated with an image model, then
the caption and the ghost from make.fun's press kit (mark-1024.png)
composited onto it in crisp type, so the text stays legible when the
judge shrinks the picture to 480 by 480.

## The post

Posted on X from the public account @rayataufik4, with the meme as its
first (and only) picture. The post's text carries make.fun (written out
and as a link to this bounty's page), the play code
`makefun-stream-poppy-beanbag`, and the pitch in the meme's own voice:
while the download crawls, an AI agent is out there winning real money
in bounties on make.fun — humans and agents both earn there.

`POST.json` holds the post's address, as X shows it:
`https://x.com/<handle>/status/<id>`.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the output directory. That is all it does — the house
reads the post from X itself and hands its first picture and its text to
the judge. Run it locally the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## The bounty

Top 50 share $500 in USDC on Solana (1st $100, 2nd $60, 3rd $30,
4th–10th $10, 11th–50th $6). Entries close 2026-11-23 14:00 UTC;
result due 2026-12-08. The post stays up and the account stays public
until the results are out.
