import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { TRENINZI } from "@/lib/content";

/**
 * Asimetrična mreža: prva i četvrta kartica su više, desna kolona je spuštena.
 * Visine idu preko min-height (ne preko row-span) da se kartice nikad ne preklope.
 */
const VISINA = [
  "lg:min-h-[34rem]",
  "lg:min-h-[29rem]",
  "lg:min-h-[29rem]",
  "lg:min-h-[34rem]",
];

export default function Treninzi() {
  return (
    <section id="treninzi" className="bg-ink py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-white/50">
                <span className="h-px w-8 bg-brand" />
                Treninzi
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 text-[clamp(2.4rem,6.4vw,4.75rem)]">
                Izaberi kako
                <br />
                treniraš<span className="text-brand">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[32ch] leading-relaxed text-white/60 sm:text-right">
              Četiri načina treninga pod istim krovom. Ako ne znaš odakle da
              počneš — počni od probnog treninga.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 lg:grid-cols-2 lg:items-start">
          {TRENINZI.map((t, i) => (
            <Reveal
              key={t.id}
              delay={0.06 * i}
              y={28}
              className={i % 2 === 1 ? "lg:mt-16" : ""}
            >
              <a
                href="#prijava"
                className={`group relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden bg-ink-2 p-6 sm:min-h-[30rem] sm:p-8 ${VISINA[i]}`}
              >
                <Image
                  src={t.slika}
                  alt={t.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]"
                />
                {/* gradijent za čitljivost + suptilno tamnjenje na hover */}
                <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />

                <span className="relative">
                  <span className="flex items-center gap-4">
                    <span className="display text-3xl text-white/25 sm:text-4xl">
                      {t.broj}
                    </span>
                    <span className="eyebrow text-[10px] text-brand">
                      {t.kratko}
                    </span>
                  </span>

                  <h3 className="display mt-4 text-[clamp(1.7rem,3.4vw,2.5rem)]">
                    {t.naziv}
                  </h3>

                  <span className="mt-4 block max-w-[38ch] leading-relaxed text-white/70">
                    {t.opis}
                  </span>

                  {t.detalji && (
                    <span className="mt-5 block border-l border-brand pl-4">
                      {t.detalji.map((d) => (
                        <span
                          key={d}
                          className="block text-[13px] tracking-[0.08em] text-white/75 uppercase"
                        >
                          {d}
                        </span>
                      ))}
                    </span>
                  )}

                  <span className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.16em] text-white uppercase">
                    Saznaj više
                    <ArrowRight
                      className="size-4 text-brand transition-transform duration-300 group-hover:translate-x-1.5"
                      aria-hidden
                    />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
