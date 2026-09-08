"use client";

import { useEffect, useState } from "react";

/** Mobilni sticky CTA — pojavljuje se posle heroja, sklanja se dok je forma na ekranu. */
export default function StickyCta() {
  const [vidljiv, setVidljiv] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const forma = document.getElementById("prijava");
      const prosaoHero = window.scrollY > window.innerHeight * 0.85;
      const r = forma?.getBoundingClientRect();
      const formaVidljiva =
        !!r && r.top < window.innerHeight - 80 && r.bottom > 0;
      setVidljiv(prosaoHero && !formaVidljiva);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!vidljiv}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/90 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl transition-transform duration-300 ease-out lg:hidden ${
        vidljiv ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="#prijava"
        tabIndex={vidljiv ? 0 : -1}
        className="block bg-brand py-4 text-center text-[12px] font-semibold tracking-[0.16em] text-white uppercase"
      >
        Prijavi probni trening
      </a>
    </div>
  );
}
