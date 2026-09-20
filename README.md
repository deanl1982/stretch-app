# Groundwork

A daily mobility app built on natural human resting positions — deep squat, floor
sitting, kneeling, shin box — rather than gym-style passive stretching.

Open it, press one button, and get a session drawn at random from the library, capped
at twenty minutes. Follow it with a timer and illustrations, tick things off, watch a
streak build.

Built for people who already train but have neglected stretching, and who sit in a
chair for work.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # generator, timing and streak logic
npm run typecheck
npm run build      # -> dist/
```

There is no backend, no database, no API and no account. The whole thing is a static
bundle.

## How it works

**There are three ways to start.** A random draw capped at a time budget, a workout you
built yourself, or a one-off assembled on the spot from your favourites.

**Sessions are genuinely random.** Every draw shuffles the eligible pool and packs it
until the time budget is spent. The one exception: by default a gentle `opener` is
pinned first and a `rest` position last, because deep knee-flexion positions are where
people hurt themselves when they go into them cold. Settings has a **Pure chaos** toggle
that removes even that.

Sessions are seeded, so the same seed always produces the same session. That is what
makes them shareable by URL, replayable from history, and testable.

**Safety is subtractive, not advisory.** Anything you tick in Settings is removed from
the pool entirely — from random draws *and* from the builder — rather than shown with a
warning. Seven of the hip positions combine
flexion, adduction and rotation — the dislocation position after a posterior-approach
hip replacement — so ticking that box has to actually remove them.

There is also one *inverse* flag: `requiresFlag`. The sciatic nerve slider is withheld
from everyone until you say you have nerve symptoms, because handing end-range
stretching to someone with an irritated nerve makes them worse, and handing a nerve
glide to someone with plain tight hamstrings is pointless.

**You can build your own.** `/build` asks which areas you want, then lets you pick the
exercises. Selection order is the running order — the app does not silently reshuffle
what you built, though there is a one-tap "Order it sensibly" that sorts warm-up first
and something restful last. Workouts can be saved, renamed, edited and re-run from
`/routines`.

**Favourites are a first-class way in.** Star anything in the library and it shows up in
`/favourites`, with a one-tap "Build a workout from these" that pre-loads them all. This
exists because most people have three or four positions they actually keep using, and
making those two taps away matters more than any amount of programming cleverness.

**Timing is one model.** `src/session/phases.ts` splits an exercise into the blocks the
clock actually counts — one per set, per side — so "60s each side" counts down from 60
twice rather than from 2:00 once. The session packer and the player both derive their
numbers from it, so the preview's estimate is what the timer runs.

**Figures are posed, not drawn.** A body is defined once as joints in
`src/figures/types.ts`; each illustration is a table of about sixteen coordinates in
`poses.ts`. Visit `/figures` to see every pose at once. Everything uses `currentColor`,
so theming is free.

## Layout

```
src/
  content/     exercise library and its types — the substance of the app
  session/     seeded RNG, the random generator, phase splitting
  figures/     posable SVG figure system
  storage/     localStorage persistence, streaks, favourites, routines, backup/restore
  routes/      screens
  safety.ts    disclaimer and red-flag copy, kept in one reviewable place

```

## Content honesty

The library is built from five source videos, cross-checked against published evidence.
Several claims did not survive that check and are not repeated: that a deep squat
"decompresses" the spine, that stretching "releases fascia", that stretching prevents
injury, that deadlifting makes your hamstrings stiffer. Where a source offered a
*mechanism*, the app states a *feeling* and a *behaviour* instead.

Corrections live on the exercise itself, in `evidenceNote`, shown behind an "Is this
actually true?" disclosure. The McGill core exercises are included; the fragile-spine
framing around them is not, because fear-avoidance is the thing the best trial evidence
in that field is designed to undo.

## Your data

Everything lives in this browser and nowhere else. That means clearing site data wipes
your history, favourites and saved workouts, and your phone keeps a separate streak from
your laptop. Settings has **Download backup** and **Restore from backup**, which covers
all four. Restores merge rather than overwrite, so importing an old backup will not
destroy newer work. The exported JSON is also the shape a backend would store, so adding
sync later would be additive rather than a rewrite.

## Deploying

Hosted on **Azure Static Web Apps, Free tier** — £0/month, 100 GB bandwidth, managed
TLS, one custom domain, and free PR preview environments. Because there is no metered
resource in the design, there is nothing that can run up a bill.

First time:

```bash
az staticwebapp create \
  --name groundwork \
  --resource-group <your-rg> \
  --location westeurope \
  --source https://github.com/<you>/stretch-app \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

That creates the app and adds `AZURE_STATIC_WEB_APPS_API_TOKEN` to the repo secrets.
If you let it generate its own workflow file, delete that one and keep
`.github/workflows/azure-static-web-apps.yml`, which typechecks and tests before it
deploys.

`staticwebapp.config.json` handles SPA fallback (so `/library/shin-box` resolves rather
than 404s) and immutable caching on hashed assets.

## Not medical advice

This is general movement guidance, not medical advice. The red-flag list in Settings is
worth reading once — a small number of symptoms need a clinician, not an app.
