import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { TRENINZI } from "@/lib/content";

/** Ulazna animacija je čist CSS — bez JS-a, pa hero nikad ne može ostati nevidljiv. */
const d = (s: number) => ({ "--hd": `${s}s` }) as CSSProperties;

export default function Hero() {
  return (
    <section
      id="pocetna"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* spoljni sloj: paralaks na skrol · unutrašnji: cinematic zoom pri učitavanju */}
      <div className="hero-parallax absolute inset-0">
        <div className="hero-zoom absolute inset-0">
          <Image
            src="/photos/hero.jpg"
            alt="Trening uz podršku trenera u teretani Fitness Time"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[38%_50%] sm:object-[62%_50%]"
          />
        </div>
      </div>

      {/* čitljivost teksta preko fotografije */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/20" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-ink/85 via-ink/25 to-transparent sm:block" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pt-28 pb-12 sm:px-8 sm:pb-16">
        <p
          className="rise eyebrow mb-6 flex items-center gap-3 text-white/70"
          style={d(0.1)}
        >
          <span className="h-px w-10 bg-brand" />
          Fitness Time · Čačak
        </p>

        <h1 className="display text-[clamp(2.9rem,11.5vw,9rem)]">
          <span className="rise block" style={d(0.2)}>
            Tvoje vreme<span className="text-brand">.</span>
          </span>
          <span className="rise block" style={d(0.3)}>
            Tvoj cilj<span className="text-brand">.</span>
          </span>
          <span className="rise block" style={d(0.4)}>
            Tvoja snaga<span className="text-brand">.</span>
          </span>
        </h1>

        <p
          className="rise mt-8 max-w-md text-base leading-relaxed text-white/75 sm:text-lg"
          style={d(0.52)}
        >
          Teretana u Čačku u kojoj svako nađe svoj način da trenira — uz trenera
          koji zna šta radi.
        </p>

        <div
          className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5"
          style={d(0.62)}
        >
          <a
            href="#prijava"
            className="group flex items-center justify-center gap-3 bg-brand px-8 py-5 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-brand-deep"
          >
            Zakaži probni trening
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </a>
          <a
            href="#treninzi"
            className="group flex items-center justify-center gap-2 py-3 text-[12px] font-semibold tracking-[0.16em] text-white/80 uppercase transition-colors hover:text-white sm:justify-start"
          >
            <span className="border-b border-white/30 pb-1 transition-colors group-hover:border-brand">
              Istraži treninge
            </span>
          </a>
        </div>

        <div
          className="rise mt-14 flex items-end justify-between gap-6 border-t border-white/15 pt-6"
          style={d(0.74)}
        >
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] tracking-[0.14em] text-white/55 uppercase sm:gap-x-4 sm:text-xs">
            {TRENINZI.map((t, i) => (
              <li key={t.id} className="flex items-center gap-3 sm:gap-4">
                {i > 0 && (
                  <span className="text-brand/70" aria-hidden>
                    •
                  </span>
                )}
                {t.naziv.replace(" trening", "")}
              </li>
            ))}
          </ul>
          <ArrowDown
            className="hidden size-4 shrink-0 animate-bounce text-white/40 sm:block"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
