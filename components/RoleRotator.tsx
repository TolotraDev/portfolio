"use client";

import { useEffect, useState } from "react";

export function RoleRotator({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = deleting ? 35 : 60;
    const pause = 1600;

    if (!deleting && typed === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && typed === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      }, speed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setTyped((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(t);
  }, [typed, deleting, index, roles]);

  return (
    <span className="inline-flex items-center gap-1 font-mono text-base sm:text-lg text-accent">
      {typed}
      <span className="inline-block h-[1.1em] w-[2px] bg-accent animate-pulse" aria-hidden />
    </span>
  );
}
