"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import { TRENINZI } from "@/lib/content";

type Polja = { ime: string; telefon: string; tip: string; poruka: string };
type Greske = Partial<Record<keyof Polja, string>>;

const PRAZNO: Polja = { ime: "", telefon: "", tip: "", poruka: "" };

/**
 * Demo: prijava se ne šalje nigde. Za produkciju je dovoljno zameniti telo ove
 * funkcije pozivom ka API ruti / servisu za mejl (Resend, Formspree, ...).
 */
async function posaljiPrijavu(podaci: Polja) {
  void podaci; // demo: podaci se nigde ne šalju
  await new Promise((r) => setTimeout(r, 800));
}

function proveri(p: Polja): Greske {
  const g: Greske = {};
  if (p.ime.trim().length < 3) g.ime = "Unesite ime i prezime.";
  const cifre = p.telefon.replace(/\D/g, "");
  if (cifre.length < 8) g.telefon = "Unesite ispravan broj telefona.";
  return g;
}

const polje =
  "w-full border border-white/15 bg-ink px-4 py-4 text-[15px] text-white placeholder:text-white/35 transition-colors focus:border-brand focus:outline-none";

export default function Prijava() {
  const [podaci, setPodaci] = useState<Polja>(PRAZNO);
  const [greske, setGreske] = useState<Greske>({});
  const [stanje, setStanje] = useState<"idle" | "salje" | "poslato">("idle");

  const izmeni =
    (k: keyof Polja) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setPodaci((p) => ({ ...p, [k]: e.target.value }));
      if (greske[k]) setGreske((g) => ({ ...g, [k]: undefined }));
    };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const g = proveri(podaci);
    setGreske(g);
    if (Object.keys(g).length) return;
    setStanje("salje");
    await posaljiPrijavu(podaci);
    setStanje("poslato");
  }

  return (
    <section id="prijava" className="relative bg-ink-2 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-white/50">
                <span className="h-px w-8 bg-brand" />
                06 — Probni trening
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-8 text-[clamp(2.25rem,7vw,4.25rem)]">
                Spreman/na
                <br />
                za prvi trening<span className="text-brand">?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md leading-relaxed text-white/65">
                Ostavi ime i broj telefona, i javljamo ti se sa slobodnim
                terminima. Bez obaveze — dogovorićemo termin koji ti odgovara i
                vrstu treninga koja ima smisla za tebe.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-10 space-y-4 border-t border-white/12 pt-8">
                {[
                  "Popuni prijavu — traje manje od minuta.",
                  "Kontaktiramo te i biramo termin.",
                  "Dolaziš na trening, ostalo je na nama.",
                ].map((korak, i) => (
                  <li key={korak} className="flex gap-4 text-white/70">
                    <span className="eyebrow shrink-0 pt-1 text-[10px] text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {korak}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1} y={32}>
              <div className="relative border border-white/12 bg-ink p-6 sm:p-10">
                {stanje === "poslato" ? (
                  <div className="rise flex min-h-[420px] flex-col items-start justify-center">
                    <span className="flex size-14 items-center justify-center rounded-full bg-brand">
                      <Check className="size-7 text-white" aria-hidden />
                    </span>
                    <h3 className="display mt-6 text-3xl sm:text-4xl">
                      Prijava je poslata.
                    </h3>
                    <p className="mt-4 max-w-sm leading-relaxed text-white/65">
                      Hvala, {podaci.ime.split(" ")[0]}. Kontaktiraćemo te na
                      broj <span className="text-white">{podaci.telefon}</span>{" "}
                      radi dogovora o terminu.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setPodaci(PRAZNO);
                        setStanje("idle");
                      }}
                      className="mt-8 border-b border-white/25 pb-1 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-brand hover:text-brand"
                    >
                      Pošalji novu prijavu
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={onSubmit}
                    noValidate
                    className="grid gap-5 sm:grid-cols-2"
                  >
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="ime"
                        className="eyebrow mb-3 block text-[10px] text-white/50"
                      >
                        Ime i prezime *
                      </label>
                      <input
                        id="ime"
                        name="ime"
                        autoComplete="name"
                        value={podaci.ime}
                        onChange={izmeni("ime")}
                        placeholder="Marija Petrović"
                        aria-invalid={!!greske.ime}
                        className={`${polje} ${greske.ime ? "border-brand" : ""}`}
                      />
                      {greske.ime && (
                        <p className="mt-2 text-sm text-brand">{greske.ime}</p>
                      )}
                    </div>

                    <div className="sm:col-span-1">
                      <label
                        htmlFor="telefon"
                        className="eyebrow mb-3 block text-[10px] text-white/50"
                      >
                        Telefon *
                      </label>
                      <input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={podaci.telefon}
                        onChange={izmeni("telefon")}
                        placeholder="06x xxx xxxx"
                        aria-invalid={!!greske.telefon}
                        className={`${polje} ${greske.telefon ? "border-brand" : ""}`}
                      />
                      {greske.telefon && (
                        <p className="mt-2 text-sm text-brand">
                          {greske.telefon}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="tip"
                        className="eyebrow mb-3 block text-[10px] text-white/50"
                      >
                        Vrsta treninga
                      </label>
                      <select
                        id="tip"
                        name="tip"
                        value={podaci.tip}
                        onChange={izmeni("tip")}
                        className={`${polje} appearance-none`}
                      >
                        <option value="">
                          Nisam siguran/na — predložite mi
                        </option>
                        {TRENINZI.map((t) => (
                          <option key={t.id} value={t.naziv}>
                            {t.naziv}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="poruka"
                        className="eyebrow mb-3 block text-[10px] text-white/50"
                      >
                        Poruka
                      </label>
                      <textarea
                        id="poruka"
                        name="poruka"
                        rows={4}
                        value={podaci.poruka}
                        onChange={izmeni("poruka")}
                        placeholder="Kada ti najviše odgovara da treniraš?"
                        className={`${polje} resize-none`}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={stanje === "salje"}
                        className="flex w-full items-center justify-center gap-3 bg-brand py-5 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-brand-deep disabled:opacity-70"
                      >
                        {stanje === "salje" && (
                          <Loader2
                            className="size-4 animate-spin"
                            aria-hidden
                          />
                        )}
                        Prijavi se za probni trening
                      </button>
                      <p className="mt-4 text-xs leading-relaxed text-white/40">
                        Podatke koristimo isključivo za kontakt u vezi sa
                        treningom.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
