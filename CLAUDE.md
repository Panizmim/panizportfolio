# Paniz Molamohamad — portfolio

Personal portfolio for a junior product designer with an architecture background.
Next.js 15 (App Router) + TypeScript + Tailwind. Static, deploys to Vercel.

```bash
npm run dev     # http://localhost:3300
npm run build
```

**Port 3300 is deliberate.** Two of Paniz's other projects already claim ports:
Brand Asset / Dey House runs on 3000, viizhstudio on 3200. Don't move this one
onto either. The port is pinned in `package.json` and `.claude/launch.json` —
change both together.

## Where things live

| Path | What |
| --- | --- |
| `content/site.ts` | Name, role, hero intro, About copy, contact links, portrait, resume URL, site URL |
| `content/projects.ts` | All four projects and their case studies |
| `app/page.tsx` | The single page: hero, Selected Work, About, Contact |
| `app/work/[slug]/page.tsx` | Case study template — one route, all four projects |
| `components/` | Shell, Header, Footer, ProjectCard, ProjectCover, ProjectFigure, Reveal, SplitWords, SmoothScroll, SectionHeading, Arrow, LocalTime |

**Content changes belong in `content/`, not in components.** Any project with a
`caseStudy` object automatically gets a `/work/<slug>` page, its metadata and a
sitemap entry. Nothing about routing needs touching to add a project.

## Design system

Tokens are CSS variables in `app/globals.css`, stored as **RGB triplets**
(`--ink-rgb: 14 14 12`) so Tailwind opacity modifiers like `text-ink/80` work.
Changing a colour means editing that file only.

- Paper `#FDFDF7`, ink `#0E0E0C`, muted `#8F8F8C`, accent persimmon `#D4491F`
- Dark mode is automatic via `prefers-color-scheme`, with a lifted accent
- A fixed SVG paper grain sits over everything (`.grain`, tuned with `--grain`)
- Classes: `.label` (small uppercase metadata), `.chip` (outlined tag),
  `.btn` (button with arrow), `.link-rule` (wipe-in underline), `.rule-t` / `.rule-b`

### Conventions that were decided deliberately

These look like arbitrary choices but were not. Check with Paniz before undoing them.

- **No em dashes anywhere in user-visible copy.** She asked for them gone. They
  were replaced with punctuation that keeps each sentence grammatical — a colon
  where a label introduces a list, a comma where the clause was parenthetical, a
  full stop where the sentence ran long. Don't reintroduce them when writing new
  copy. Dashes inside code comments are fine.
- **Nothing is rounded.** Buttons, tag chips, cover images and the focus ring are
  all square. The only round element is the footer's status dot, which is an
  indicator rather than a control.
- **Poppins throughout**, self-hosted from `app/fonts` via `next/font/local`
  (SIL OFL, licence ships alongside). Only weights 400/500/600/700 are bundled;
  add a `.woff2` and list it in `app/layout.tsx` if another is needed. Tracking is
  set in `tailwind.config.ts` (`tight: -0.012em`) because Poppins is wide with a
  large x-height and needs far less negative tracking than a condensed grotesk.
  `display` and `sans` both resolve to Poppins but stay separate so the two roles
  can be split across families again later.
- **The hero heading is two lines**: "I'm" in ink, the name in accent, the role on
  line two. The square portrait sits beside it on desktop, above it on mobile.

## Motion

One primitive, used everywhere: `components/Reveal.tsx` fades content up out of a
soft blur, fired by an IntersectionObserver. `delay` staggers siblings, `immediate`
plays on mount. `SplitWords` reveals a headline word by word. `SmoothScroll` runs
Lenis and routes anchor links through it.

All of it, Lenis included, is disabled under `prefers-reduced-motion: reduce`.
Keep it that way.

## Images

`public/images/projects/`. Covers are cropped to 8:5 by `ProjectCover`. Section
images inside case studies render at their real aspect ratio via `ProjectFigure`,
so they need `width` and `height` in the content file:

```bash
sips -g pixelWidth -g pixelHeight public/images/projects/your-file.jpg
```

Very tall images are capped at 38rem and scroll inside their frame, so a
full-page screenshot can't push the rest of the case study off screen.

Sources: Dey House and LOG Studio are full-page screenshots of the live sites;
Worknest and Idea Soup are frames extracted from Paniz's portfolio PDF. The
Idea Soup research artefacts (personas, journey maps, red routes, wireframes)
are in Persian inside English case-study copy — that is known, not a bug.

## Gotchas

- **Never run `next build` or `rm -rf .next` while `next dev` is running.** They
  share `.next` and the dev server starts throwing `ENOENT: routes-manifest.json`
  on every request. Stop the dev server first, then build.
- A stale dev server renames itself to `next-server`, so `pkill -f "next dev"`
  misses it. Use `lsof -ti :3300 | xargs kill -9`.
- Tailwind config changes need a dev server restart; hot reload does not pick
  them up reliably.

## Still open

1. `site.portrait` — Paniz sent a replacement photo that never landed on disk, so
   the current image is still the first one she sent. She also has not chosen
   between keeping the square frame or switching to a portrait one. Worth knowing:
   the source is only 924px wide, so the existing square is already the loosest
   square crop possible from it.
2. `site.resumeUrl` — still `REPLACE_WITH_YOUR_DOC_ID`. The Google Doc must be
   shared as *Anyone with the link → Viewer*, and the URL should use `/preview`
   rather than `/edit`. Setting it to an empty string removes Resume from the nav.
3. `site.url` — still the placeholder domain. It drives canonical URLs, Open Graph
   tags and `sitemap.xml`, so it must be real before deploying.
4. No Open Graph image exists yet.
5. No git remote. `gh` is not installed on this machine.

## Language

Paniz writes in Persian and prefers replies in Persian. The site itself is in
English.
