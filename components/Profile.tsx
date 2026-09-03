import { profile, softSkills, languages } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

export function Profile() {
  return (
    <section id="profil" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="Profil"
          title="Un même goût pour construire et pour fiabiliser"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            {profile.summary.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}

            <ul className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2">
              {softSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-2.5 font-mono text-sm text-foreground">
                  <span className="text-accent">[✓]</span>
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="rounded-md border border-border bg-surface p-8">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted">
              {"> "}Langues
            </h3>
            <div className="mt-4 space-y-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="mb-1.5 flex justify-between font-mono text-sm">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="text-muted">{lang.level}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-sm bg-surface-2">
                    <div
                      className="lang-fill h-full rounded-sm bg-accent"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-8 font-mono text-xs font-semibold uppercase tracking-widest text-muted">
              {"> "}En bref
            </h3>
            <dl className="mt-4 space-y-3 font-mono text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Localisation</dt>
                <dd className="text-right font-medium">{profile.location}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Formation</dt>
                <dd className="text-right font-medium">EMIT Fianarantsoa, 2024–2026</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Recherche</dt>
                <dd className="text-right font-medium">Stage en développement web</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
