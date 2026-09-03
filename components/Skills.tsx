import { Layout, Server, Database, Wrench } from "lucide-react";
import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

const icons = [Layout, Server, Database, Wrench];

export function Skills() {
  return (
    <section id="competences" className="scroll-mt-20 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="Compétences"
          title="Du frontend au backend, la chaîne complète"
          subtitle="Je construis des applications web de bout en bout, de l'interface à la base de données."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal
                key={group.title}
                delay={i * 100}
                className="rounded-md border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-accent/40 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="font-mono text-lg font-bold uppercase tracking-wide">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-sm border border-border bg-surface px-3 py-1.5 font-mono text-sm text-foreground/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
