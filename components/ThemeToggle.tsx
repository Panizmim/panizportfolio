"use client";

/**
 * Dark mode switch for the header.
 *
 * The site follows the system preference on a first visit; pressing this stores
 * an explicit choice on <html data-theme> and in localStorage, and the matching
 * script in app/layout.tsx replays it before the first paint so the page never
 * flashes the wrong theme.
 *
 * It holds no React state on purpose. Which icon shows is decided in CSS from
 * the same two states as the colour tokens (see `.theme-sun` / `.theme-moon` in
 * globals.css), so there is nothing for the server and the client to disagree
 * about, and the label stays true whichever way round it is.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";

    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing, or storage blocked. The choice just won't outlive the tab.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      // No frame: just the icon, with the hit area kept at 32px for touch.
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-ink transition-colors duration-300 hover:text-accent"
    >
      <Sun className="theme-sun" />
      <Moon className="theme-moon" />
    </button>
  );
}

const iconProps = {
  viewBox: "0 0 16 16",
  width: 15,
  height: 15,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function Sun({ className }: { className?: string }) {
  return (
    <svg {...iconProps} className={className}>
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M12.95 3.05l-1.06 1.06M4.11 11.89l-1.06 1.06" />
    </svg>
  );
}

function Moon({ className }: { className?: string }) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M13.8 9.9A6.1 6.1 0 0 1 6.1 2.2a6.1 6.1 0 1 0 7.7 7.7Z" />
    </svg>
  );
}
