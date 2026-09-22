/**
 * Site-wide identity, copy and contact details.
 * Edit here — nothing in this file is hard-coded anywhere else.
 */

export const site = {
  name: "Paniz Molamohamad",
  role: "Product Designer",
  // Used for <title>, Open Graph and structured data.
  tagline: "Product Designer bridging architecture and digital product design.",
  intro:
    "Product Designer with a background in architecture. I turn complex user needs into scalable, accessible interfaces, pairing UX research and UI design with AI-assisted development to take products from problem to shipped, working versions.",
  about:
    "I'm a product designer with a background in architecture. That training taught me to think in systems and structure, to see how parts fit into a whole, which is exactly how I approach digital products. I work across research, UI, and increasingly the build itself, using AI-assisted development to ship working products, not just mockups. I care about interfaces that are as structurally sound as they are clear to use.",
  // Set this to your real domain before deploying — it drives canonical + OG URLs.
  url: "https://panizmolamohamad.com",
  email: "Panizmolamohamad@gmail.com",
  /** Shown in the footer beside the viewer's local time. */
  location: "Tehran",
  /**
   * CV, opened in a new tab from the nav.
   *
   * REPLACE THIS with your own Google Doc link. Two things matter:
   *   1. Share the doc as "Anyone with the link -> Viewer", or visitors hit a
   *      permission wall and the link is worse than useless.
   *   2. Prefer the /preview form over /edit. /preview shows the document with
   *      no Google editing chrome and no sign-in prompt. Swap /edit (and
   *      anything after it) for /preview in the URL you copy from the address
   *      bar. To hand over a PDF download instead, use
   *      /export?format=pdf in place of /preview.
   *
   * Set it to an empty string to drop Resume from the nav entirely.
   */
  resumeUrl: "https://docs.google.com/document/d/REPLACE_WITH_YOUR_DOC_ID/preview",
  links: [
    { label: "Email", href: "mailto:Panizmolamohamad@gmail.com", value: "Panizmolamohamad@gmail.com" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/paniz-molamohamad-b4b237200",
      value: "in/paniz-molamohamad",
    },
    // Add Telegram here when you want it:
    // { label: "Telegram", href: "https://t.me/yourhandle", value: "@yourhandle" },
  ],
  /** Chip groups shown beside the About paragraph. */
  capabilities: [
    {
      title: "Design",
      items: ["Product design", "UX / UI", "UX research", "Wireframing", "Design systems", "Prototyping"],
    },
    {
      title: "Build",
      items: ["Next.js", "TypeScript", "Tailwind", "Supabase", "AI-assisted development"],
    },
    {
      title: "Tools",
      items: ["Figma", "FigJam", "Vercel"],
    },
  ],
} as const;

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  // External links open in a new tab and get a small outbound arrow.
  { label: "Resume", href: site.resumeUrl, external: true },
] as const;
