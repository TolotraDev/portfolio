import { Code2, Network } from "lucide-react";
import { devSkills, netSkills, tools } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

export function Skills() {
  return (
    <section id="competences" className="scroll-mt-20 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="Compétences"
          title="Deux piles techniques, une seule rigueur"
          subtitle="Du frontend à l'infrastructure réseau, je couvre la chaîne complète d'un projet IT."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-md border border-border bg-background p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-accent/40 bg-accent/10 text-accent">
                <Code2 className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="font-mono text-lg font-bold uppercase tracking-wide">Développement</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {devSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm border border-border bg-surface px-3 py-1.5 font-mono text-sm text-foreground/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="rounded-md border border-border bg-background p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-accent-strong/40 bg-accent-strong/10 text-accent-strong">
                <Network className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="font-mono text-lg font-bold uppercase tracking-wide">Systèmes &amp; Réseaux</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {netSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm border border-border bg-surface px-3 py-1.5 font-mono text-sm text-foreground/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={160}
          className="mt-6 flex flex-col gap-4 rounded-md border border-border bg-background p-8 sm:flex-row sm:items-center"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted">
            {"> "}Outils
          </span>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-sm bg-surface-2 px-3 py-1.5 font-mono text-sm font-medium text-foreground/90"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
