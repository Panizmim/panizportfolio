import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudySlugs, getProject } from "@/content/projects";
import { site } from "@/content/site";
import { Shell } from "@/components/Shell";
import { ProjectFigure } from "@/components/ProjectFigure";
import { ProjectScreens } from "@/components/ProjectScreens";
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

  const title = `${project.title} · ${project.subtitle}`;
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

  return (
    <article>
      {/*
       * Split 33 / 67, after the reference. Above `lg` the left column holds
       * still against the header while the work scrolls past it on the right;
       * below `lg` the two simply stack. The left column carries its own
       * scrollbar for short viewports, and `data-lenis-prevent` keeps Lenis
       * off the wheel while the pointer is inside it.
       */}
      <Shell>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          {/* ------------------------------------------------------------ Left */}
          <aside
            data-lenis-prevent
            className="no-scrollbar pb-10 pt-12 lg:sticky lg:top-20 lg:col-span-4 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto lg:border-r lg:border-rule lg:pb-16 lg:pr-12 lg:pt-14"
          >
            {/*
             * Type sizes here are lifted straight off the reference's own CSS:
             * title 58px, descriptor and meta values 14.5px, meta labels 12.5px
             * in sentence case, button 14px. The site's bold display weight is
             * kept; the reference sets 500 throughout.
             */}
            <Link
              href="/#work"
              className="link-rule inline-flex items-center gap-2 text-[14px] text-muted"
            >
              <Arrow className="rotate-180" /> Back
            </Link>

            <h1 className="mt-8 font-display text-[2.25rem] font-bold leading-[1.05] tracking-[-0.03em] lg:text-[58px]">
              <SplitWords text={project.title} />
            </h1>

            {/* The one-line descriptor, directly under the name. */}
            <Reveal delay={160} as="p" className="mt-4">
              <span className="text-[14.5px] font-medium leading-[1.43] tracking-[-0.01em]">
                {project.subtitle}
              </span>
            </Reveal>

            <Reveal delay={240} as="p" className="mt-5">
              <span className="text-[14.5px] leading-[1.43] tracking-[-0.01em] text-muted">
                {caseStudy.intro}
              </span>
            </Reveal>

            {/* Meta, stacked. The rules stop well short of the column and sit
                lighter than the site's hairline. */}
            <Reveal delay={340} className="mt-10">
              <dl className="max-w-[20rem]">
                <div className="border-t border-rule/60 py-4">
                  <dt className="text-[12.5px] leading-[1.6] tracking-[0.005em] text-muted">
                    Role
                  </dt>
                  <dd className="mt-1.5 text-[14.5px] leading-[1.43] tracking-[-0.01em]">
                    {project.role}
                  </dd>
                </div>
                <div className="border-y border-rule/60 py-4">
                  <dt className="text-[12.5px] leading-[1.6] tracking-[0.005em] text-muted">
                    Year
                  </dt>
                  <dd className="mt-1.5 text-[14.5px] leading-[1.43] tracking-[-0.01em] tabular-nums">
                    {project.year}
                  </dd>
                </div>
              </dl>
            </Reveal>

            {/* Last thing in the column, as on the reference. */}
            {project.liveUrl ? (
              <Reveal delay={420} className="mt-8">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn"
                >
                  Live site <Arrow className="-rotate-45" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Reveal>
            ) : null}
          </aside>

          {/* ----------------------------------------------------------- Right
           * No cover here. `project.cover` is for the card on the home page and
           * the Open Graph image only: Paniz wants a case study to open on the
           * work itself, not on a repeat of the card.
           */}
          <div className="pb-16 lg:col-span-8 lg:pb-24 lg:pt-10">
            {/*
             * Nothing of a section is rendered now but its pictures: no number,
             * no heading, no paragraphs, no bullets. Paniz stripped them one by
             * one, so a case study reads as a run of screenshots with a short
             * caption under each. `section.heading` survives only as the React
             * key, and all the writing is still in content/projects.ts.
             *
             * Which is why a section with no pictures is skipped outright: it
             * would otherwise render as a band of empty padding.
             */}
            {caseStudy.sections
              .filter((section) => section.images?.length || section.screens?.length)
              .map((section, i) => (
                <section
                  key={section.heading}
                  className={i === 0 ? "" : "pt-12 lg:pt-16"}
                >
                  {section.images?.length ? (
                    <div className="space-y-10">
                      {section.images.map((image) => (
                        <Reveal key={image.src}>
                          <ProjectFigure image={image} />
                        </Reveal>
                      ))}
                    </div>
                  ) : null}

                  {/* Narrow captures that read as a sequence, side by side. */}
                  {section.screens?.length ? (
                    <Reveal className="mt-10">
                      <ProjectScreens screens={section.screens} />
                    </Reveal>
                  ) : null}
                </section>
              ))}
          </div>
        </div>
      </Shell>

      <Shell className="rule-t py-12">
        <Reveal className="flex flex-wrap items-center justify-between gap-6">
          <Link href="/#work" className="btn">
            <Arrow className="rotate-180" /> All work
          </Link>
          <a href={`mailto:${site.email}`} className="btn">
            Get in touch <Arrow />
          </a>
        </Reveal>
      </Shell>
    </article>
  );
}
