import { Briefcase, Rocket } from "lucide-react";
import { experience } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="Expérience"
          title="Des stages qui construisent la pratique"
          subtitle="Du site vitrine à l'application full-stack, du terrain plutôt que de la théorie."
        />

        <div className="relative mt-14 space-y-8 pl-8 sm:pl-10">
          <div className="absolute top-2 bottom-2 left-[9px] w-px bg-border sm:left-[13px]" aria-hidden />

          {experience.map((item, i) => (
            <Reveal key={item.company} delay={i * 100} className="relative">
              <span
                className={`absolute -left-8 top-1 flex h-5 w-5 items-center justify-center rounded-sm sm:-left-10 ${
                  item.active ? "bg-accent-strong" : "bg-accent"
                }`}
              >
                {item.active && (
                  <span className="absolute h-5 w-5 animate-ping rounded-sm bg-accent-strong/50" />
                )}
              </span>
              <div className="rounded-md border border-border bg-surface p-6">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                  {item.date}
                </span>
                <h3 className="mt-2 flex items-center gap-2 font-heading text-lg font-bold">
                  {item.active ? (
                    <Rocket className="h-5 w-5 text-accent-strong" strokeWidth={2} />
                  ) : (
                    <Briefcase className="h-5 w-5 text-accent" strokeWidth={2} />
                  )}
                  {item.role}
                </h3>
                <p className="mt-1 font-mono text-sm font-medium text-foreground/90">{item.company}</p>
                <p className="mt-1.5 text-sm text-muted">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm bg-surface-2 px-2 py-1 font-mono text-xs text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
