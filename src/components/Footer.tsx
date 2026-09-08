import Image from "next/image";
import { InstagramIcon } from "./icons";
import { BUSINESS, NAV } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
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
            <p className="mt-6 max-w-xs leading-relaxed text-white/50">
              {BUSINESS.tagline}
            </p>
          </div>

          <nav aria-label="Podnožje">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-[10px] text-white/45">Prati nas</p>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-white transition-colors hover:text-brand"
            >
              <InstagramIcon className="size-4" />@{BUSINESS.instagram}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fitness Time · Čačak</p>
          <p>Rekreacija · Zdravlje · Energija</p>
        </div>
      </div>
    </footer>
  );
}
