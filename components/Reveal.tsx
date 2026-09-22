"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms — use to stagger siblings. */
  delay?: number;
  /** Play immediately on mount instead of waiting for scroll (hero). */
  immediate?: boolean;
  as?: "div" | "span" | "li" | "section" | "figure" | "p";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  immediate = false,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (immediate) {
      // One frame, so the transition has a start state to animate from.
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate]);

  return (
    <Tag
      // @ts-expect-error — one ref type across the allowed tags
      ref={ref}
      data-reveal=""
      data-shown={shown ? "true" : "false"}
      style={{ "--stagger": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}
