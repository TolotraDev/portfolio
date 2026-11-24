"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { navLinks, cv } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Scroll progress + compact state
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
      setScrolled(window.scrollY > 40);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <span className="fixed top-0 left-0 z-[70] h-[2px] w-full" aria-hidden>
        <span
          ref={progressRef}
          className="block h-full w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-sun"
        />
      </span>

      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <nav
          className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-500 ${
            scrolled
              ? "border-border bg-background/70 shadow-2xl shadow-black/10 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a
            href="#top"
            className="group flex items-center gap-2.5 rounded-full py-1 pr-3 pl-1"
            aria-label="Retour en haut"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground font-display text-sm font-bold text-background transition-transform duration-500 group-hover:rotate-[360deg]">
              TN
            </span>
            <span className="hidden font-mono text-xs tracking-wider text-muted sm:inline">
              tolotra<span className="text-accent">.</span>dev
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative isolate rounded-full px-4 py-2 text-sm transition-colors ${
                      isActive ? "text-background" : "text-muted hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`absolute inset-0 -z-10 rounded-full bg-foreground transition-all duration-300 ${
                        isActive ? "scale-100 opacity-100" : "scale-75 opacity-0"
                      }`}
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={cv.href}
              download
              className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 sm:inline-flex dark:text-background"
            >
              <ArrowDownToLine className="h-4 w-4" />
              CV
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-background/95 px-8 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="space-y-2">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="transition-all duration-500"
              style={{
                transitionDelay: open ? `${80 + i * 50}ms` : "0ms",
                transform: open ? "none" : "translateY(20px)",
                opacity: open ? 1 : 0,
              }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 font-display text-4xl font-bold tracking-tight"
              >
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={cv.href}
          download
          className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white dark:text-background"
        >
          <ArrowDownToLine className="h-4 w-4" />
          {cv.label}
        </a>
      </div>
    </>
  );
}
