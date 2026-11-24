"use client";

import { useEffect, useRef } from "react";

/**
 * Desktop-only cursor companion: a ring that trails the pointer, grows over
 * interactive elements and shows a label for [data-cursor="..."] targets.
 * Also feeds --mx/--my to the hovered `.spot` card for its glow.
 */
export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!ring || !label) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let x = -100;
    let y = -100;
    let rx = x;
    let ry = y;
    let scale = 1;
    let targetScale = 1;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      ring.style.opacity = "1";

      const target = e.target as HTMLElement | null;
      const spot = target?.closest<HTMLElement>(".spot");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${x - r.left}px`);
        spot.style.setProperty("--my", `${y - r.top}px`);
      }

      const labelled = target?.closest<HTMLElement>("[data-cursor]");
      const interactive = target?.closest("a, button, [role='button']");
      if (labelled) {
        label.textContent = labelled.dataset.cursor ?? "";
        targetScale = 3.2;
        ring.dataset.mode = "label";
      } else if (interactive) {
        targetScale = 1.8;
        ring.dataset.mode = "hover";
      } else {
        targetScale = 1;
        ring.dataset.mode = "";
      }
    };

    const onLeave = () => {
      ring.style.opacity = "0";
    };

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      scale += (targetScale - scale) * 0.15;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      aria-hidden
      className="group pointer-events-none fixed top-0 left-0 z-[90] hidden h-8 w-8 items-center justify-center rounded-full border border-accent opacity-0 transition-[opacity,background-color,border-color] duration-300 data-[mode=hover]:bg-accent/10 data-[mode=label]:border-transparent data-[mode=label]:bg-accent [@media(pointer:fine)]:flex"
    >
      <span
        ref={labelRef}
        className="scale-[0.3125] font-mono text-[11px] font-medium whitespace-nowrap text-background opacity-0 transition-opacity group-data-[mode=label]:opacity-100"
      />
    </div>
  );
}
