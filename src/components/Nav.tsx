"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    // deep link (npr. /#treninzi) skoči na poziciju tek posle mounta
    const t = setTimeout(onScroll, 250);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || open
            ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:h-20 sm:px-8">
          <a
            href="#pocetna"
            className="flex items-center gap-3"
            aria-label="Fitness Time, početna"
          >
            <span className="relative block size-9 overflow-hidden rounded-full bg-white sm:size-10">
              <Image
                src="/logo.jpg"
                alt=""
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </span>
            <span className="leading-none">
              <span className="display block text-[15px] tracking-[0.14em] sm:text-base">
                Fitness Time
              </span>
              <span className="eyebrow mt-1 block text-[9px] text-white/45">
                Gym · Čačak
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#prijava"
              className="hidden bg-brand px-5 py-3 text-[11px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-brand-deep lg:block"
            >
              Prijavi probni trening
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="-mr-2 flex size-11 items-center justify-center text-white lg:hidden"
              aria-label={open ? "Zatvori meni" : "Otvori meni"}
              aria-expanded={open}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* mobilni meni — CSS tranzicija, bez JS animacione biblioteke */}
      <div
        id="mobilni-meni"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-ink pt-16 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-1 flex-col justify-center gap-1 px-6">
          {NAV.map((item, i) => (
            <li
              key={item.href}
              className={`border-b border-white/10 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${60 * i + 60}ms` : "0ms" }}
            >
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="display flex items-baseline gap-4 py-4 text-4xl text-white"
              >
                <span className="eyebrow text-[10px] text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-28">
          <a
            href="#prijava"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="block bg-brand py-5 text-center text-sm font-semibold tracking-[0.16em] text-white uppercase"
          >
            Prijavi probni trening
          </a>
        </div>
      </div>
    </>
  );
}
