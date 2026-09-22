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
] as const;
