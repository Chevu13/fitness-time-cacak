import Image from "next/image";
import Reveal from "./Reveal";

/** Cinematic brend sekcija — velika fotografija, jak overlay, jedna poruka. */
export default function Manifest() {
  return (
    <section className="relative isolate flex min-h-[75svh] items-center overflow-hidden sm:min-h-[85svh]">
      {/* blagi paralaks — CSS scroll-driven animacija, bez JS-a */}
      <div className="parallax absolute inset-[-8%] -z-10">
        <Image
          src="/photos/g-indi-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="scale-105 object-cover object-center opacity-70"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-ink/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/20 to-ink/80" />

      <div className="mx-auto w-full max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-white/60">
            <span className="h-px w-10 bg-brand" />
            Fitness Time
          </p>
        </Reveal>

        <Reveal delay={0.06} y={30}>
          <h2 className="display mt-7 text-[clamp(2.75rem,10.5vw,8rem)]">
            Ne treniraš
            <br />
            sam<span className="text-brand">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-9 max-w-[46ch] text-lg leading-relaxed text-white/75 sm:text-xl">
            Bez obzira na cilj, pravi napredak dolazi kada imaš podršku,
            kontinuitet i trening prilagođen tebi.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
