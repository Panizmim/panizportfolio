import Image from "next/image";
import type { ProjectImage } from "@/content/projects";

/**
 * A case-study image. Unlike ProjectCover (which crops to the portrait card
 * frame on the home page), this renders at the file's real aspect ratio.
 * Process artefacts range from very tall page screenshots to very wide journey
 * maps, and cropping either would destroy them.
 *
 * Anything over 1.4 times taller than wide sits in a 38rem frame and scrolls
 * inside it, so a full-page screenshot can't run away with the page. The frame
 * keeps its scrollbar on purpose: `.no-scrollbar` is for the sticky column, and
 * hiding it here once made these figures read as blank boxes.
 */
export function ProjectFigure({ image }: { image: ProjectImage }) {
  const { width = 1600, height = 1000 } = image;
  const isTall = height / width > 1.4;

  return (
    <figure>
      <div
        // Lenis would otherwise swallow the wheel over a tall image's own scroll.
        data-lenis-prevent={isTall ? "" : undefined}
        className={`border border-rule bg-rule/20 ${
          isTall ? "max-h-[38rem] overflow-y-auto" : ""
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="h-auto w-full"
        />
      </div>
      {image.caption ? (
        <figcaption className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
