import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectCover } from "./ProjectCover";
import { Reveal } from "./Reveal";

/**
 * One project in a work grid: cover, title, one line of description, and that
 * is all. The whole card is a single link — to the case study when there is
 * one, otherwise out to the live site. Role, year, tools and the live link all
 * live on the case study page, so the grid itself stays quiet.
 */
export function ProjectCard({
  project,
  index,
  sizes = "(min-width: 1280px) 23vw, (min-width: 640px) 46vw, 100vw",
}: {
  project: Project;
  index: number;
  sizes?: string;
}) {
  const href = project.caseStudy ? `/work/${project.slug}` : project.liveUrl;
  const isExternal = !project.caseStudy && Boolean(project.liveUrl);

  const inner = (
    <>
      <ProjectCover
        image={project.cover}
        fallbackLabel="Cover image"
        interactive
        frame="card"
        sizes={sizes}
      />

      {/* Status sits on the title's baseline: persimmon for live, quiet for concept. */}
      <div className="mt-5 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl font-bold tracking-tight">
          {project.title}
        </h3>
        <span
          className={`label whitespace-nowrap ${
            project.status === "live" ? "!text-accent" : ""
          }`}
        >
          {project.status === "live" ? "Live" : "Concept"}
        </span>
      </div>
      <p className="mt-2 line-clamp-3 text-[0.9375rem] leading-relaxed text-muted">
        {project.summary}
      </p>
    </>
  );

  return (
    <Reveal delay={(index % 4) * 90} className="group" as="li">
      {href ? (
        <Link
          href={href}
          {...(isExternal ? { target: "_blank", rel: "noreferrer noopener" } : {})}
          className="block focus-visible:outline-offset-8"
        >
          {inner}
          {isExternal ? <span className="sr-only">(opens in a new tab)</span> : null}
        </Link>
      ) : (
        <div>{inner}</div>
      )}
    </Reveal>
  );
}
