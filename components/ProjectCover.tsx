import Image from "next/image";
import type { ProjectImage } from "@/content/projects";

/**
 * Cover slot, always 8:5. If the file isn't there yet, a ruled placeholder of
 * the same proportion holds the space so nothing shifts when you add it.
 */
export function ProjectCover({
  image,
  fallbackLabel,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  /** Adds the hover-zoom class used inside project cards. */
  interactive = false,
}: {
  image?: ProjectImage;
  fallbackLabel: string;
  priority?: boolean;
  sizes?: string;
  interactive?: boolean;
}) {
  return (
    <div className="relative aspect-[8/5] w-full overflow-hidden rounded-sm border border-rule bg-rule/25">
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover object-top ${interactive ? "card-media" : "cover-media"}`}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <span className="label">{fallbackLabel}</span>
        </div>
      )}
    </div>
  );
}
