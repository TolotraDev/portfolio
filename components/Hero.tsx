import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, ChevronDown } from "lucide-react";
import { profile } from "@/lib/data";
import { RoleRotator } from "@/components/RoleRotator";
import { CvDownload } from "@/components/CvDownload";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="dot-grid-bg absolute inset-0 opacity-70" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-20 sm:pt-20 sm:pb-28">
        <Reveal>
          <div className="overflow-hidden rounded-md border border-border bg-surface/80 shadow-2xl shadow-black/5 backdrop-blur-sm dark:shadow-black/40">
            <div className="flex items-center gap-3 border-b border-border bg-surface-2/60 px-4 py-2.5 font-mono text-xs text-muted">
              <span className="flex items-center gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </span>
              <span>tolotra@portfolio:~$ whoami</span>
            </div>

            <div className="p-6 sm:p-10">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <div className="relative shrink-0">
                  <div className="h-28 w-28 overflow-hidden rounded-md border border-accent/40 bg-background sm:h-36 sm:w-36">
                    <Image
                      src="/images/tolotra.jpg"
                      alt="Portrait de Tolotra Nomenjanahary"
                      width={288}
                      height={288}
                      priority
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="pointer-events-none absolute -top-1.5 -left-1.5 h-3.5 w-3.5 border-t-2 border-l-2 border-accent" aria-hidden />
                  <span className="pointer-events-none absolute -top-1.5 -right-1.5 h-3.5 w-3.5 border-t-2 border-r-2 border-accent" aria-hidden />
                  <span className="absolute -right-1.5 -bottom-1.5 flex h-5 w-5 items-center justify-center rounded-sm border-2 border-surface bg-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-background" />
                  </span>
                </div>

                <div>
                  <span className="inline-flex items-center gap-2 rounded-sm border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent">
                    [ disponible pour un stage — {profile.location} ]
                    <span className="cursor-blink">_</span>
                  </span>
                  <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight sm:text-6xl">
                    {profile.name}
                  </h1>
                </div>
              </div>

              <p className="mt-6 font-mono text-base sm:text-lg">
                <RoleRotator roles={profile.roles} />
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                Étudiant en informatique à l&apos;EMIT Fianarantsoa, je conçois des applications web de
                bout en bout, du premier écran au dernier endpoint. Une même exigence&nbsp;:
                comprendre comment les pièces s&apos;assemblent avant de construire.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projets"
                  className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-strong"
                >
                  Voir mes projets
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-sm border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
                >
                  Discutons
                </a>
                <CvDownload />
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm text-muted">
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                  <Mail className="h-4 w-4" strokeWidth={2} />
                  {profile.email}
                </a>
                <a href={`tel:${profile.phoneHref}`} className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                  <Phone className="h-4 w-4" strokeWidth={2} />
                  {profile.phone}
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" strokeWidth={2} />
                  {profile.location}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#profil"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted sm:flex"
        aria-hidden
      >
        scroll
        <ChevronDown className="h-4 w-4 animate-bounce" strokeWidth={2} />
      </a>
    </section>
  );
}
