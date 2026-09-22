import Image from "next/image";
import type { ProjectImage } from "@/content/projects";

/**
 * Cover slot. Two crops are in use: 8:5 for the case-study hero, and the
 * reference's portrait card crop (0.865) for the cards in a work grid. If the
 * file isn't there yet, a ruled placeholder of the same proportion holds the
 * space so nothing shifts when you add it.
 */
const FRAMES = {
  "8/5": "aspect-[8/5]",
  card: "aspect-[0.865]",
} as const;

export function ProjectCover({
  image,
  fallbackLabel,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  /**
   * Card behaviour: the cover sits in black and white and takes its colour back
   * on hover, along with the slow zoom. Needs a `.group` ancestor.
   */
  interactive = false,
  frame = "8/5",
}: {
  image?: ProjectImage;
  fallbackLabel: string;
  priority?: boolean;
  sizes?: string;
  interactive?: boolean;
  frame?: keyof typeof FRAMES;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden border border-rule bg-rule/25 ${FRAMES[frame]}`}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover object-top ${
            interactive ? "card-media cover-tone" : "cover-media"
          }`}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <span className="label">{fallbackLabel}</span>
        </div>
      )}
    </div>
  );
}
