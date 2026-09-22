# Paniz Molamohamad — Portfolio

Next.js (App Router) + TypeScript + Tailwind. Static, fast, SEO-ready, built to deploy on Vercel.

## Run it

```bash
npm install
npm run dev
```

## Editing content

Everything you'll want to change lives in two files — no component edits needed.

| File | What's in it |
| --- | --- |
| `content/site.ts` | Name, role, hero intro, About copy, contact links, site URL, resume link |
| `content/projects.ts` | All four projects, in display order |

**Before deploying:** set `site.url` in `content/site.ts` to your real domain. It drives
canonical URLs, Open Graph tags and `sitemap.xml`.

**Resume link.** `site.resumeUrl` is what the nav's Resume item points at. Share the Google
Doc as *Anyone with the link → Viewer* first, or the link fails for everyone but you. Use the
`/preview` form of the URL rather than `/edit` — it renders the document with no editing
chrome and no sign-in prompt. Setting `resumeUrl` to an empty string removes Resume from the
nav.

### Adding a project

Append an object to the `projects` array in `content/projects.ts`. Array order = page order.

### Adding project images

Drop files into `public/images/projects/`, then point `cover.src` at them:

```ts
cover: {
  src: "/images/projects/worknest-cover.png",
  alt: "Describe what the image shows.",
},
```

All four projects have covers already. If you add a new project without one, a ruled
placeholder of the same proportion holds the space until you drop the file in.

Covers look best at **1600 × 1000** (8:5) — they're cropped to that ratio. Section images
keep their real aspect ratio instead, so give them `width` and `height`. Photos → `.jpg`,
flat UI / type → `.png`.

### Where the images came from

- Dey House and LOG Studio — full-page screenshots of the live sites
- Worknest and Idea Soup — frames pulled out of the portfolio PDF

`scripts/` isn't in this repo, but the screenshots were taken with puppeteer-core driving
the local Chrome, scrolling each page first so lazy images and scroll-triggered sections
render before the capture.

### Adding a case study page

Any project with a `caseStudy` object automatically gets a page at `/work/<slug>` — the
route, static params, metadata and sitemap entry are all derived from the content file.
All four projects have one. A project with both a case study and a `liveUrl` shows two
links on its card: one into the case study, one out to the live site.

Each section takes a `heading` plus any of `body` (paragraphs), `bullets`, and `images`
(Figma frames with optional captions):

```ts
{
  heading: "Research",
  body: ["Paragraph one.", "Paragraph two."],
  bullets: ["A finding.", "Another finding."],
  images: [{ src: "/images/projects/idea-soup-personas.png", alt: "Two personas.", caption: "Personas" }],
}
```

All four case studies are written up and illustrated.

## Design system

Tokens are CSS variables in `app/globals.css` — change them there and the whole site follows.
They're stored as RGB triplets (`--ink-rgb: 14 14 12`) so Tailwind opacity modifiers like
`text-ink/80` work.

- **Paper** `#FDFDF7` · **Ink** `#0E0E0C` · **Muted** `#8F8F8C` · **Accent** persimmon `#D4491F`
- Dark mode is automatic via `prefers-color-scheme`, with a lifted accent for contrast
- **Poppins** throughout, self-hosted from `app/fonts` via `next/font/local`
  (SIL Open Font License — `app/fonts/OFL.txt`). Only the four weights the site uses are
  bundled: 400, 500, 600, 700. To add one, drop the `.woff2` in and list it in `app/layout.tsx`
- A fixed SVG paper grain sits over the page (`.grain`); tune it with `--grain`
- Reusable classes: `.label` (small uppercase metadata), `.chip` (outlined pill),
  `.btn` (pill button with arrow), `.link-rule` (wipe-in underline),
  `.rule-t` / `.rule-b` (hairlines)

## Motion

- `components/SmoothScroll.tsx` — Lenis smooth scrolling, and it routes anchor links
  through Lenis so `#work` etc. animate
- `components/Reveal.tsx` — the one reveal primitive: fade up out of a soft blur, fired by
  an IntersectionObserver. `delay` staggers siblings; `immediate` plays on mount
- `components/SplitWords.tsx` — headline that reveals word by word

All of it is switched off under `prefers-reduced-motion: reduce`, including Lenis.

## Deploy

```bash
npx vercel
```

Or push to GitHub and import the repo at vercel.com — no environment variables needed.
