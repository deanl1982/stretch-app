# Groundwork Flexibility

A daily mobility app built on natural human resting positions — deep squat, floor
sitting, kneeling, shin box — rather than gym-style passive stretching.

Open it, press one button, and get a session drawn at random from the library, capped
at twenty minutes. Follow it with a timer and illustrations, tick things off, watch a
streak build.

Built for people who already train but have neglected stretching, and who sit in a
chair for work.

## The development gate

The site is currently behind a password (`hobbitfeet` by default). First visit asks you
to name an admin account; after that it is a sign-in.

**This is not security.** Groundwork Flexibility is a static bundle with no backend, so the check
runs in the visitor's own browser — anyone with devtools can set the session flag by
hand, and the password hash ships in the JavaScript. It keeps out a casual passer-by who
finds the URL. It will not keep out anyone who is trying.

For real protection, Azure Static Web Apps has **built-in authentication on the Free
tier**: add a role-gated route rule to `public/staticwebapp.config.json` and invite yourself.
That is enforced at the edge, before any content is served.

To lift the gate when the site goes public, build with `VITE_REQUIRE_LOGIN=false`, or
delete `src/auth/`, `src/routes/Login.tsx` and the guard block in `src/App.tsx`. To
change the password, put a new SHA-256 in `VITE_ADMIN_PASSWORD_HASH` (see
`.env.example`).

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

**There are four ways to start.** A random draw across everything, a random draw
**focused on chosen body areas**, a workout you built yourself, or a one-off assembled
on the spot from your favourites.

**Focus and randomness are independent.** Home has a "Focus on" row — pick Anywhere, or
any combination of areas — and the draw is restricted to them. It rides in the URL as
`?focus=hips,back`, so a focused session is still seeded, shareable and reproducible.
The builder's first step offers the same thing: choose your areas, then either pick the
exercises yourself or hit "Draw one for me". Focus is deliberately **not** persisted —
it resets to Anywhere each time, so the default behaviour stays honest.

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

## Mobile and accessibility

Most people will open this on a phone, so that is the target rather than an
afterthought.

Verified with **axe-core across all ten routes at 390px: zero violations**
(WCAG 2.0/2.1/2.2 A and AA, plus best-practice rules). What that automated pass
does not cover was checked separately:

- **Contrast** is computed, not eyeballed. Body text 17.2:1, secondary text 7.9:1,
  every text pair well clear of 4.5:1. Borders that *identify* a control — inputs,
  unselected chips, secondary buttons — use `--color-control` at 4.1–5.4:1 against
  the surfaces they sit on, because 1.4.11 wants 3:1 and the decorative
  `--color-edge` only manages 1.5:1. Cards keep the softer edge, where no minimum
  applies.
- **Tap targets** are 44px or larger everywhere. The exception is the settings
  checkboxes at 24px, which meets 2.5.8 on its own — and each is wrapped in a
  clickable label giving a 316×50px row, so the real target is the whole line.
- **Keyboard focus** is a 2px cream outline declared globally, so no component can
  quietly drop it. Confirmed with real Tab presses rather than programmatic focus,
  which does not trigger `:focus-visible`.
- **Landscape** (844×390) works on every screen, player controls included — 1.3.4
  forbids locking to one orientation.
- **Text spacing** (1.4.12): applying the required line-height, letter-spacing and
  word-spacing overrides causes no clipping or horizontal scroll.
- **Reflow** (1.4.10): no horizontal scrolling down to 320px.
- **Page titles** update per route, or a screen reader announces the same title on
  every navigation.
- **The 12-week heatmap** is summarised in one sentence for screen readers instead
  of announcing 84 individual squares.
- **Zoom is not blocked** — no `user-scalable=no`.

One judgement call worth knowing: the session timer auto-advances, which brushes
against 2.2.1 (timing adjustable). It is exempt as a real-time activity — the
timing *is* the exercise — and there is a always-available Pause, plus Back and
Skip. The countdown itself is hidden from screen readers, since announcing a
number every second would make the screen unusable; the position name and cues
are in a polite live region instead.

## Your data

Everything lives in this browser and nowhere else. That means clearing site data wipes
your history, favourites and saved workouts, and your phone keeps a separate streak from
your laptop. Settings has **Download backup** and **Restore from backup**, which covers
all four. Restores merge rather than overwrite, so importing an old backup will not
destroy newer work. The exported JSON is also the shape a backend would store, so adding
sync later would be additive rather than a rewrite.

## Deploying

Hosted on **Azure Static Web Apps, Free tier** — £0/month, 100 GB bandwidth/month
(per subscription), managed TLS, 2 custom domains, and 3 free PR preview
environments. Because there is no metered resource in the design, there is nothing
that can run up a bill.

Infrastructure is Terraform, in [`infra/`](infra/README.md). Read
[`infra/README.md`](infra/README.md) for the full first-time bootstrap — Azure
login, resource provider registration, OIDC federated credentials, GitHub
variables, first apply, first deploy, and teardown.

The split that confuses people: **Terraform creates the Static Web App resource;
the GitHub Action deploys the content into it.** `terraform apply` alone gives you
an empty app.

Two workflows, mutually exclusive by path filter:

| Workflow | Triggers on | Does |
| --- | --- | --- |
| `.github/workflows/azure-static-web-apps.yml` | app files | typecheck, test, build, deploy (PR preview or production) |
| `.github/workflows/infra.yml` | `infra/**` | `fmt`, `validate`, `plan` on PRs; `apply` on merge |

Both authenticate to Azure with OIDC federated credentials. There are no
long-lived secrets in the repository — the deploy job fetches the Static Web Apps
deployment token at run time via `az staticwebapp secrets list`.

`public/staticwebapp.config.json` handles SPA fallback (so `/library/shin-box` resolves
rather than 404s) and immutable caching on hashed assets. The deploy workflow
copies it into `dist/` before upload, because only `dist/` is uploaded.

## Not medical advice

This is general movement guidance, not medical advice. The red-flag list in Settings is
worth reading once — a small number of symptoms need a clinician, not an app.
