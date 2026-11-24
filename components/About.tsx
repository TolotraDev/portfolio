import Image from "next/image";
import { Briefcase, Clock, Languages, Sparkles } from "lucide-react";
import { profile, stats, languages, softSkills, experience } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { CountUp } from "@/components/CountUp";
import { LocalClock } from "@/components/LocalClock";

const card = "spot h-full overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-7";

export function About() {
  const current = experience.find((e) => e.active);

  return (
    <section id="profil" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          index="01"
          eyebrow="Profil"
          title={
            <>
              Je <span className="serif-italic text-accent">comprends</span> avant de construire.
            </>
          }
          subtitle="L'essentiel en un coup d'œil — qui je suis, où j'en suis, ce que j'apporte."
        />

        <div className="mt-14 grid auto-rows-[minmax(0,auto)] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Photo */}
          <Reveal className="md:row-span-2">
            <div className="group relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-border bg-surface">
              <Image
                src="/images/tolotra-about.webp"
                alt="Tolotra Nomenjanahary en costume, mains dans les poches"
                fill
                sizes="(min-width: 1024px) 280px, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 text-white">
                <p className="font-display text-xl font-bold">Tolotra N.</p>
                <p className="mt-1 font-mono text-xs text-white/70">{profile.location}</p>
              </div>
            </div>
          </Reveal>

          {/* Summary */}
          <Reveal className="md:col-span-1 lg:col-span-2" delay={80}>
            <div className={card}>
              <Sparkles className="h-5 w-5 text-accent" />
              <div className="mt-5 space-y-4 text-lg leading-relaxed">
                {profile.summary.map((p, i) => (
                  <p key={i} className={i === 0 ? "text-foreground" : "text-muted"}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Local time & status */}
          <Reveal delay={160}>
            <div className={`${card} flex flex-col justify-between gap-8`}>
              <div className="flex items-center justify-between font-mono text-xs text-muted uppercase">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  Mahajanga
                </span>
                <span>UTC+3</span>
              </div>
              <p className="font-display text-4xl font-bold tracking-tight">
                <LocalClock timeZone={profile.timezone} />
              </p>
              <p className="inline-flex items-center gap-2 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {profile.status}
              </p>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal className="md:col-span-2" delay={80}>
            <div className={`${card} grid grid-cols-2 gap-px bg-border p-0 sm:p-0`}>
              {stats.map((s) => (
                <div key={s.label} className="bg-surface p-6">
                  <p className="font-display text-5xl font-extrabold tracking-tighter">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-2 text-sm text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Currently */}
          <Reveal delay={160}>
            <div className={`${card} flex flex-col justify-between gap-6`}>
              <p className="inline-flex items-center gap-2 font-mono text-xs text-muted uppercase">
                <Briefcase className="h-4 w-4 text-accent" />
                Actuellement
              </p>
              {current && (
                <div>
                  <p className="font-display text-2xl font-bold">{current.company}</p>
                  <p className="mt-1 text-sm text-muted">{current.role}</p>
                </div>
              )}
              <p className="font-mono text-xs text-sun">{current?.date}</p>
            </div>
          </Reveal>

          {/* Languages */}
          <Reveal className="lg:col-span-2" delay={80}>
            <div className={card}>
              <p className="inline-flex items-center gap-2 font-mono text-xs text-muted uppercase">
                <Languages className="h-4 w-4 text-accent" />
                Langues
              </p>
              <ul className="mt-6 space-y-5">
                {languages.map((l) => (
                  <li key={l.name}>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{l.name}</span>
                      <span className="font-mono text-muted">{l.level}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2">
                      <div
                        className="grow-x h-full rounded-full bg-gradient-to-r from-accent to-sun"
                        style={{ width: `${l.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Soft skills */}
          <Reveal className="md:col-span-2" delay={160}>
            <div className={card}>
              <p className="font-mono text-xs text-muted uppercase">Savoir-être</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
