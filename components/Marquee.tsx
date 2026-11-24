import { marquee } from "@/lib/data";

function Row({ reverse = false, outlined = false }: { reverse?: boolean; outlined?: boolean }) {
  const items = [...marquee, ...marquee];
  return (
    <div className="flex overflow-hidden">
      <ul className={`marquee-track flex shrink-0 items-center gap-10 pr-10 ${reverse ? "reverse" : ""}`}>
        {items.map((item, i) => (
          <li
            key={i}
            aria-hidden={i >= marquee.length}
            className={`flex items-center gap-10 font-display text-4xl font-bold tracking-tight whitespace-nowrap sm:text-6xl ${
              outlined ? "text-outline" : ""
            }`}
          >
            {item}
            <span className="text-2xl text-accent sm:text-3xl">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Technologies" className="relative -my-6 overflow-hidden py-16">
      <div className="-rotate-2 space-y-4 border-y border-border bg-surface py-6">
        <Row />
        <Row reverse outlined />
      </div>
    </section>
  );
}
