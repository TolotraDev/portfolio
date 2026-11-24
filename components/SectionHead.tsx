import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function SectionHead({
  index,
  eyebrow,
  title,
  subtitle,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <Reveal className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted uppercase">
          <span className="text-accent">{index}</span>
          <span className="h-px w-10 bg-border" />
          {eyebrow}
        </p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.02] font-bold tracking-tight sm:text-6xl">
          {title}
        </h2>
      </div>
      {subtitle && <p className="max-w-xs text-muted lg:text-right">{subtitle}</p>}
    </Reveal>
  );
}
