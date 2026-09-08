# Fitness Time — demo sajt

Prezentacioni sajt za teretanu **Fitness Time** (Čačak, IG [@vreme.za.fitnes](https://www.instagram.com/vreme.za.fitnes/)).
Next.js 16 + TypeScript + Tailwind CSS v4. Jedna stranica, bez backenda.

## Pokretanje

```bash
npm install
npm run dev
```

## Deploy (Vercel)

1. Push repozitorijuma na GitHub.
2. [vercel.com/new](https://vercel.com/new) → **Import** repozitorijum → **Deploy**.
   Bez podešavanja: nema env varijabli, nema baze.

## Šta je verifikovano, a šta nije

Sav tekst i ponuda su preuzeti sa zvaničnog Instagram profila (objave i bio):
grupni treninzi za žene i njihov raspored, individualni i poluindividualni treninzi,
teretana (open gym), poruke brenda i grad (Čačak, potvrdio vlasnik).

**Namerno nije izmišljeno i ne stoji na sajtu:** adresa, broj telefona, e-mail,
radno vreme teretane, cene i imena trenera. Cenovnik zato stoji kao „Cena na upit".

## Gde se menja sadržaj

| Šta                                    | Gde                                    |
| -------------------------------------- | -------------------------------------- |
| Tekstovi, treninzi, cenovnik, galerija | `src/lib/content.ts`                   |
| Raspored u sekciji Kontakt             | `src/components/Kontakt.tsx` (`RASPORED`) |
| Fotografije                            | `public/photos/` (zadrži ista imena)   |
| Logo                                   | `public/logo.jpg`, `src/app/icon.png`  |
| SEO naslov/opis                        | `src/app/layout.tsx`                   |

Fotografije su sa njihovog Instagrama i služe samo za demo — zameniti originalima
u punoj rezoluciji pre puštanja u rad.

## Forma za probni trening

Frontend validacija + demo potvrda; podaci se nigde ne šalju.
Za pravo slanje dovoljno je zameniti telo funkcije `posaljiPrijavu`
u `src/components/Prijava.tsx` (API ruta, Resend, Formspree — po izboru).
