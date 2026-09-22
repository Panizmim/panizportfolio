import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectCover } from "./ProjectCover";
import { Reveal } from "./Reveal";
import { Arrow } from "./Arrow";

/**
 * One project in the Selected Work grid: cover on top, then title, summary and
 * tools. The cover and title link to the case study; live projects get a second
 * link out to the real site, kept outside the card link so anchors don't nest.
 */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const caseHref = project.caseStudy ? `/work/${project.slug}` : undefined;
  // With no case study, the whole card points at the live site instead.
  const primaryHref = caseHref ?? project.liveUrl;
  const primaryIsExternal = !caseHref && Boolean(project.liveUrl);

  const inner = (
    <>
      <ProjectCover
        image={project.cover}
        fallbackLabel="Cover image"
        interactive
        sizes="(min-width: 1024px) 46vw, 100vw"
      />

      <div className="mt-5 flex items-baseline justify-between gap-6">
        <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
          {project.title}
        </h3>
        <span className="label whitespace-nowrap">
          <span className={project.status === "live" ? "text-accent" : undefined}>
            {project.status === "live" ? "Live" : "Concept"}
          </span>
          <span aria-hidden="true"> · </span>
          {project.year}
        </span>
      </div>

      <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-muted">
        {project.summary}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tool) => (
          <li key={tool} className="chip">
            {tool}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <Reveal delay={(index % 2) * 90} className="group" as="li">
      {primaryHref ? (
        <Link
          href={primaryHref}
          {...(primaryIsExternal ? { target: "_blank", rel: "noreferrer noopener" } : {})}
          className="block focus-visible:outline-offset-8"
        >
          {inner}
        </Link>
      ) : (
        <div>{inner}</div>
      )}

      {/* Actions sit outside the card link so the anchors don't nest. */}
      <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 font-display text-sm">
        {caseHref ? (
          <Link href={caseHref} className="inline-flex items-center gap-2">
            <span className="link-rule">Read the case study</span>
            <Arrow />
          </Link>
        ) : null}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
          >
            <span className="link-rule">Visit the live site</span>
            <Arrow className="-rotate-45" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : null}
      </p>
    </Reveal>
  );
}
