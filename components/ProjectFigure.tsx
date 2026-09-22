import Image from "next/image";
import type { ProjectImage } from "@/content/projects";

/**
 * A case-study image. Unlike ProjectCover (which crops to 8:5 for cards), this
 * renders at the file's real aspect ratio — process artefacts range from very
 * tall page screenshots to very wide journey maps, and cropping either would
 * destroy them.
 *
 * Very tall images are capped in height and scrolled, so a full-page screenshot
 * can't push the rest of the case study off screen.
 */
export function ProjectFigure({ image }: { image: ProjectImage }) {
  const { width = 1600, height = 1000 } = image;
  const isTall = height / width > 1.4;

  return (
    <figure>
      <div
        className={`border border-rule bg-rule/20 ${
          isTall ? "max-h-[38rem] overflow-y-auto" : ""
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="h-auto w-full"
        />
      </div>
      {image.caption ? (
        <figcaption className="label mt-3">{image.caption}</figcaption>
      ) : null}
    </figure>
  );
}
