import { stats } from "@/lib/data";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";

export function Stats() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden border-x border-border bg-border sm:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80} className="bg-surface px-6 py-10 text-center sm:text-left">
            <div className="font-mono text-3xl font-bold text-accent sm:text-4xl">
              <CountUp value={stat.value} />
            </div>
            <p className="mt-1.5 font-mono text-xs uppercase tracking-widest text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
