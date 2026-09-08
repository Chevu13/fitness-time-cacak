import { Quote } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Preview sekcije sa iskustvima — nijedna izjava, ocena ni ime nisu izmišljeni.
 * Kartice objašnjavaju šta ide na to mesto u finalnoj verziji.
 */
const KARTICE = [
  {
    tekst:
      "Ovde ide iskustvo člana koji je počeo od probnog treninga — svojim rečima, kratko i konkretno.",
    izvor: "Iskustvo člana",
  },
  {
    tekst:
      "Google recenzije mogu se prikazivati automatski, sa ocenom i datumom, bez ručnog održavanja.",
    izvor: "Google recenzije",
  },
  {
    tekst:
      "Rezultat posle nekoliko meseci treninga — priča, fotografija pre/posle ili kratak video.",
    izvor: "Napredak člana",
  },
];

export default function Iskustva() {
  return (
    <section className="bg-ink-2 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-white/50">
                <span className="h-px w-8 bg-brand" />
                Iskustva članova
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 text-[clamp(2.2rem,5.6vw,4rem)]">
                Najbolju reklamu
                <br />
                pišu članovi<span className="text-brand">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="sm:text-right">
              <p className="max-w-[40ch] leading-relaxed text-white/60">
                U finalnoj verziji ovde prikazujemo iskustva vaših članova,
                Google recenzije i njihove rezultate.
              </p>
              <span className="mt-5 inline-block border border-white/20 px-3 py-1.5 text-[10px] tracking-[0.2em] text-white/45 uppercase">
                Primer sadržaja
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 lg:grid-cols-3">
          {KARTICE.map((k, i) => (
            <Reveal
              key={k.izvor}
              delay={0.06 * i}
              y={26}
              className={i === 1 ? "lg:-mt-8" : ""}
            >
              <figure className="flex h-full flex-col justify-between border border-white/12 bg-ink p-7 transition-colors duration-500 hover:border-white/25 sm:p-9">
                <Quote className="size-7 text-brand" aria-hidden />
                <blockquote className="mt-8 text-lg leading-relaxed text-white/70 sm:text-xl">
                  {k.tekst}
                </blockquote>
                <figcaption className="mt-9 border-t border-white/12 pt-5 text-[11px] tracking-[0.18em] text-white/40 uppercase">
                  {k.izvor}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
