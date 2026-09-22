import Link from "next/link";
import { nav, site } from "@/content/site";
import { Shell } from "./Shell";

/** Stacked name on the left, anchors on the right, hairline underneath. */
export function Header() {
  const [first, last] = site.name.split(" ");

  return (
    <header className="sticky top-0 z-50 rule-b bg-paper/80 backdrop-blur-md">
      <Shell className="flex h-16 items-center justify-between gap-6 sm:h-20">
        <Link href="/" className="group font-display text-[0.6875rem] font-bold uppercase leading-[1.15] tracking-[0.12em]">
          <span className="block transition-colors duration-300 group-hover:text-accent">
            {first}
          </span>
          <span className="block text-muted transition-colors duration-300 group-hover:text-ink">
            {last}
          </span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 sm:gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-rule font-display text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Shell>
    </header>
  );
}
