import Link from "next/link";
import { nav, site } from "@/content/site";
import { Shell } from "./Shell";
import { Arrow } from "./Arrow";

/** Stacked name on the left, anchors on the right, hairline underneath. */
export function Header() {
  const [first, last] = site.name.split(" ");

  // An external entry with no URL set is dropped rather than rendered broken.
  const items = nav.filter((item) => item.href);

  return (
    <header className="sticky top-0 z-50 rule-b bg-paper/80 backdrop-blur-md">
      <Shell className="flex h-16 items-center justify-between gap-4 sm:h-20 sm:gap-6">
        <Link
          href="/"
          className="group shrink-0 whitespace-nowrap font-display text-[0.6875rem] font-bold uppercase leading-[1.15] tracking-[0.12em]"
        >
          <span className="block transition-colors duration-300 group-hover:text-accent">
            {first}
          </span>
          <span className="block text-muted transition-colors duration-300 group-hover:text-ink">
            {last}
          </span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-3 sm:gap-7">
            {items.map((item) => {
              const external = "external" in item && item.external;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="inline-flex items-center gap-1 whitespace-nowrap font-display text-xs sm:text-sm"
                  >
                    <span className="link-rule">{item.label}</span>
                    {external ? (
                      <>
                        <Arrow className="hidden -rotate-45 sm:block" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Shell>
    </header>
  );
}
