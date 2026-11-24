"use client";

import { useState } from "react";
import { Copy, Check, Phone, MapPin, ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { profile, cv } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative isolate scroll-mt-24 overflow-hidden py-32">
      <div className="blueprint-grid absolute inset-0 -z-10 opacity-50" aria-hidden />
      <div
        className="absolute top-1/2 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted uppercase">
            <span className="text-accent">06</span>
            <span className="h-px w-10 bg-border" />
            Contact
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.1rem,7vw,5.5rem)] leading-[0.92] font-extrabold tracking-tighter">
            Construisons
            <br />
            quelque chose de <span className="serif-italic font-normal text-accent">remarquable</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <Reveal className="space-y-6">
            <p className="max-w-lg text-lg text-muted">
              Disponible pour un stage en développement web full stack. Je réponds rapidement — par
              email ou par téléphone.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface py-2 pr-2 pl-5 font-mono text-sm transition-colors hover:border-accent"
                aria-label={`Copier l'adresse email ${profile.email}`}
              >
                {profile.email}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 transition-colors group-hover:bg-accent group-hover:text-white dark:group-hover:text-background">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </span>
              </button>
              <span
                className={`font-mono text-xs text-accent transition-opacity ${copied ? "opacity-100" : "opacity-0"}`}
                role="status"
              >
                Copié !
              </span>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm text-muted">
              <a href={`tel:${profile.phoneHref}`} className="inline-flex items-center gap-2 hover:text-accent">
                <Phone className="h-4 w-4" />
                {profile.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
              <a href={cv.href} download className="inline-flex items-center gap-2 hover:text-accent">
                <ArrowDownToLine className="h-4 w-4" />
                {cv.label}
              </a>
            </div>
          </Reveal>

          <Reveal className="justify-self-center">
            <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="group relative flex h-44 w-44 flex-col items-center justify-center gap-2 rounded-full bg-accent font-display text-lg font-bold text-white transition-transform duration-500 hover:scale-105 sm:h-52 sm:w-52 dark:text-background"
              >
                <span className="absolute inset-0 animate-[spin_14s_linear_infinite] rounded-full border border-dashed border-accent [inset:-14px]" />
                <ArrowUpRight className="h-7 w-7 transition-transform duration-500 group-hover:rotate-45" />
                Écrivez-moi
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
