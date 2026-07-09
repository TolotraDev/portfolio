export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8 font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <span>© {year} Tolotra Nomenjanahary. Tous droits réservés.</span>
        <a href="#top" className="transition-colors hover:text-accent">
          {"[ retour en haut ]"}
        </a>
      </div>
    </footer>
  );
}
