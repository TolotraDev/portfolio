"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import { projects, personalProjectsNote } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

/**
 * Desktop: the section pins and vertical scroll drives a horizontal track.
 * Mobile/tablet: a plain vertical list (no pinning).
 */
export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mq = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let distance = 0;
    let raf = 0;

    const measure = () => {
      if (!mq.matches || reduced) {
        section.style.height = "";
        track.style.transform = "";
        distance = 0;
        return;
      }
      distance = Math.max(0, track.scrollWidth - window.innerWidth);
      section.style.height = `${window.innerHeight + distance}px`;
      update();
    };

    const update = () => {
      raf = 0;
      if (!distance) return;
      const top = section.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, -top / distance));
      track.style.transform = `translate3d(${-p * distance}px, 0, 0)`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", measure);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", measure);
    };
  }, []);

  return (
    <section id="projets" ref={sectionRef} className="relative scroll-mt-24 py-28 lg:py-0">
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-col gap-6 px-6 will-change-transform lg:w-max lg:flex-row lg:items-stretch lg:gap-8 lg:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
        >
          {/* Intro panel */}
          <Reveal className="flex flex-col justify-between gap-10 lg:w-[380px] lg:shrink-0 lg:py-4">
            <div>
              <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted uppercase">
                <span className="text-accent">04</span>
                <span className="h-px w-10 bg-border" />
                Projets
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] font-bold tracking-tight sm:text-6xl">
                Des idées, <span className="serif-italic text-accent">mises en ligne</span>.
              </h2>
              <p className="mt-6 text-muted">
                Des applications complètes, déployées et cliquables. Passez voir par vous-même.
              </p>
            </div>
            <p className="hidden items-center gap-3 font-mono text-xs text-muted lg:flex">
              Continuez à défiler
              <span className="inline-block animate-[nudge_1.4s_ease-in-out_infinite]">→</span>
            </p>
          </Reveal>

          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 60} className="lg:w-[min(560px,44vw)] lg:shrink-0">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Ouvrir ↗"
                className="spot group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-accent/60"
              >
                <div className="relative m-3 mb-0 aspect-[16/10] overflow-hidden rounded-2xl bg-surface-2 lg:max-h-[42vh]">
                  <Image
                    src={project.image}
                    alt={`Aperçu du projet ${project.title}`}
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 font-mono text-xs text-white backdrop-blur">
                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      {project.title}
                    </h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-white dark:group-hover:text-background">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.stack.map((tech) => (
                      <li key={tech} className="rounded-full bg-surface-2 px-3 py-1 font-mono text-xs text-muted">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </Reveal>
          ))}

          {/* Personal projects */}
          <Reveal className="lg:w-[340px] lg:shrink-0">
            <div className="spot flex h-full flex-col justify-between gap-8 rounded-3xl border border-dashed border-border p-7">
              <FlaskConical className="h-6 w-6 text-sun" />
              <div>
                <p className="font-display text-2xl font-bold">Et en coulisses…</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{personalProjectsNote}</p>
              </div>
              <a href="#contact" className="font-mono text-xs text-accent hover:underline">
                Le prochain projet, c&apos;est peut-être le vôtre →
              </a>
            </div>
          </Reveal>
        </div>

        {/* Horizontal progress */}
        <div className="mx-auto mt-10 hidden w-full max-w-6xl px-6 lg:block" aria-hidden>
          <span className="block h-px w-full bg-border">
            <span ref={barRef} className="block h-full origin-left scale-x-0 bg-accent" />
          </span>
        </div>
      </div>
    </section>
  );
}
