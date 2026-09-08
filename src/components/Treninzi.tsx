import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { TRENINZI } from "@/lib/content";

export default function Treninzi() {
  return (
    <section id="treninzi" className="bg-ink py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-white/50">
                <span className="h-px w-8 bg-brand" />
                02 — Treninzi
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-8 text-[clamp(2.25rem,7vw,4.75rem)]">
                Izaberi kako
                <br />
                treniraš<span className="text-brand">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-white/60 sm:text-right">
              Četiri načina treninga pod istim krovom. Ako ne znaš odakle da
              počneš — počni od probnog treninga.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 sm:mt-24">
          {TRENINZI.map((t, i) => (
            <Reveal key={t.id} y={32}>
              <article className="group grid gap-8 border-t border-white/12 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
                <div
                  className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2 lg:col-start-7" : ""}`}
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-ink-2">
                    <Image
                      src={t.slika}
                      alt={t.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                <div
                  className={`flex flex-col justify-center lg:col-span-5 ${
                    i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="display text-4xl text-white/15 sm:text-5xl">
                      {t.broj}
                    </span>
                    <span className="eyebrow text-[10px] text-brand">
                      {t.kratko}
                    </span>
                  </div>

                  <h3 className="display mt-4 text-[clamp(1.75rem,4.5vw,2.75rem)]">
                    {t.naziv}
                  </h3>

                  <p className="mt-5 max-w-md leading-relaxed text-white/65">
                    {t.opis}
                  </p>

                  {t.detalji && (
                    <ul className="mt-6 space-y-2 border-l border-brand pl-4">
                      {t.detalji.map((d) => (
                        <li
                          key={d}
                          className="text-sm tracking-[0.08em] text-white/80 uppercase"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    href="#prijava"
                    className="mt-8 inline-flex w-fit items-center gap-2 border-b border-white/25 pb-1 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-brand hover:text-brand"
                  >
                    Prijavi se
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
