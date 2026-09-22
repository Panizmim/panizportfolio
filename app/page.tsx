import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { Shell } from "@/components/Shell";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SplitWords } from "@/components/SplitWords";
import { Arrow } from "@/components/Arrow";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <Shell as="section" className="pb-20 pt-20 sm:pt-28 lg:pb-24 lg:pt-32">
        {/* Portrait beside the opener; the heading stacks name over role. */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8 lg:gap-10">
          <Reveal className="shrink-0">
            {/* 4:5 frame, cropped from the top so the face never loses its crown. */}
            <div className="relative aspect-[4/5] w-28 overflow-hidden border border-rule sm:w-36 lg:w-44">
              <Image
                src={site.portrait.src}
                alt={site.portrait.alt}
                fill
                sizes="(min-width: 1024px) 11rem, (min-width: 640px) 9rem, 7rem"
                priority
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <h1 className="font-display text-[clamp(1.75rem,4.4vw,3.25rem)] font-bold leading-[1.12] tracking-tight">
            {/* Line one: "I'm" stays in ink, the name carries the accent. */}
            <span className="block">
              <SplitWords text="I'm" />
              <SplitWords text={site.name} className="text-accent" delay={70} />
            </span>
            {/* Line two: the role. */}
            <span className="block">
              <SplitWords text={site.role} delay={260} />
            </span>
          </h1>
        </div>

        <Reveal delay={430} className="mt-8 max-w-2xl" as="p">
          <span className="text-base leading-relaxed text-muted sm:text-lg">
            {site.intro}
          </span>
        </Reveal>

        <Reveal delay={550} className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="/#work" className="btn">
            Selected work <Arrow />
          </Link>
          <a href={`mailto:${site.email}`} className="btn">
            Get in touch <Arrow />
          </a>
        </Reveal>
      </Shell>

      {/* -------------------------------------------------------- Selected Work */}
      <Shell as="section" id="work" className="scroll-mt-24">
        <SectionHeading label="Selected Work" note={`${projects.length} projects`} />
        <ul className="grid gap-x-4 gap-y-12 py-12 sm:grid-cols-2 lg:py-16 xl:grid-cols-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </ul>
      </Shell>

      {/* ---------------------------------------------------------------- About */}
      <Shell as="section" id="about" className="scroll-mt-24 pt-16">
        <SectionHeading label="About / How I Work" note="Architecture → Product" />
        <div className="grid gap-10 py-12 md:grid-cols-12 lg:py-20">
          <div className="md:col-span-8 lg:col-span-7">
            <Reveal as="p" className="font-display text-[clamp(1rem,1.5vw,1.25rem)] font-bold leading-[1.45] tracking-tight">
              {site.about}
            </Reveal>
          </div>

          {/* Capability tags, in the reference's chip style. */}
          <div className="md:col-span-4 lg:col-start-9 lg:col-span-4">
            {site.capabilities.map((group, g) => (
              <Reveal key={group.title} delay={g * 90} className="mb-8 last:mb-0">
                <p className="label">{group.title}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Shell>

      {/* -------------------------------------------------------------- Contact */}
      <Shell as="section" id="contact" className="scroll-mt-24 pt-16">
        <SectionHeading label="Say Hello" />
        <div className="grid gap-10 py-12 md:grid-cols-12 lg:py-20">
          <div className="md:col-span-8 lg:col-span-7">
            <Reveal as="p" className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight">
              Contact me
            </Reveal>
            <Reveal delay={110} className="mt-6 max-w-lg" as="p">
              <span className="text-[14.5px] leading-[1.6] text-muted">
                I&rsquo;m always open to hearing about new projects, ideas, or
                collaborations. If you&rsquo;re building something that needs structure
                as much as it needs polish, send me a note.
              </span>
            </Reveal>
          </div>

          <div className="md:col-span-4 lg:col-start-9 lg:col-span-4">
            <ul>
              {site.links.map((link, i) => (
                <Reveal as="li" key={link.href} delay={i * 80} className="rule-t last:rule-b">
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="group flex items-center justify-between gap-6 py-4 transition-colors duration-300 hover:text-accent"
                  >
                    <span className="label transition-colors duration-300 group-hover:text-accent">
                      {link.label}
                    </span>
                    <span className="flex items-center gap-3 text-sm">
                      {link.value}
                      <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Shell>
    </>
  );
}
