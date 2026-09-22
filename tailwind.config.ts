import type { Config } from "tailwindcss";

/**
 * Design tokens live here so the whole site stays on one restrained system:
 * warm white paper, near-black ink, one persimmon accent, hairline rules.
 */
const config: Config = {
  darkMode: "media",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper-rgb) / <alpha-value>)",
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        rule: "rgb(var(--rule-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
      },
      fontFamily: {
        // Poppins for both (loaded in app/layout.tsx). `display` and `sans` stay
        // separate so the two roles can be split across families again later.
        display: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        // Poppins is a wide geometric face with a large x-height, so it needs far
        // less negative tracking than a condensed grotesk. These override
        // Tailwind's defaults for every display heading in one place.
        tight: "-0.012em",
        tightest: "-0.022em",
      },
      maxWidth: {
        shell: "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
