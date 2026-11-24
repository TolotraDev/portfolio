"use client";

import { useEffect, useRef } from "react";
import { experience } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  // The timeline line fills as you scroll through the section
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const list = listRef.current;
      const line = lineRef.current;
      if (!list || !line) return;
      const r = list.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, (anchor - r.top) / r.height));
      line.style.transform = `scaleY(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="experience" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          index="03"
          eyebrow="Expérience"
          title={
            <>
              Trois stages, <span className="serif-italic text-accent">trois</span> terrains de jeu.
            </>
          }
          subtitle="Du site vitrine à l'automatisation par l'IA, en passant par une app full stack complète."
        />

        <ol ref={listRef} className="relative mt-16 space-y-6 pl-8 sm:pl-0">
          {/* Track + animated fill */}
          <span className="absolute top-2 bottom-2 left-[7px] w-px bg-border sm:left-[calc(12rem+7px)]" aria-hidden />
          <span
            ref={lineRef}
            className="absolute top-2 bottom-2 left-[7px] w-px origin-top scale-y-0 bg-gradient-to-b from-accent to-sun sm:left-[calc(12rem+7px)]"
            aria-hidden
          />

          {experience.map((job, i) => (
            <li key={job.company} className="relative sm:grid sm:grid-cols-[12rem_1fr] sm:gap-10">
              <span
                className={`absolute top-7 -left-8 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 bg-background sm:left-[12rem] ${
                  job.active ? "border-accent" : "border-border"
                }`}
                aria-hidden
              >
                {job.active && <span className="ping-soft absolute h-full w-full rounded-full bg-accent" />}
                <span className={`h-1.5 w-1.5 rounded-full ${job.active ? "bg-accent" : "bg-muted"}`} />
              </span>

              <Reveal className="pt-6 pb-2 font-mono text-sm text-muted sm:pr-6 sm:text-right">
                {job.date}
              </Reveal>

              <Reveal delay={i * 60}>
                <article className="spot group rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                        {job.company}
                      </h3>
                      <p className="mt-1 text-accent">{job.role}</p>
                    </div>
                    {job.active && (
                      <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                        En cours
                      </span>
                    )}
                  </div>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">{job.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-surface-2 px-3 py-1 font-mono text-xs text-muted transition-colors group-hover:text-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
