import { projects, personalProjectsNote } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

export function Projects() {
  return (
    <section id="projets" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="Projets"
          title="Réalisations professionnelles & personnelles"
          subtitle="Des applications web complètes, de la maquette à la mise en production."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 60}>
              <article className="group h-full overflow-hidden rounded-md border border-border bg-surface transition-colors hover:border-accent/50">
                <div className="flex items-center justify-between border-b border-border px-5 py-2.5 font-mono text-xs text-muted">
                  <span>NODE_{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-accent">dev</span>
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
