"use client";

import { useEffect, useState } from "react";

/** Cycles through roles with a vertical flip. */
export function RoleRotator({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom" aria-live="polite">
      {roles.map((role, i) => (
        <span
          key={role}
          className="col-start-1 row-start-1 whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: i === index ? "none" : i === (index - 1 + roles.length) % roles.length ? "translateY(-100%)" : "translateY(100%)",
            opacity: i === index ? 1 : 0,
          }}
          aria-hidden={i !== index}
        >
          {role}
        </span>
      ))}
    </span>
  );
}
