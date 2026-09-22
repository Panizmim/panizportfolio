"use client";

import { useEffect, useState } from "react";

/**
 * Viewer's local time, ticking. Rendered empty on the server so the markup
 * matches on hydration.
 */
export function LocalTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        }),
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time}</span>;
}
