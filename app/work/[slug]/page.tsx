import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudySlugs, getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import { Shell } from "@/components/Shell";
import { ProjectCover } from "@/components/ProjectCover";
import { ProjectFigure } from "@/components/ProjectFigure";
import { Reveal } from "@/components/Reveal";
import { SplitWords } from "@/components/SplitWords";
import { Arrow } from "@/components/Arrow";

type Params = { params: Promise<{ slug: string }> };

/** Only projects with a `caseStudy` get a page — add one in content/projects.ts. */
export function generateStaticParams() {
  return caseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} — ${project.subtitle}`;
  return {
    title,
    description: project.summary,
    openGraph: {
      title: `${title} | ${site.name}`,
      description: project.summary,
      type: "article",
      url: `${site.url}/work/${project.slug}`,
      images: project.cover ? [{ url: project.cover.src }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();

  const { caseStudy } = project;

  // The next case study to read, so the page doesn't dead-end.
  const others = projects.filter((p) => p.caseStudy && p.slug !== project.slug);
  const next = others[0];

  return (
    <article>
      {/* ------------------------------------------------------------- Masthead */}
      <Shell className="pb-12 pt-16 sm:pt-24">
        <Link href="/#work" className="label link-rule inline-flex items-center gap-2">
          <Arrow className="rotate-180" /> Work
        </Link>

        <h1 className="mt-10 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1] tracking-tight">
          <SplitWords text={project.title} />
        </h1>
        <Reveal delay={200} as="p" className="mt-4 max-w-2xl">
          <span className="font-display text-lg text-muted sm:text-2xl">
            {project.subtitle}
          </span>
        </Reveal>

        <Reveal delay={340}>
          <dl className="rule-t mt-12 grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="label">Role</dt>
              <dd className="mt-2 text-sm">{project.role}</dd>
            </div>
            <div>
              <dt className="label">Context</dt>
              <dd className="mt-2 text-sm">
                <span className={project.status === "live" ? "text-accent" : undefined}>
                  {project.status === "live" ? "Live" : "Concept"}
                </span>
                {" · "}
                {project.context}
              </dd>
            </div>
            <div>
              <dt className="label">Year</dt>
              <dd className="mt-2 text-sm tabular-nums">{project.year}</dd>
            </div>
            <div>
              <dt className="label">Tools</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tool) => (
                  <span key={tool} className="chip">
                    {tool}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        {project.liveUrl ? (
          <Reveal delay={420} className="mt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn"
            >
              Visit the live site <Arrow className="-rotate-45" />
            </a>
          </Reveal>
        ) : null}
      </Shell>

      {/* ---------------------------------------------------------------- Cover */}
      <Shell className="pb-16">
        <Reveal delay={200}>
          <ProjectCover
            image={project.cover}
            fallbackLabel="Cover image"
            priority
            sizes="(min-width: 1024px) 85vw, 100vw"
          />
        </Reveal>
      </Shell>

      {/* ---------------------------------------------------------------- Intro */}
      <Shell className="pb-8">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-10 lg:col-start-3 lg:col-span-8">
            <Reveal as="p" className="font-display text-[clamp(1.375rem,2.6vw,2rem)] font-bold leading-[1.28] tracking-tight">
              {caseStudy.intro}
            </Reveal>
          </div>
        </div>
      </Shell>

      {/* ------------------------------------------------------------- Sections */}
      <Shell>
        {caseStudy.sections.map((section, i) => (
          <section
            key={section.heading}
            className="rule-t grid gap-8 py-12 md:grid-cols-12 lg:py-16"
          >
            <Reveal className="md:col-span-3 lg:col-span-2">
              <p className="label tabular-nums">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 font-display text-lg font-bold leading-tight tracking-tight">
                {section.heading}
              </h2>
            </Reveal>

            <div className="md:col-span-9 lg:col-span-8">
              {section.body?.map((paragraph, n) => (
                <Reveal
                  as="p"
                  key={paragraph.slice(0, 40)}
                  delay={n * 70}
                  className="mb-4 max-w-prose text-base leading-relaxed last:mb-0"
                >
                  {paragraph}
                </Reveal>
              ))}

              {section.bullets ? (
                <ul className="mt-5 max-w-prose space-y-3">
                  {section.bullets.map((bullet, n) => (
                    <Reveal
                      as="li"
                      key={bullet}
                      delay={n * 60}
                      className="flex gap-4 text-base leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.7em] h-px w-4 shrink-0 bg-accent"
                      />
                      <span>{bullet}</span>
                    </Reveal>
                  ))}
                </ul>
              ) : null}

              {/* Figma frames and screenshots for this section. */}
              {section.images?.length ? (
                <div className="mt-10 space-y-10">
                  {section.images.map((image) => (
                    <Reveal key={image.src}>
                      <ProjectFigure image={image} />
                    </Reveal>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ))}
      </Shell>

      {/* ----------------------------------------------------------- Next steps */}
      <Shell className="rule-t py-12">
        <Reveal className="flex flex-wrap items-center justify-between gap-6">
          {next ? (
            <Link href={`/work/${next.slug}`} className="group">
              <span className="label">Next case study</span>
              <span className="mt-2 flex items-center gap-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {next.title}
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </Link>
          ) : (
            <Link href="/#work" className="btn">
              <Arrow className="rotate-180" /> All work
            </Link>
          )}

          <a href={`mailto:${site.email}`} className="btn">
            Get in touch <Arrow />
          </a>
        </Reveal>
      </Shell>
    </article>
  );
}
