import Reveal from "./Reveal";
import { RAZLOZI } from "@/lib/content";

export default function Zasto() {
  return (
    <section className="bg-ink-2 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* naslov ostaje zalepljen dok se stavke smenjuju */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-white/50">
                  <span className="h-px w-8 bg-brand" />
                  Zašto Fitness Time
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display mt-6 text-[clamp(2.4rem,5.6vw,3.9rem)]">
                  Razlog da
                  <br />
                  dođeš<span className="text-brand">.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-[34ch] leading-relaxed text-white/60">
                  Bez velikih obećanja. Ovo je ono što ćeš stvarno naći kod nas.
                </p>
              </Reveal>
            </div>
          </div>

          <ol className="lg:col-span-7 lg:col-start-6">
            {RAZLOZI.map((r, i) => (
              <Reveal
                key={r.naslov}
                as="li"
                delay={0.04 * i}
                className="group grid gap-4 border-t border-white/12 py-9 last:border-b last:border-b-white/12 sm:grid-cols-12 sm:gap-8 sm:py-12"
              >
                <span className="display text-4xl text-white/15 transition-colors duration-500 group-hover:text-brand sm:col-span-2 sm:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="sm:col-span-10">
                  <h3 className="display text-2xl sm:text-[2rem]">
                    {r.naslov}
                  </h3>
                  <p className="mt-3 max-w-[52ch] leading-relaxed text-white/60">
                    {r.tekst}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
