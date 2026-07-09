import { GraduationCap, BadgeCheck } from "lucide-react";
import { education, learningResources } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

export function Formation() {
  return (
    <section id="formation" className="scroll-mt-20 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="Formation"
          title="Parcours académique & apprentissage continu"
        />

        <div className="relative mt-14 space-y-8 pl-8 sm:pl-10">
          <div className="absolute top-2 bottom-2 left-[9px] w-px bg-border sm:left-[13px]" aria-hidden />

          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 100} className="relative">
              <span
                className={`absolute -left-8 top-1 flex h-5 w-5 items-center justify-center rounded-sm sm:-left-10 ${
                  item.active ? "bg-accent-strong" : "bg-accent"
                }`}
              >
                {item.active && (
                  <span className="absolute h-5 w-5 animate-ping rounded-sm bg-accent-strong/50" />
                )}
              </span>
              <div className="rounded-md border border-border bg-background p-6">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                  {item.date}
                </span>
                <h3 className="mt-2 flex items-center gap-2 font-heading text-lg font-bold">
                  {item.active ? (
                    <BadgeCheck className="h-5 w-5 text-accent-strong" strokeWidth={2} />
                  ) : (
                    <GraduationCap className="h-5 w-5 text-accent" strokeWidth={2} />
                  )}
                  {item.school}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {learningResources.map((res, i) => (
            <Reveal
              key={res.title}
              delay={i * 100}
              className="rounded-md border border-border bg-background p-6"
            >
              <h4 className="font-mono text-sm font-semibold uppercase tracking-wide">
                {"> "}{res.title}
              </h4>
              <p className="mt-1.5 text-sm text-muted">{res.items}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
