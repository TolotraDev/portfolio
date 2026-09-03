import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
          subtitle="Des applications web complètes, en ligne et cliquables — passez voir par vous-même."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5"
              >
                {/* Browser chrome + screenshot */}
                <div className="relative">
                  <div className="flex items-center gap-2 border-b border-border bg-surface-2/70 px-4 py-2 font-mono text-[10px] text-muted">
                    <span className="flex items-center gap-1" aria-hidden>
                      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                      <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                    </span>
                    <span className="ml-1 truncate">
                      {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-background">
                    <Image
                      src={project.image}
                      alt={`Aperçu du projet ${project.title}`}
                      width={1200}
                      height={750}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/0 to-surface/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-sm bg-accent px-3 py-1.5 font-mono text-xs font-semibold text-background opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Visiter le site
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-xl font-bold transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent"
                      strokeWidth={2}
                    />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
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
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10">
          <p className="mx-auto max-w-3xl rounded-md border border-dashed border-border bg-surface/50 px-6 py-4 text-center font-mono text-xs leading-relaxed text-muted">
            <span className="text-accent">{"// "}</span>
            {personalProjectsNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
