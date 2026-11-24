import { ArrowDownRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { WaveField } from "@/components/WaveField";
import { HeroPortrait } from "@/components/HeroPortrait";
import { RoleRotator } from "@/components/RoleRotator";

function SplitChars({ text, delay = 0, step = 45 }: { text: string; delay?: number; step?: number }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.08em] align-bottom" aria-label={text}>
      {text.split("").map((c, i) => (
        <span
          key={i}
          aria-hidden
          className="char"
          style={{ animationDelay: `${delay + i * step}ms` }}
        >
          {c === " " ? " " : c}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Backdrop: blueprint grid + 3D dot terrain */}
      <div className="blueprint-grid absolute inset-0 -z-20 opacity-60" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[75%]" aria-hidden>
        <WaveField />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pt-32 pb-24 lg:grid-cols-[1.25fr_1fr] lg:pt-36">
        <div>
          <p className="fade-up flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted uppercase">
            <span className="h-px w-10 bg-accent" />
            Portfolio · Développeur web
          </p>

          <h1 className="mt-6 font-display leading-[0.88] font-extrabold tracking-tighter">
            <span className="block text-[clamp(3rem,14vw,6.4rem)] whitespace-nowrap">
              <SplitChars text="Tolotra" delay={100} />
            </span>
            <span className="serif-italic block text-[clamp(2.2rem,10.5vw,5rem)] font-normal tracking-tight text-accent">
              <SplitChars text="Nomenjanahary" delay={420} step={28} />
            </span>
          </h1>

          <p
            className="fade-up mt-8 flex flex-wrap items-baseline gap-x-3 font-display text-2xl font-semibold sm:text-3xl"
            style={{ animationDelay: "800ms" }}
          >
            <span className="text-muted">Je suis</span>
            <span className="text-foreground">
              <RoleRotator roles={profile.roles} />
            </span>
          </p>

          <p
            className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "950ms" }}
          >
            Étudiant à l&apos;EMIT Fianarantsoa, je conçois des applications web{" "}
            <span className="text-foreground">de bout en bout</span> — du premier écran au dernier
            endpoint — avec une obsession&nbsp;: comprendre comment les pièces s&apos;assemblent.
          </p>

          <div
            className="fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "1100ms" }}
          >
            <a
              href="#projets"
              data-cursor="Go ↓"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground py-2 pr-2 pl-6 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              Voir mes projets
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white transition-transform duration-500 group-hover:rotate-[-45deg] dark:text-background">
                <ArrowDownRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              Me contacter
            </a>
          </div>

          <div
            className="fade-up mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-muted"
            style={{ animationDelay: "1250ms" }}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {profile.location}
            </span>
            <span>3 stages · 4 projets en ligne</span>
          </div>
        </div>

        <div className="fade-up pb-10" style={{ animationDelay: "500ms" }}>
          <HeroPortrait />
        </div>
      </div>

      <a
        href="#profil"
        aria-label="Descendre vers le profil"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-muted uppercase lg:flex"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-border">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-hint_1.8s_ease-in-out_infinite] bg-accent" />
        </span>
      </a>
    </section>
  );
}
