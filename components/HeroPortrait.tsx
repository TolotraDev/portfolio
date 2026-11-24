"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const chips = [
  { label: "React.js", className: "top-[12%] -left-6 sm:-left-12", z: 90 },
  { label: "Node.js", className: "top-[38%] -right-4 sm:-right-10", z: 120 },
  { label: "Spring Boot", className: "bottom-[30%] -left-4 sm:-left-16", z: 70 },
  { label: "PostgreSQL", className: "bottom-[10%] -right-2 sm:-right-8", z: 100 },
];

/**
 * Portrait in a 3D scene: the whole stage tilts toward the pointer and the
 * floating layers sit at different depths, so they parallax naturally.
 * The photo itself is shown untouched.
 */
export function HeroPortrait() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const ny = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      tx = Math.max(-1, Math.min(1, nx * 2));
      ty = Math.max(-1, Math.min(1, ny * 2));
    };

    const loop = () => {
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      stage.style.transform = `rotateY(${cx * 12}deg) rotateX(${-cy * 10}deg)`;
      stage.style.setProperty("--gx", `${50 + cx * 30}%`);
      stage.style.setProperty("--gy", `${30 + cy * 30}%`);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[420px] [perspective:1200px]">
      <div ref={stageRef} className="relative [transform-style:preserve-3d] will-change-transform">
        {/* Halo behind the portrait */}
        <div
          className="absolute -inset-10 rounded-full bg-accent/25 blur-3xl"
          style={{ transform: "translateZ(-80px)" }}
          aria-hidden
        />

        {/* Orbit ring */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[130%] rounded-full border border-dashed border-accent/30"
          style={{ transform: "translate(-50%, -50%) translateZ(-40px) rotateX(70deg)" }}
          aria-hidden
        />

        {/* Portrait — arch frame */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-[2rem] border border-border bg-surface shadow-2xl shadow-black/40">
          <Image
            src="/images/tolotra-hero.webp"
            alt="Tolotra Nomenjanahary, en costume, présentant son mémoire de fin d'études"
            fill
            preload
            sizes="(min-width: 1024px) 420px, 80vw"
            className="object-cover object-[50%_20%]"
          />
          {/* Light sheen that follows the tilt (glass reflection) */}
          <div
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
            style={{
              background:
                "radial-gradient(circle at var(--gx, 50%) var(--gy, 30%), rgba(255,255,255,0.18), transparent 55%)",
            }}
            aria-hidden
          />
          <div className="scan-line" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />
          <div className="absolute inset-x-5 bottom-4 flex items-end justify-between font-mono text-[10px] tracking-widest text-white/80 uppercase">
            <span>15.72°S · 46.32°E</span>
            <span>MG</span>
          </div>
        </div>

        {/* Floating chips at different depths */}
        {chips.map((chip, i) => (
          <div
            key={chip.label}
            className={`absolute ${chip.className}`}
            style={{ transform: `translateZ(${chip.z}px)` }}
          >
            <span
              className="float-y inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-2 font-mono text-xs shadow-xl shadow-black/20 backdrop-blur-md"
              style={{ animationDelay: `${i * -1.5}s` }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {chip.label}
            </span>
          </div>
        ))}

        {/* Status card */}
        <div className="absolute -bottom-6 left-1/2" style={{ transform: "translateX(-50%) translateZ(140px)" }}>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/85 px-4 py-3 whitespace-nowrap shadow-2xl shadow-black/30 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm">
              <span className="font-medium">Disponible</span>
              <span className="text-muted"> — stage dév. web</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
