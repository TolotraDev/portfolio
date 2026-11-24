import { GraduationCap, BookOpen } from "lucide-react";
import { education, learningResources } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

export function Formation() {
  // Oldest first so the steps read L1 → L2 → L3
  const steps = [...education].reverse();

  return (
    <section id="formation" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          index="05"
          eyebrow="Formation"
          title={
            <>
              Apprendre, <span className="serif-italic text-accent">sans arrêt</span>.
            </>
          }
          subtitle="Un cursus à l'EMIT Fianarantsoa, nourri chaque jour par l'autoformation."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.date} delay={i * 100}>
              <div
                className={`spot relative h-full overflow-hidden rounded-3xl border p-7 ${
                  step.active ? "border-accent/60 bg-accent/[0.06]" : "border-border bg-surface"
                }`}
              >
                <span className="pointer-events-none absolute -top-6 -right-2 font-display text-[7rem] leading-none font-extrabold text-outline select-none">
                  L{i + 1}
                </span>
                <GraduationCap className={`h-6 w-6 ${step.active ? "text-accent" : "text-muted"}`} />
                <p className="mt-10 font-mono text-sm text-muted">{step.date}</p>
                <p className="mt-2 font-display text-xl font-bold">{step.school}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
                {step.active && (
                  <span className="mt-5 inline-block rounded-full bg-accent px-3 py-1 font-mono text-xs text-white dark:text-background">
                    Année en cours
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {learningResources.map((r, i) => (
            <Reveal key={r.title} delay={i * 100}>
              <div className="spot flex h-full items-start gap-4 rounded-3xl border border-border bg-surface p-7">
                <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-sun" />
                <div>
                  <p className="font-display text-lg font-bold">{r.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{r.items}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
