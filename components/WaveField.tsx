"use client";

import { useEffect, useRef } from "react";

/**
 * A 3D terrain of dots rendered on a 2D canvas: a grid laid on a plane,
 * displaced by travelling sine waves and lifted where the pointer hovers,
 * then projected in perspective. No WebGL, no dependency.
 */
export function WaveField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let cols = 56;
    let rows = 30;
    let raf = 0;
    let visible = true;
    let t = 0;
    let accent = "#6e9bff";
    let sun = "#ffb547";
    let mouseX = -9999;
    let mouseY = -9999;
    let smx = mouseX;
    let smy = mouseY;

    const readColors = () => {
      const s = getComputedStyle(document.documentElement);
      accent = s.getPropertyValue("--accent").trim() || accent;
      sun = s.getPropertyValue("--sun").trim() || sun;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = w < 640 ? 32 : 56;
      rows = w < 640 ? 22 : 30;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const F = Math.max(w, 700) * 0.55;
      const horizon = h * 0.38;
      const camY = 1.4;
      const zNear = 1.6;
      const zFar = 16;
      const spreadX = 24;

      smx += (mouseX - smx) * 0.08;
      smy += (mouseY - smy) * 0.08;

      for (let j = rows - 1; j >= 0; j--) {
        const z = zNear + (j / (rows - 1)) * (zFar - zNear);
        const depth = 1 - (z - zNear) / (zFar - zNear); // 1 near, 0 far
        let prevX = 0;
        let prevY = 0;

        ctx.lineWidth = 1;
        ctx.strokeStyle = accent;

        for (let i = 0; i < cols; i++) {
          const x = (i / (cols - 1) - 0.5) * spreadX;
          let y =
            Math.sin(x * 0.55 + t * 0.9) * 0.28 +
            Math.cos(z * 0.45 - t * 0.7) * 0.32 +
            Math.sin((x + z) * 0.25 + t * 0.4) * 0.2;

          let sx = w / 2 + (x / z) * F;
          let sy = horizon + ((camY - y) / z) * F;

          // Pointer lift (screen-space gaussian)
          const dx = sx - smx;
          const dy = sy - smy;
          const lift = Math.exp(-(dx * dx + dy * dy) / (2 * 140 * 140)) * (z < 3 ? 0.15 : 0.6);
          if (lift > 0.01) {
            y += lift;
            sy = horizon + ((camY - y) / z) * F;
            sx = w / 2 + (x / z) * F;
          }

          if (i > 0) {
            ctx.globalAlpha = 0.07 * depth + 0.02;
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(sx, sy);
            ctx.stroke();
          }
          prevX = sx;
          prevY = sy;

          const r = Math.max(0.6, (2.4 / z) * 2.2);
          const hot = lift > 0.25;
          ctx.globalAlpha = Math.min(1, 0.2 + depth * 0.75 + lift * 0.6);
          ctx.fillStyle = hot ? sun : accent;
          ctx.beginPath();
          ctx.arc(sx, sy, hot ? r * 1.4 : r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      t += 0.012;
      draw();
      raf = visible ? requestAnimationFrame(loop) : 0;
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    resize();
    readColors();

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw();
    });
    ro.observe(canvas);

    const mo = new MutationObserver(() => {
      readColors();
      if (reduced) draw();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf && !reduced) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    if (reduced) {
      draw();
    } else {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mo.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={`block h-full w-full ${className}`} />;
}
