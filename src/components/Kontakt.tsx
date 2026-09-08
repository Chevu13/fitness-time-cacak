import { ArrowRight, Clock, MapPin } from "lucide-react";
import { InstagramIcon } from "./icons";
import Reveal from "./Reveal";
import { BUSINESS } from "@/lib/content";

const RASPORED = [
  {
    dani: "Ponedeljak · Sreda · Petak",
    termin: "19:00 i 20:00",
    tip: "Grupni trening za žene",
  },
  {
    dani: "Utorak · Četvrtak · Subota",
    termin: "09:00",
    tip: "Grupni trening za žene",
  },
  {
    dani: "Individualni i poluindividualni",
    termin: "Po dogovoru",
    tip: "Termin dogovaraš sa trenerom",
  },
];

export default function Kontakt() {
  return (
    <section id="kontakt" className="bg-ink-2 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-white/50">
                <span className="h-px w-8 bg-brand" />
                Kontakt
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 text-[clamp(2.2rem,5.6vw,4rem)]">
                Vidimo se
                <br />u teretani<span className="text-brand">.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-10 divide-y divide-white/12 border-y border-white/12">
                <div className="flex items-start gap-4 py-6">
                  <MapPin
                    className="mt-1 size-5 shrink-0 text-brand"
                    aria-hidden
                  />
                  <div>
                    <dt className="eyebrow text-[10px] text-white/45">
                      Lokacija
                    </dt>
                    <dd className="display mt-2 text-2xl">Čačak</dd>
                    <dd className="mt-3">
                      <button
                        type="button"
                        disabled
                        className="cursor-not-allowed border-b border-white/20 pb-1 text-[11px] font-semibold tracking-[0.16em] text-white/40 uppercase"
                      >
                        Prikaži lokaciju
                      </button>
                      <span className="mt-2 block text-xs text-white/35">
                        Mapa i tačna adresa se dodaju uz podatke od vas.
                      </span>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-6">
                  <InstagramIcon className="mt-1 size-5 shrink-0 text-brand" />
                  <div>
                    <dt className="eyebrow text-[10px] text-white/45">
                      Instagram
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={BUSINESS.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="display text-2xl transition-colors hover:text-brand"
                      >
                        @{BUSINESS.instagram}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-6">
                  <Clock
                    className="mt-1 size-5 shrink-0 text-brand"
                    aria-hidden
                  />
                  <div>
                    <dt className="eyebrow text-[10px] text-white/45">
                      Termini
                    </dt>
                    <dd className="mt-2 leading-relaxed text-white/70">
                      Grupni treninzi po rasporedu, individualni po dogovoru.
                    </dd>
                  </div>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href="#prijava"
                className="group mt-10 inline-flex items-center gap-3 bg-brand px-8 py-4.5 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-brand-deep"
              >
                Zakaži probni trening
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1} y={32}>
              <div className="border border-white/12 bg-ink p-6 sm:p-10">
                <p className="eyebrow text-[10px] text-white/45">Raspored</p>
                <h3 className="display mt-4 text-2xl sm:text-3xl">
                  Kada se trenira
                </h3>

                <ul className="mt-8">
                  {RASPORED.map((r) => (
                    <li
                      key={r.dani}
                      className="flex flex-col gap-1 border-t border-white/12 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                    >
                      <div>
                        <p className="text-[15px] text-white">{r.dani}</p>
                        <p className="mt-1 text-sm text-white/45">{r.tip}</p>
                      </div>
                      <span className="display shrink-0 text-xl text-brand sm:text-2xl">
                        {r.termin}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 border-t border-white/12 pt-6 text-sm leading-relaxed text-white/45">
                  Sve novosti, termine i najave objavljujemo na Instagram
                  profilu{" "}
                  <a
                    href={BUSINESS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 underline underline-offset-4 transition-colors hover:text-brand"
                  >
                    @{BUSINESS.instagram}
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
