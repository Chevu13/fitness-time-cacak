const WORDS = [
  "Tvoje vreme",
  "Tvoj cilj",
  "Tvoja snaga",
  "Prijatan ambijent",
  "Vrhunski rezultati",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS, ...WORDS, ...WORDS];

  return (
    <div className="overflow-hidden bg-brand py-4 select-none">
      <div className="animate-marquee flex w-max items-center gap-8 sm:gap-12">
        {[0, 1].map((dup) => (
          <div
            key={dup}
            className="flex items-center gap-8 sm:gap-12"
            aria-hidden={dup === 1}
          >
            {row.map((w, i) => (
              <span
                key={`${dup}-${i}`}
                className="display flex items-center gap-8 text-lg whitespace-nowrap text-white sm:gap-12 sm:text-2xl"
              >
                {w}
                <span className="size-1.5 shrink-0 rotate-45 bg-white/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
