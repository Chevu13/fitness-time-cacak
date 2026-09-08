import { TRUST } from "@/lib/content";

/**
 * Kvalitativni trust bar — bez izmišljenih ocena, brojeva članova i recenzija.
 * Na mobilnom se prelama u dva reda, na desktopu je jedan red sa separatorima.
 */
export default function TrustBar() {
  return (
    <section
      aria-label="Zašto Fitness Time"
      className="border-y border-white/10 bg-ink-2"
    >
      <ul className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-y-3 px-5 py-5 sm:px-8 sm:py-6 lg:justify-between">
        {TRUST.map((t, i) => (
          <li
            key={t}
            className="flex w-1/2 items-center justify-center gap-4 sm:w-auto sm:flex-1 lg:justify-center"
          >
            {i > 0 && (
              <span
                className="hidden size-1 rotate-45 bg-brand sm:block"
                aria-hidden
              />
            )}
            <span className="eyebrow text-[9.5px] text-white/60 sm:text-[10px] lg:text-[11px]">
              {t}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
