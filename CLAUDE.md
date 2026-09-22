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
| | Laid out after daniela-rivas.com/work/rushtranslate: split 33/67 above `lg`. The left column (Back, title, one-line descriptor, opening paragraph, then Role and Year, then Live site) is `sticky` under the header and holds still; the right column scrolls with the sections and their images. A section now renders nothing but its pictures. Paniz stripped it back in stages: first the paragraphs and bullets, then the numbers, then the headings, because she does not want a case study to read as a step-by-step process. `heading`, `body` and `bullets` are all still filled in and are all unrendered; `heading` survives only as the React key. What is left is a run of screenshots with a short caption under each. Below `lg` the two stack. The page ends on an "All work" / "Get in touch" row: Paniz asked for the "More work" grid to come off, so a case study never shows the other projects. The left column scrolls on short viewports but shows no scrollbar (`.no-scrollbar`), and carries `data-lenis-prevent` so the wheel reaches it. Its type sizes are odd on purpose: 58px title, 14.5px descriptor and meta values, 12.5px sentence-case meta labels, all read off the reference site's own CSS at Paniz's request, which is why they are arbitrary px rather than the Tailwind scale. The meta labels deliberately do not use `.label` (that one is uppercase and tracked out) |
| `components/` | Shell, Header, Footer, ThemeToggle, ProjectCard, ProjectCover, ProjectFigure, ProjectScreens, Reveal, SplitWords, SmoothScroll, SectionHeading, Arrow, LocalTime |

Four fields are still in the type and still filled in, but nothing renders them
any more: `Project.context`, `Project.stack`, and `CaseStudySection.body` and
`.bullets`. Paniz asked for the Context and Tools rows to come off the case
study page, the cards were stripped back to cover, title and one line, and the
explanatory paragraphs between the screenshots were cut so a case study reads as
heading, image, short caption. The writing is kept in the file on purpose, in
case it is wanted back. Delete the fields or put them back somewhere, but don't
assume they show.

**Content changes belong in `content/`, not in components.** Any project with a
`caseStudy` object automatically gets a `/work/<slug>` page, its metadata and a
sitemap entry. Nothing about routing needs touching to add a project.

## Design system

Tokens are CSS variables in `app/globals.css`, stored as **RGB triplets**
(`--ink-rgb: 14 14 12`) so Tailwind opacity modifiers like `text-ink/80` work.
Changing a colour means editing that file only.

- Paper `#FDFDF7`, ink `#0E0E0C`, muted `#8F8F8C`, accent persimmon `#D4491F`
- **Dark mode has two layers.** `prefers-color-scheme` decides a first visit;
  `ThemeToggle` in the header then writes `data-theme="light" | "dark"` onto
  `<html>` and into `localStorage`, and that wins. The dark token block in
  `globals.css` is written twice for exactly that reason, once under the media
  query guarded by `:not([data-theme="light"])` and once under
  `:root[data-theme="dark"]`. Change a dark colour and you change both. A small
  script in `app/layout.tsx` replays the stored choice before the first paint,
  which is why `<html>` carries `suppressHydrationWarning`. The accent is
  lifted in dark so it still passes contrast on dark paper.
- The toggle holds no React state: which icon shows is CSS (`.theme-sun` /
  `.theme-moon`), keyed off the same two states, so there is nothing to
  mismatch during hydration. Its label stays "Toggle dark mode" either way.
- `darkMode` in `tailwind.config.ts` is a custom `variant` pointing at those
  same two states, so a `dark:` utility would follow the toggle. Nothing uses
  one yet.
- A fixed SVG paper grain sits over everything (`.grain`, tuned with `--grain`)
- Classes: `.label` (small uppercase metadata), `.chip` (outlined tag),
  `.btn` (button with arrow), `.link-rule` (wipe-in underline), `.rule-t` / `.rule-b`,
  `.no-scrollbar` (scrolls, shows no scrollbar)
- **The page runs full bleed.** `Shell` has no max width and a deliberately narrow
  gutter: 16px, 24px from `md`, matching the reference site. Those two values in
  `components/Shell.tsx` move every section on every page at once. The old
  `maxWidth.shell` token is gone, so nothing else pins the width.
- **Cards' covers are black and white and take their colour back on hover**
  (`.cover-tone`, driven by the card's `.group`). Asked for deliberately.

### Conventions that were decided deliberately

These look like arbitrary choices but were not. Check with Paniz before undoing them.

- **No em dashes anywhere in user-visible copy.** She asked for them gone. They
  were replaced with punctuation that keeps each sentence grammatical — a colon
  where a label introduces a list, a comma where the clause was parenthetical, a
  full stop where the sentence ran long. Don't reintroduce them when writing new
  copy. Dashes inside code comments are fine.
- **Nothing is rounded**, with two named exceptions. Buttons, tag chips, cover
  images and the focus ring are all square. The exceptions are the footer's
  status dot, which is an indicator rather than a control, and the phone
  captures in `ProjectScreens`, which Paniz asked to be rounded at 32px so they
  read as phones. Don't generalise either one.
- **Poppins throughout**, self-hosted from `app/fonts` via `next/font/local`
  (SIL OFL, licence ships alongside). Only weights 400/500/600/700 are bundled;
  add a `.woff2` and list it in `app/layout.tsx` if another is needed. Tracking is
  set in `tailwind.config.ts` (`tight: -0.012em`) because Poppins is wide with a
  large x-height and needs far less negative tracking than a condensed grotesk.
  `display` and `sans` both resolve to Poppins but stay separate so the two roles
  can be split across families again later.
- **The hero heading is two lines**: "I'm" in ink, the name in accent, the role on
  line two. The portrait sits beside it on desktop, above it on mobile, in a 4:5
  frame cropped from the top (`object-top`) so the crop never clips the head.

## Motion

One primitive, used everywhere: `components/Reveal.tsx` fades content up out of a
soft blur, fired by an IntersectionObserver. `delay` staggers siblings, `immediate`
plays on mount. `SplitWords` reveals a headline word by word. `SmoothScroll` runs
Lenis and routes anchor links through it.

All of it, Lenis included, is disabled under `prefers-reduced-motion: reduce`.
Keep it that way.

## Images

`public/images/projects/`. **`project.cover` never appears on a case study.** It
feeds the card on the home page and the Open Graph image, nothing else: Paniz
wants a case study to open on the work rather than repeat its card, and she is
supplying one cover per project for the home page alone. A project with no
`cover` still works; its card just shows a ruled "Cover image" placeholder,
which is where Worknest sits until she sends one.

`ProjectCover` crops to `card` (0.865, portrait), lifted from the reference
site. Covers on disk are landscape, so the frame shows the middle 54% of the
width, anchored to the top. It suits a centred composition; a cover whose
subject sits at one edge needs a portrait re-export. The component still
carries an unused 8:5 frame from when case studies had a hero.

Section
images inside case studies render at their real aspect ratio via `ProjectFigure`,
so they need `width` and `height` in the content file:

```bash
sips -g pixelWidth -g pixelHeight public/images/projects/your-file.jpg
```

A section can also carry `screens`: a row of narrow phone captures rendered
side by side by `ProjectScreens`, with no border and no backing panel, rounded
at 32px. The row is as wide as the set, up to five across above `sm`, two
below. Anything wide still belongs in `images`. The Dey House café menu uses
both, the desktop screenshot then four phone screens; Idea Soup's wireframes
are five screens and no image.

**Tall images are capped at 38rem and scroll inside their frame**, so a
full-page screenshot can't run away with the page. The threshold is 1.4 times
taller than wide. That frame keeps its scrollbar: `.no-scrollbar` belongs to
the sticky left column, and hiding it here once made these figures read as
blank boxes, which is how the first LOG Studio set came across. The cap was
briefly removed and Paniz asked for it back, so leave both as they are.

If you ever recapture the LOG Studio site: its hero is `100vh`, so a tall
browser window just stretches the hero and renders nothing else, and its
service cards and team cards reveal on scroll, so a static full-page grab
catches them half faded with their images still unloaded. Paniz supplies these
screenshots herself now.

Sources: Dey House is a set of screenshots of the live site; LOG Studio was
captured over the DevTools protocol at 1500x950 per section;
Worknest and Idea Soup come from Paniz's portfolio PDF, the per-frame files in
`~/Downloads/Paniz's Portfolio`. Two Worknest mockups were on disk at 603px and
835px wide and looked soft, because a figure is rendered at about 990 CSS px.
The PDFs carry the same mockups as embedded JPEGs at 1372px and 1900px, so they
were pulled out by scanning the raw PDF bytes between the JPEG SOI and EOI
markers and written back at native size. `sips` also rasterises those PDFs
sharply at 3840 wide if a frame is ever needed whole.

**Don't write Figma into the project copy.** Paniz did not design the two live
sites in it, so no case study, summary or Tools field may say she did. This is
about the claim, not the word: Figma and FigJam are back in her About "Tools"
chips, because those describe what she uses, which is a different statement. The
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

1. `site.resumeUrl` — still `REPLACE_WITH_YOUR_DOC_ID`. The Google Doc must be
   shared as *Anyone with the link → Viewer*, and the URL should use `/preview`
   rather than `/edit`. Setting it to an empty string removes Resume from the nav.
2. `site.url` resolves itself and needs no edit to deploy: `NEXT_PUBLIC_SITE_URL`
   if set, else the Vercel project's production domain, else localhost. Set the
   env var only once a bought domain points at the project.
3. No Open Graph image exists yet.
4. No git remote. `gh` is not installed on this machine.

## Language

Paniz writes in Persian and prefers replies in Persian. The site itself is in
English.
