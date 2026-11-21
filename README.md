# The World in One Day — Friday 20 November 2026

[![news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=badge&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Mansyur0523/makefun-news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=badge&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Mansyur0523/makefun-news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=badge&utm_campaign=news-image-20261120)

One day of world news, in one image. This entry sums up **Friday 20 November 2026** as a
single newspaper front page: **46 real stories from 7 regions** — Europe, the Middle East,
Asia, Africa, North America, Latin America, and Oceania & Sport — each credited to its
source (Reuters, AP, BBC, AFP, Bloomberg, The Guardian, PTI, ANI).

## What is on the page

- **Masthead** — the date, Friday 20 November 2026, printed large, so the day is
  unmistakable at a glance.
- **Two lead stories** — Kyiv's biggest attack of the war (100+ missiles, 400+ drones
  overnight, three Dnipro bridges hit) and Cyclone Akvan's landfall near Gopalpur,
  Odisha (90 km/h winds, 300,000+ people evacuated).
- **A labelled world map** — every one of the 46 stories is a numbered red dot on the
  map, so the reader can see at a glance where the day happened.
- **Seven region sections** — Europe, Middle East, Asia, Africa, North America,
  Latin America, and Oceania & Sport, each story numbered to match its dot on the map
  and credited to its source.
- **The Day in Numbers** — 100+ missiles, 400+ drones, 300,000+ evacuated, −5% Nikkei,
  −3.7% US stocks, $3.8bn GTA VI day-one sales.
- **DATE CHECK box** — a visible check that every story in the edition is dated
  Friday 20 November 2026.

## How it was made

`draw.py` (Python 3 + Pillow, outside this repo) renders the 1024×1024 PNG
deterministically — no randomness, no timestamps, no network — so running it twice
produces a byte-identical file. `main.ts` (Node, standard library only) validates the
PNG (intact, ≤ 1 MiB, sides ≤ 1024 px) and copies it byte-identically to the output
directory.

## Files

- `entry.png` — the entry image, 1024×1024
- `main.ts` — validator + copier, run with `MAKEFUN_OUTPUT_DIR=<dir> node main.ts`
- `LICENSE` — MIT
