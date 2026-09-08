import Image from "next/image";
import Reveal from "./Reveal";
import { BUSINESS } from "@/lib/content";

export default function Intro() {
  return (
    <section id="o-nama" className="bg-bone py-20 text-ink sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-ink/50">
                <span className="h-px w-8 bg-brand" />
                01 — O nama
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="display mt-8 text-[clamp(2.25rem,7vw,4.75rem)]">
                Trening nije isti
                <br />
                za svakoga<span className="text-brand">.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 max-w-xl space-y-5 text-[17px] leading-relaxed text-ink/70">
                <p>
                  Neko dolazi da se vrati u formu posle pauze, neko da ojača,
                  neko zato što mu je lakše kada trenira u grupi. Zato u Fitness
                  Time-u postoji više načina da treniraš — i svaki od njih vodi
                  te neko ko zna šta radi.
                </p>
                <p className="text-ink">
                  Individualni pristup = tvoji rezultati.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-12 grid grid-cols-3 gap-x-3 border-t border-ink/15 pt-8">
                {BUSINESS.claims.map((c, i) => (
                  <li key={c}>
                    <span className="eyebrow block text-[10px] text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="display mt-2 block text-[15px] sm:text-2xl">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1} y={40}>
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src="/photos/trener.jpg"
                  alt="Trener vodi vežbačicu kroz trening u teretani Fitness Time"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[68%_50%]"
                />
              </div>
              <p className="mt-4 text-xs tracking-[0.14em] text-ink/45 uppercase">
                Fitness Time · Čačak
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
