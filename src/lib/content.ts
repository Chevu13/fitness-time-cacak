/**
 * Sadržaj sajta na jednom mestu — lako se menja bez diranja komponenti.
 *
 * VERIFIKOVANO (Instagram @vreme.za.fitnes, zvanične objave):
 *  - naziv, logo, boje (crvena / crna / bela)
 *  - ponuda: grupni treninzi za žene, individualni i poluindividualni treninzi, teretana (open gym)
 *  - raspored grupnih treninga (PON/SRE/PET 19:00 i 20:00 · UTO/ČET/SUB 09:00)
 *  - poruke brenda: „Tvoje vreme. Tvoj cilj. Tvoja snaga.“, „Prijatan ambijent · Vrhunski rezultati“,
 *    „Rekreacija • Zdravlje • Energija“, „Individualni pristup = tvoji rezultati“
 *  - grad: Čačak (potvrdio vlasnik)
 *
 * NAMERNO IZOSTAVLJENO (nije verifikovano — dodati kada klijent pošalje):
 *  - tačna adresa, broj telefona, e-mail, radno vreme teretane, cene, imena trenera,
 *    ocene, broj članova i recenzije
 */

export const BUSINESS = {
  name: "Fitness Time",
  city: "Čačak",
  instagram: "vreme.za.fitnes",
  instagramUrl: "https://www.instagram.com/vreme.za.fitnes/",
  tagline: "Tvoje vreme. Tvoj cilj. Tvoja snaga.",
  claims: ["Rekreacija", "Zdravlje", "Energija"],
} as const;

export const NAV = [
  { label: "Početna", href: "#pocetna" },
  { label: "O nama", href: "#o-nama" },
  { label: "Treninzi", href: "#treninzi" },
  { label: "Galerija", href: "#galerija" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

/** Futer nosi i sekcije kojih nema u glavnoj navigaciji. */
export const NAV_FOOTER = [
  { label: "Početna", href: "#pocetna" },
  { label: "O nama", href: "#o-nama" },
  { label: "Treninzi", href: "#treninzi" },
  { label: "Galerija", href: "#galerija" },
  { label: "Cenovnik", href: "#cenovnik" },
  { label: "Probni trening", href: "#prijava" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

/** Kvalitativne poruke — bez izmišljenih brojki, ocena i broja članova. */
export const TRUST = [
  "Stručno vođenje",
  "Više vrsta treninga",
  "Individualni pristup",
  "Fitness Time Čačak",
] as const;

export type Trening = {
  id: string;
  broj: string;
  naziv: string;
  kratko: string;
  opis: string;
  detalji?: string[];
  slika: string;
  alt: string;
};

export const TRENINZI: Trening[] = [
  {
    id: "grupni",
    broj: "01",
    naziv: "Grupni trening",
    kratko: "Za žene",
    opis: "Treninzi u ženskoj grupi, uz vođenje trenera od prvog do poslednjeg ponavljanja.",
    detalji: ["PON · SRE · PET — 19:00 i 20:00", "UTO · ČET · SUB — 09:00"],
    slika: "/photos/g-grupni-1.jpg",
    alt: "Grupni trening za žene u teretani Fitness Time",
  },
  {
    id: "individualni",
    broj: "02",
    naziv: "Individualni trening",
    kratko: "Jedan na jedan",
    opis: "Trening prilagođen tvojim ciljevima, nivou i potrebama, uz trenera pored tebe cele sesije.",
    slika: "/photos/g-indi-1.jpg",
    alt: "Trener vodi individualni trening u teretani Fitness Time",
  },
  {
    id: "poluindividualni",
    broj: "03",
    naziv: "Poluindividualni trening",
    kratko: "U manjoj grupi",
    opis: "Vođenje i pažnja kao na individualnom treningu, uz atmosferu zajedničkog rada.",
    slika: "/photos/g-grupni-3.jpg",
    alt: "Poluindividualni trening uz trenera u teretani Fitness Time",
  },
  {
    id: "teretana",
    broj: "04",
    naziv: "Open Gym",
    kratko: "Tvoj plan, tvoj tempo",
    opis: "Treniraj po svom planu, kada ti odgovara — bez rasporeda i čekanja na termin.",
    slika: "/photos/g-indi-3.jpg",
    alt: "Teretana sa slobodnim tegovima u Fitness Time",
  },
];

export const RAZLOZI = [
  {
    naslov: "Individualni pristup",
    tekst:
      "Plan se pravi prema tvom cilju, nivou i potrebama — a ne prema tuđem programu sa interneta.",
  },
  {
    naslov: "Podrška tokom treninga",
    tekst:
      "Trener je tu i kada ne znaš kako se sprava koristi, i kada ti treba još jedno ponavljanje.",
  },
  {
    naslov: "Prijatan ambijent",
    tekst:
      "Mesto na kom se ljudi znaju i pozdrave. Bez nadmetanja i bez osećaja da si tu višak.",
  },
  {
    naslov: "Više načina da treniraš",
    tekst:
      "Grupno, individualno, poluindividualno ili sam po svom planu — biraš ono što ti odgovara.",
  },
];

/** Placeholder kartice — bez izmišljenih imena i biografija trenera. */
export const TIM_PREVIEW = [
  {
    uloga: "Vaš trener",
    tip: "Individualni trening",
    slika: "/photos/trener.jpg",
    alt: "Trener vodi vežbačicu kroz trening",
    pozicija: "object-[62%_45%]",
  },
  {
    uloga: "Vaš trener",
    tip: "Grupni trening",
    slika: "/photos/g-grupni-2.jpg",
    alt: "Trener nadgleda izvođenje vežbe",
    pozicija: "object-center",
  },
  {
    uloga: "Vaš tim",
    tip: "Poluindividualni trening",
    slika: "/photos/hero.jpg",
    alt: "Trening uz podršku trenera",
    pozicija: "object-[42%_50%]",
  },
] as const;

export const GALERIJA = [
  {
    src: "/photos/hero.jpg",
    alt: "Trening uz trenera u teretani Fitness Time",
  },
  {
    src: "/photos/g-grupni-1.jpg",
    alt: "Vežbanje na spravi u teretani Fitness Time",
  },
  { src: "/photos/g-indi-1.jpg", alt: "Trener asistira tokom vežbe" },
  { src: "/photos/g-grupni-3.jpg", alt: "Trening sa bučicama u grupi" },
  { src: "/photos/g-indi-2.jpg", alt: "Trening sa šipkom uz nadzor trenera" },
  { src: "/photos/trener.jpg", alt: "Trening sa bučicama uz pomoć trenera" },
  { src: "/photos/g-grupni-2.jpg", alt: "Trening u teretani Fitness Time" },
  { src: "/photos/g-indi-3.jpg", alt: "Vežbanje u teretani Fitness Time" },
] as const;

/** Cene se ne prikazuju dok ih klijent ne pošalje — kartice govore šta trening uključuje. */
export const CENOVNIK = [
  {
    naziv: "Grupni trening",
    opis: "Vođen trening u ženskoj grupi, po fiksnom rasporedu.",
    stavke: [
      "Vođenje trenera na svakom treningu",
      "Termini ujutru i uveče",
      "Pogodno za početnice",
    ],
  },
  {
    naziv: "Individualni trening",
    opis: "Rad jedan na jedan, u potpunosti prema tvom cilju.",
    stavke: [
      "Plan prema cilju i nivou",
      "Rad na tehnici i držanju",
      "Termin po dogovoru",
    ],
  },
  {
    naziv: "Poluindividualni trening",
    opis: "Trening uz trenera, u manjoj grupi.",
    stavke: [
      "Vođenje trenera tokom treninga",
      "Manja grupa",
      "Termin po dogovoru",
    ],
  },
  {
    naziv: "Open Gym",
    opis: "Samostalan trening po sopstvenom planu.",
    stavke: ["Slobodan pristup opremi", "Bez zakazivanja", "Tvoj tempo"],
  },
];

export const KORACI = [
  {
    broj: "01",
    naslov: "Ostavi kontakt",
    tekst: "Ime i broj telefona — traje manje od minuta.",
  },
  {
    broj: "02",
    naslov: "Dogovorite termin",
    tekst: "Javljamo se i biramo termin koji ti odgovara.",
  },
  {
    broj: "03",
    naslov: "Dođi na prvi trening",
    tekst: "Trener te vodi kroz trening od početka do kraja.",
  },
] as const;
