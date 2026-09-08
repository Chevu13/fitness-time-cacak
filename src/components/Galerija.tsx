import Image from "next/image";
import { InstagramIcon } from "./icons";
import Reveal from "./Reveal";
import { BUSINESS, GALERIJA } from "@/lib/content";

/** Mozaik: redovi se popunjavaju tačno (2 kolone na mobilnom, 6 na desktopu) — bez rupa. */
const LAYOUT = [
  "col-span-2 row-span-2 md:col-span-4 md:row-span-3",
  "col-span-1 row-span-2 md:col-span-2 md:row-span-3",
  "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
  "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
  "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
  "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
  "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
];

export default function Galerija() {
  return (
    <section id="galerija" className="bg-ink py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-white/50">
                <span className="h-px w-8 bg-brand" />
                04 — Galerija
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-8 text-[clamp(2.25rem,7vw,4.75rem)]">
                Ovako izgleda
                <br />
                trening kod nas<span className="text-brand">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 border-b border-white/25 pb-1 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-brand hover:text-brand"
            >
              <InstagramIcon className="size-4" />@{BUSINESS.instagram}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.05} y={32}>
          <div className="mt-12 grid auto-rows-[6.5rem] grid-cols-2 gap-2 sm:auto-rows-[9rem] sm:gap-3 md:grid-cols-6 md:auto-rows-[7.5rem] lg:auto-rows-[9.5rem]">
            {GALERIJA.map((g, i) => (
              <figure
                key={g.src + i}
                className={`group relative overflow-hidden bg-ink-2 ${LAYOUT[i]}`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
                <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
