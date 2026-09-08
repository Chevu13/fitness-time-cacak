import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import { CENOVNIK } from "@/lib/content";

export default function Cenovnik() {
  return (
    <section id="cenovnik" className="bg-bone py-20 text-ink sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-ink/45">
                <span className="h-px w-8 bg-brand" />
                Treninzi i paketi
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 max-w-[16ch] text-[clamp(2.2rem,5.6vw,4.25rem)]">
                Pronađi način treninga
                <br />
                koji ti odgovara<span className="text-brand">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[34ch] leading-relaxed text-ink/60 sm:text-right">
              Svaki oblik treninga vodi trener — razlika je u tome koliko pažnje
              i slobode želiš.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 lg:grid-cols-2">
          {CENOVNIK.map((c, i) => (
            <Reveal key={c.naziv} delay={0.05 * i} y={26}>
              <div className="group flex h-full flex-col border border-ink/15 bg-white/40 p-7 transition-colors duration-500 hover:border-ink/40 sm:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="display text-2xl text-ink/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display text-[clamp(1.5rem,3vw,2.1rem)]">
                    {c.naziv}
                  </h3>
                </div>

                <p className="mt-3 max-w-[40ch] leading-relaxed text-ink/60">
                  {c.opis}
                </p>

                <ul className="mt-8 space-y-3 border-t border-ink/12 pt-7">
                  {c.stavke.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-ink/75">
                      <Check
                        className="mt-1 size-4 shrink-0 text-brand"
                        aria-hidden
                      />
                      {s}
                    </li>
                  ))}
                </ul>

                <a
                  href="#prijava"
                  className="mt-9 inline-flex items-center gap-2 self-start border-b border-ink/25 pb-1 text-[12px] font-semibold tracking-[0.16em] text-ink uppercase transition-colors hover:border-brand hover:text-brand"
                >
                  Pošalji upit
                  <ArrowRight
                    className="size-4 text-brand transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden
                  />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-5 border-t border-ink/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[54ch] text-sm leading-relaxed text-ink/55">
              Pakete i aktuelne cene možete proveriti direktno sa Fitness Time
              timom. Grupni treninzi rade po fiksnom rasporedu: ponedeljak,
              sreda i petak u 19:00 i 20:00, utorak, četvrtak i subota u 09:00.
            </p>
            <a
              href="#prijava"
              className="group flex shrink-0 items-center justify-center gap-3 bg-ink px-8 py-4.5 text-[12px] font-semibold tracking-[0.16em] text-bone uppercase transition-colors hover:bg-brand"
            >
              Pošalji upit
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
