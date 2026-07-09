import { Mail, Phone, MapPin, Download } from "lucide-react";
import { profile, cv } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="overflow-hidden rounded-md border border-border bg-surface">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5 font-mono text-xs text-muted">
            <span className="h-2.5 w-2.5 rounded-sm bg-accent" aria-hidden />
            tolotra@portfolio:~$ contact --new
          </div>

          <div className="mx-auto max-w-2xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              {"> "}Contact
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Discutons de votre prochain projet ou de mon prochain stage
            </h2>
            <p className="mt-4 text-muted">
              Disponible pour un stage en développement web ou en administration systèmes &amp;
              réseaux. Je réponds rapidement par email ou téléphone.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 font-medium transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" strokeWidth={2} />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                className="inline-flex items-center gap-2 font-medium transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4" strokeWidth={2} />
                {profile.phone}
              </a>
              <span className="inline-flex items-center gap-2 font-medium">
                <MapPin className="h-4 w-4" strokeWidth={2} />
                {profile.location}
              </span>
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href={cv.href}
                download
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-strong"
              >
                <Download className="h-4 w-4" strokeWidth={2} />
                {cv.label}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
