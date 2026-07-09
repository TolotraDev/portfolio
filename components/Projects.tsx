"use client";

import { useMemo, useState } from "react";
import { projects, personalProjectsNote, type ProjectCategory } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

type Filter = "all" | ProjectCategory;

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "Tous" },
  { key: "dev", label: "Développement" },
  { key: "net", label: "Systèmes & Réseaux" },
];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => projects.filter((p) => filter === "all" || p.category === filter),
    [filter]
  );

  return (
    <section id="projets" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="Projets"
          title="Réalisations académiques & personnelles"
          subtitle="Des applications complètes aux maquettes d'infrastructure réseau."
        />

        <Reveal delay={80} className="mt-10 flex justify-center gap-2">
          <div className="inline-flex rounded-sm border border-border bg-surface p-1">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`rounded-sm px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer ${
                  filter === f.key
                    ? "bg-accent text-background"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={i * 60}>
              <article className="group h-full overflow-hidden rounded-md border border-border bg-surface transition-colors hover:border-accent/50">
                <div className="flex items-center justify-between border-b border-border px-5 py-2.5 font-mono text-xs text-muted">
                  <span>NODE_{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={project.category === "dev" ? "text-accent" : "text-accent-strong"}
                  >
                    {project.category === "dev" ? "dev" : "net"}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-lg font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm bg-surface-2 px-2 py-1 font-mono text-xs text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 text-center font-mono text-xs text-muted">
          {personalProjectsNote}
        </Reveal>
      </div>
    </section>
  );
}
