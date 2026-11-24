"use client";

import { useEffect, useRef, useState } from "react";
import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

type Tag = { label: string; group: string; x: number; y: number; z: number };

/** Evenly spread points on a sphere (Fibonacci lattice). */
function buildTags(): Tag[] {
  const flat = skillGroups.flatMap((g) => g.items.map((label) => ({ label, group: g.title })));
  const n = flat.length;
  const golden = Math.PI * (3 - Math.sqrt(5));
  return flat.map((t, i) => {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    return { ...t, x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
  });
}

const tags = buildTags();

function TagSphere({ highlight }: { highlight: string | null }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ax = 0.0035; // rotation speed around X
    let ay = 0.006; // rotation speed around Y
    let tax = ax;
    let tay = ay;
    let rotX = 0.3;
    let rotY = 0;
    let raf = 0;
    let visible = true;

    const render = () => {
      const radius = wrap.clientWidth * 0.4;
      const cx = Math.cos(rotX);
      const sx = Math.sin(rotX);
      const cy = Math.cos(rotY);
      const sy = Math.sin(rotY);

      tags.forEach((t, i) => {
        const el = itemRefs.current[i];
        if (!el) return;
        // rotate around Y then X
        const x1 = t.x * cy + t.z * sy;
        const z1 = -t.x * sy + t.z * cy;
        const y2 = t.y * cx - z1 * sx;
        const z2 = t.y * sx + z1 * cx;
        const scale = 0.65 + ((z2 + 1) / 2) * 0.55;
        el.style.transform = `translate(-50%, -50%) translate3d(${x1 * radius}px, ${y2 * radius}px, 0) scale(${scale})`;
        el.style.zIndex = String(Math.round((z2 + 1) * 100));
        el.style.setProperty("--depth", String((z2 + 1) / 2));
      });
    };

    const loop = () => {
      ax += (tax - ax) * 0.05;
      ay += (tay - ay) * 0.05;
      rotX += ax;
      rotY += ay;
      render();
      raf = visible ? requestAnimationFrame(loop) : 0;
    };

    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      tay = nx * 0.03;
      tax = -ny * 0.03;
    };
    const onLeave = () => {
      tax = 0.0035;
      tay = 0.006;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf && !reduced) raf = requestAnimationFrame(loop);
    });

    render();
    if (!reduced) {
      io.observe(wrap);
      wrap.addEventListener("pointermove", onMove);
      wrap.addEventListener("pointerleave", onLeave);
    }
    const ro = new ResizeObserver(render);
    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden>
      <div className="absolute inset-[18%] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute inset-[8%] rounded-full border border-border" />
      <div className="absolute inset-[8%] rounded-full border border-dashed border-border [transform:rotateX(72deg)]" />
      <ul>
        {tags.map((t, i) => {
          const dim = highlight !== null && highlight !== t.group;
          const lit = highlight === t.group;
          return (
            <li
              key={t.label}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={`absolute top-1/2 left-1/2 rounded-full border px-3 py-1.5 font-mono text-xs whitespace-nowrap transition-[background-color,border-color,color,opacity] duration-300 sm:text-sm ${
                lit
                  ? "border-accent bg-accent text-white dark:text-background"
                  : "border-border bg-background/80 backdrop-blur-sm"
              }`}
              style={{ opacity: dim ? 0.15 : "calc(0.35 + var(--depth, 1) * 0.65)" }}
            >
              {t.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Skills() {
  const [highlight, setHighlight] = useState<string | null>(null);

  return (
    <section id="competences" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          index="02"
          eyebrow="Compétences"
          title={
            <>
              Une boîte à outils <span className="serif-italic text-accent">full stack</span>.
            </>
          }
          subtitle="Survolez une catégorie : la sphère s'illumine sur les technologies correspondantes."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <TagSphere highlight={highlight} />
          </Reveal>

          <div className="space-y-3">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <div
                  onMouseEnter={() => setHighlight(g.title)}
                  onMouseLeave={() => setHighlight(null)}
                  onFocus={() => setHighlight(g.title)}
                  onBlur={() => setHighlight(null)}
                  tabIndex={0}
                  className={`spot group rounded-2xl border bg-surface p-5 transition-colors outline-none ${
                    highlight === g.title ? "border-accent" : "border-border"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-xl font-bold">{g.title}</h3>
                    <span className="font-mono text-xs text-muted">
                      {String(g.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                    {g.items.map((item) => (
                      <li key={item} className="transition-colors group-hover:text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
