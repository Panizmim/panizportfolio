"use client";

import { useEffect, useState } from "react";

/**
 * Splits text into words and fades each one up in sequence.
 * Screen readers get the whole string; the per-word spans are hidden from them.
 */
export function SplitWords({
  text,
  className = "",
  delay = 0,
  step = 42,
}: {
  text: string;
  className?: string;
  /** Delay before the first word, in ms. */
  delay?: number;
  /** Gap between words, in ms. */
  step?: number;
}) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(" ").map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
            <span
              data-reveal=""
              data-shown={shown ? "true" : "false"}
              style={{ "--stagger": `${delay + i * step}ms` } as React.CSSProperties}
              className="inline-block"
            >
              {word}
              {/* Keep the space inside the span so wrapping stays natural. */}
              {" "}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
