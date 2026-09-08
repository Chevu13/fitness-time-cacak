import Reveal from "./Reveal";
import { RAZLOZI } from "@/lib/content";

export default function Zasto() {
  return (
    <section className="bg-ink-2 py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-white/50">
                <span className="h-px w-8 bg-brand" />
                03 — Zašto Fitness Time
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-8 text-[clamp(2.25rem,6vw,3.75rem)]">
                Razlog da
                <br />
                dođeš<span className="text-brand">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm leading-relaxed text-white/60">
                Bez velikih obećanja. Ovo je ono što ćeš stvarno naći kod nas.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2">
              {RAZLOZI.map((r, i) => (
                <Reveal
                  key={r.naslov}
                  delay={0.05 * i}
                  className={`border-t border-white/12 py-8 sm:py-10 ${
                    i % 2 === 0
                      ? "sm:pr-10"
                      : "sm:border-l sm:border-l-white/12 sm:pl-10"
                  }`}
                >
                  <span className="eyebrow text-[10px] text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-3 text-2xl sm:text-[1.75rem]">
                    {r.naslov}
                  </h3>
                  <p className="mt-3 leading-relaxed text-white/60">
                    {r.tekst}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
