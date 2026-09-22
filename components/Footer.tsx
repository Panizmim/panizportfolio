import { site } from "@/content/site";
import { Shell } from "./Shell";
import { LocalTime } from "./LocalTime";

export function Footer() {
  return (
    <footer className="rule-t mt-28 py-8">
      <Shell className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="label">
          © {new Date().getFullYear()} · Designed &amp; built by {site.name}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="link-rule font-display text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="label flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.location} <LocalTime />
          </p>
        </div>
      </Shell>
    </footer>
  );
}
