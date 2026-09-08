"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import { KORACI, TRENINZI } from "@/lib/content";

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

const labela = "eyebrow mb-3 block text-[10px] text-white/50";

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
    <section
      id="prijava"
      className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-32"
    >
      {/* tanka crvena linija kao akcenat sekcije */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-white/50">
                <span className="h-px w-8 bg-brand" />
                Probni trening
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="display mt-6 text-[clamp(2.2rem,5.6vw,4rem)]">
                Tvom prvom treningu
                <br />
                treba samo jedan korak<span className="text-brand">.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-white/65">
                Ostavi kontakt i Fitness Time tim može ti pomoći da pronađeš
                trening koji odgovara tvom cilju.
              </p>
            </Reveal>

            <ol className="mt-12">
              {KORACI.map((k, i) => (
                <Reveal
                  key={k.broj}
                  as="li"
                  delay={0.05 * i}
                  className="group relative flex gap-6 border-t border-white/12 py-6 last:border-b last:border-b-white/12"
                >
                  <span className="display text-2xl text-brand">{k.broj}</span>
                  <span>
                    <span className="display block text-lg">{k.naslov}</span>
                    <span className="mt-1.5 block text-white/55">
                      {k.tekst}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.08} y={32}>
              <div className="relative border border-white/12 bg-ink-2 p-6 sm:p-10">
                {stanje === "poslato" ? (
                  <div className="rise flex min-h-[26rem] flex-col items-start justify-center">
                    <span className="flex size-14 items-center justify-center rounded-full bg-brand">
                      <Check className="size-7 text-white" aria-hidden />
                    </span>
                    <h3 className="display mt-7 text-3xl sm:text-4xl">
                      Prijava je poslata.
                    </h3>
                    <p className="mt-4 max-w-[40ch] leading-relaxed text-white/65">
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
                      className="mt-9 border-b border-white/25 pb-1 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-brand hover:text-brand"
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
                    <div>
                      <label htmlFor="ime" className={labela}>
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

                    <div>
                      <label htmlFor="telefon" className={labela}>
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
                      <label htmlFor="tip" className={labela}>
                        Vrsta treninga (opciono)
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
                      <label htmlFor="poruka" className={labela}>
                        Poruka (opciono)
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
                        className="group flex w-full items-center justify-center gap-3 bg-brand py-5 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-brand-deep disabled:opacity-70"
                      >
                        {stanje === "salje" ? (
                          <Loader2
                            className="size-4 animate-spin"
                            aria-hidden
                          />
                        ) : null}
                        Zakaži probni trening
                        <ArrowRight
                          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden
                        />
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
