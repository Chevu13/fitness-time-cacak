import Image from "next/image";
import { ArrowDown } from "lucide-react";
import type { CSSProperties } from "react";

/** Ulazna animacija je čist CSS — bez JS-a, pa hero nikad ne može ostati nevidljiv. */
const d = (s: number) => ({ "--hd": `${s}s` }) as CSSProperties;

export default function Hero() {
  return (
    <section
      id="pocetna"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      <div className="kenburns absolute inset-0">
        <Image
          src="/photos/hero.jpg"
          alt="Trening uz podršku trenera u teretani Fitness Time"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[38%_50%] sm:object-[62%_50%]"
        />
      </div>

      {/* čitljivost teksta preko fotografije */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/15" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-ink/80 via-ink/10 to-transparent sm:block" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pt-28 pb-10 sm:px-8 sm:pb-14">
        <p
          className="rise eyebrow mb-5 flex items-center gap-3 text-white/70"
          style={d(0.1)}
        >
          <span className="h-px w-8 bg-brand" />
          Fitness Time · Čačak
        </p>

        <h1 className="display text-[clamp(2.75rem,11vw,8.5rem)]">
          <span className="rise block" style={d(0.2)}>
            Tvoje vreme<span className="text-brand">.</span>
          </span>
          <span className="rise block" style={d(0.29)}>
            Tvoj cilj<span className="text-brand">.</span>
          </span>
          <span className="rise block" style={d(0.38)}>
            Tvoja snaga<span className="text-brand">.</span>
          </span>
        </h1>

        <p
          className="rise mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          style={d(0.5)}
        >
          Teretana u Čačku u kojoj svako nađe svoj način da trenira — grupno, uz
          trenera jedan na jedan, u manjoj grupi ili sam, po svom planu.
        </p>

        <div
          className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={d(0.6)}
        >
          <a
            href="#prijava"
            className="bg-brand px-8 py-4.5 text-center text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-brand-deep"
          >
            Prijavi probni trening
          </a>
          <a
            href="#treninzi"
            className="border border-white/25 px-8 py-4.5 text-center text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-white hover:bg-white hover:text-ink"
          >
            Pogledaj treninge
          </a>
        </div>

        <div
          className="rise mt-12 flex items-center justify-between border-t border-white/15 pt-6"
          style={d(0.72)}
        >
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-[0.16em] text-white/55 uppercase sm:gap-x-10 sm:text-xs">
            <li>Grupni treninzi</li>
            <li>Individualni</li>
            <li className="hidden sm:block">Poluindividualni</li>
            <li className="hidden sm:block">Open gym</li>
          </ul>
          <ArrowDown
            className="size-4 shrink-0 animate-bounce text-white/40"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
