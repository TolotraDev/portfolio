import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { LocalClock } from "@/components/LocalClock";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6 font-mono text-xs text-muted">
            <span>
              Mahajanga · <LocalClock timeZone={profile.timezone} />
            </span>
            <a
              href="#top"
              aria-label="Retour en haut"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <p
        aria-hidden
        className="text-outline mt-10 text-center font-display text-[18.5vw] leading-[0.8] font-extrabold tracking-tighter select-none"
      >
        TOLOTRA
      </p>

      <div className="mx-auto max-w-6xl px-6 py-6 font-mono text-xs text-muted">
        © {year} {profile.name} — Conçu & développé avec soin.
      </div>
    </footer>
  );
}
