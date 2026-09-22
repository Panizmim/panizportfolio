import Image from "next/image";
import type { ProjectImage } from "@/content/projects";

/**
 * A row of phone screens, side by side and frameless.
 *
 * Unlike ProjectFigure these get no border and no backing panel: the screens
 * are already rectangles of interface, and a frame around each one only adds
 * noise. They keep their real aspect ratio and share a row, wrapping to two
 * across on a narrow screen.
 *
 * The row is as wide as the set, up to five, so four screens don't leave a gap
 * and five don't strand one on a second line. Written out in full because
 * Tailwind only sees class names it can read in the source.
 *
 * The 32px corner radius is the one rounded thing on the site besides the
 * footer's status dot. Paniz asked for it here so the captures read as phones;
 * it is not an invitation to round anything else.
 */
const COLUMNS: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
};

export function ProjectScreens({ screens }: { screens: ProjectImage[] }) {
  const columns = COLUMNS[Math.min(screens.length, 5)] ?? "sm:grid-cols-5";

  return (
    <ul className={`grid grid-cols-2 gap-x-4 gap-y-8 ${columns}`}>
      {screens.map((screen) => {
        const { width = 414, height = 896 } = screen;
        return (
          <li key={screen.src}>
            <figure>
              <Image
                src={screen.src}
                alt={screen.alt}
                width={width}
                height={height}
                sizes="(min-width: 1024px) 13vw, (min-width: 640px) 20vw, 46vw"
                className="h-auto w-full rounded-[32px]"
              />
              {screen.caption ? (
                <figcaption className="mt-3 text-[12.5px] leading-[1.6] text-muted">
                  {screen.caption}
                </figcaption>
              ) : null}
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
