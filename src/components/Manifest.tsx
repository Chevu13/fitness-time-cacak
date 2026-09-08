import Image from "next/image";
import Reveal from "./Reveal";

export default function Manifest() {
  return (
    <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden">
      {/* blagi paralaks — CSS scroll-driven animacija, bez JS-a */}
      <div className="parallax absolute inset-[-8%] -z-10">
        <Image
          src="/photos/g-indi-3.jpg"
          alt=""
          fill
          sizes="100vw"
          className="scale-105 object-cover opacity-60"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-ink/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink" />

      <div className="mx-auto w-full max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal y={30}>
          <h2 className="display text-[clamp(2.5rem,10vw,7.5rem)]">
            Tvoj trening<span className="text-brand">.</span>
            <br />
            Tvoj tempo<span className="text-brand">.</span>
            <br />
            Tvoje vreme<span className="text-brand">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
            Ne moraš da budeš spreman da bi počeo. Dovoljno je da dođeš — ostalo
            radimo zajedno.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
