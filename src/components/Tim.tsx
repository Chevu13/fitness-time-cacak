import Image from "next/image";
import Reveal from "./Reveal";
import { TIM_PREVIEW } from "@/lib/content";

/**
 * Preview sekcije „Upoznaj tim“ — bez izmišljenih imena i biografija.
 * Kartice pokazuju kako bi sekcija izgledala kada klijent pošalje podatke o trenerima.
 */
export default function Tim() {
  return (
    <section className="bg-ink py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-white/50">
                <span className="h-px w-8 bg-brand" />
                Upoznaj tim
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 text-[clamp(2.2rem,5.6vw,4rem)]">
                Trener nije samo neko
                <br />
                ko broji ponavljanja<span className="text-brand">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="max-w-[42ch] leading-relaxed text-white/60">
              Predstavi svoj tim, iskustvo i način rada kako bi novi članovi
              znali ko će ih voditi od prvog treninga.
            </p>
            <span className="mt-5 inline-block border border-white/20 px-3 py-1.5 text-[10px] tracking-[0.2em] text-white/45 uppercase">
              Primer sekcije
            </span>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {TIM_PREVIEW.map((c, i) => (
            <Reveal
              key={c.tip}
              delay={0.06 * i}
              y={28}
              className={i === 1 ? "lg:mt-10" : i === 2 ? "lg:mt-20" : ""}
            >
              <figure className="group relative aspect-[4/5] overflow-hidden bg-ink-2">
                <Image
                  src={c.slika}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw"
                  className={`object-cover ${c.pozicija} opacity-85 transition-all duration-[1100ms] ease-out group-hover:scale-[1.04] group-hover:opacity-100`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <span className="eyebrow block text-[10px] text-brand">
                    {c.tip}
                  </span>
                  <span className="display mt-2 block text-2xl">{c.uloga}</span>
                  <span className="mt-2 block text-sm text-white/50">
                    Ime i biografija — dodaje se uz podatke od vas.
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
