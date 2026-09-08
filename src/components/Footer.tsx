import Image from "next/image";
import { InstagramIcon } from "./icons";
import { BUSINESS, NAV_FOOTER } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pt-14 sm:pt-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative block size-11 overflow-hidden rounded-full bg-white">
                <Image
                  src="/logo.jpg"
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <span className="leading-none">
                <span className="display block text-lg tracking-[0.14em]">
                  Fitness Time
                </span>
                <span className="eyebrow mt-1.5 block text-[9px] text-white/45">
                  Gym · Čačak
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-white/60">
              {BUSINESS.tagline}
            </p>
            <a
              href="#prijava"
              className="mt-7 inline-block border border-white/25 px-7 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-brand hover:bg-brand"
            >
              Zakaži probni trening
            </a>
          </div>

          <nav aria-label="Podnožje" className="lg:col-span-4">
            <p className="eyebrow text-[10px] text-white/40">Sadržaj</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3.5 sm:grid-cols-3 lg:gap-x-6">
              {NAV_FOOTER.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm whitespace-nowrap text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="eyebrow text-[10px] text-white/40">Piši nam</p>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-white transition-colors hover:text-brand"
            >
              <InstagramIcon className="size-4" />@{BUSINESS.instagram}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Čačak, Srbija
            </p>
          </div>
        </div>

        {/* veliki brend potpis — namerno delimično izlazi iz kadra */}
        <div
          aria-hidden
          className="pointer-events-none mt-12 -mb-[0.18em] overflow-hidden select-none sm:mt-16"
        >
          <p className="display leading-[0.8] whitespace-nowrap text-white/[0.06] text-[clamp(2.5rem,12.1vw,11.5rem)]">
            Fitness Time<span className="text-brand/25">.</span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-1.5 px-5 py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Fitness Time · Čačak</p>
          <p>Rekreacija · Zdravlje · Energija</p>
        </div>
      </div>
    </footer>
  );
}
