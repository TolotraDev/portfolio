import { Reveal } from "@/components/Reveal";

export function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-accent">
        <span className="text-muted">{"> "}</span>
        {eyebrow}
      </span>
      <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
    </Reveal>
  );
}
