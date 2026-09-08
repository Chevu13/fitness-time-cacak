import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { CENOVNIK } from "@/lib/content";

export default function Cenovnik() {
  return (
    <section id="cenovnik" className="bg-bone py-16 text-ink sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-ink/50">
                <span className="h-px w-8 bg-brand" />
                05 — Cenovnik
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-8 text-[clamp(2.25rem,7vw,4.75rem)]">
                Članarine
                <br />i termini<span className="text-brand">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-ink/60 sm:text-right">
              Cene i pakete šaljemo na upit — javi nam se i predložićemo ono što
              odgovara tvom cilju i rasporedu.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 sm:mt-20">
          {CENOVNIK.map((c, i) => (
            <Reveal key={c.naziv} delay={0.04 * i}>
              <div className="group grid gap-5 border-t border-ink/15 py-8 last:border-b last:border-b-ink/15 sm:grid-cols-12 sm:items-center sm:gap-8 sm:py-10">
                <div className="sm:col-span-6">
                  <h3 className="display text-2xl sm:text-[2rem]">{c.naziv}</h3>
                  <p className="mt-2 text-ink/60">{c.opis}</p>
                </div>

                <ul className="flex flex-wrap gap-x-5 gap-y-2 sm:col-span-3">
                  {c.stavke.map((s) => (
                    <li
                      key={s}
                      className="text-[11px] tracking-[0.12em] text-ink/55 uppercase before:mr-2 before:text-brand before:content-['—']"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between gap-4 sm:col-span-3 sm:justify-end">
                  <span className="display text-lg whitespace-nowrap sm:text-xl">
                    Cena na upit
                  </span>
                  <a
                    href="#prijava"
                    className="flex size-11 shrink-0 items-center justify-center border border-ink/20 transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white"
                    aria-label={`Pošalji upit za: ${c.naziv}`}
                  >
                    <ArrowUpRight className="size-5" aria-hidden />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm text-ink/50">
              Grupni treninzi rade po fiksnom rasporedu: ponedeljak, sreda i
              petak u 19:00 i 20:00, utorak, četvrtak i subota u 09:00.
            </p>
            <a
              href="#prijava"
              className="bg-ink px-8 py-4 text-center text-[12px] font-semibold tracking-[0.16em] text-bone uppercase transition-colors hover:bg-brand"
            >
              Pošalji upit
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
