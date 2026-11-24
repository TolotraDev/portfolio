"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1300;

/**
 * Full-screen intro: a counter runs 000 → 100, then the curtain lifts and
 * flags <html data-loaded> so the hero animations start.
 */
export function Preloader() {
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const timers: number[] = [];

    const finish = () => {
      html.dataset.loaded = "true";
      setDone(true);
      timers.push(window.setTimeout(() => setGone(true), 1100));
    };

    if (reduced) {
      raf = requestAnimationFrame(() => {
        html.dataset.loaded = "true";
        setGone(true);
      });
      return () => cancelAnimationFrame(raf);
    }

    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const value = Math.round(eased * 100);
      if (countRef.current) countRef.current.textContent = String(value).padStart(3, "0");
      if (barRef.current) barRef.current.style.transform = `scaleX(${eased})`;
      if (p < 1) raf = requestAnimationFrame(tick);
      else timers.push(window.setTimeout(finish, 150));
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      id="preloader"
      aria-hidden
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-background p-6 transition-transform duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)] sm:p-10"
      style={{ transform: done ? "translateY(-100%)" : "none" }}
    >
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em] text-muted">
        <span>Tolotra N.</span>
        <span>Portfolio — 2026</span>
      </div>

      <div className="flex items-end justify-between gap-6">
        <p className="max-w-xs font-display text-2xl font-semibold leading-tight sm:text-3xl">
          Chargement de <span className="serif-italic text-accent">l&apos;expérience</span>
        </p>
        <span
          ref={countRef}
          className="font-display text-[22vw] leading-[0.8] font-extrabold tracking-tighter tabular-nums sm:text-[14vw]"
        >
          000
        </span>
      </div>

      <span className="absolute bottom-0 left-0 h-[3px] w-full bg-border">
        <span ref={barRef} className="block h-full origin-left scale-x-0 bg-accent" />
      </span>
    </div>
  );
}
