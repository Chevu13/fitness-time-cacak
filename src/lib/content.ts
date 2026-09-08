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
 *  - tačna adresa, broj telefona, e-mail, radno vreme teretane, cene, imena trenera
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
  { label: "Treninzi", href: "#treninzi" },
  { label: "O nama", href: "#o-nama" },
  { label: "Galerija", href: "#galerija" },
  { label: "Cenovnik", href: "#cenovnik" },
  { label: "Kontakt", href: "#kontakt" },
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
    naziv: "Grupni treninzi za žene",
    kratko: "Energija grupe",
    opis: "Treninzi u ženskoj grupi, uz vođenje trenera od prvog do poslednjeg ponavljanja. Dolaziš u zakazanom terminu i pratiš plan — ne moraš ništa da smišljaš sama.",
    detalji: ["PON · SRE · PET — 19:00 i 20:00", "UTO · ČET · SUB — 09:00"],
    slika: "/photos/g-grupni-1.jpg",
    alt: "Grupni trening za žene u teretani Fitness Time",
  },
  {
    id: "individualni",
    broj: "02",
    naziv: "Individualni trening",
    kratko: "Ti i trener",
    opis: "Trening jedan na jedan, prilagođen tvojim ciljevima, nivou i potrebama. Trener je pored tebe cele sesije — ispravlja tehniku i vodi te kroz plan.",
    slika: "/photos/g-indi-1.jpg",
    alt: "Trener vodi individualni trening u teretani Fitness Time",
  },
  {
    id: "poluindividualni",
    broj: "03",
    naziv: "Poluindividualni trening",
    kratko: "U manjoj grupi",
    opis: "Trening uz trenera, u manjoj grupi. Zadržavaš pažnju i vođenje kao na individualnom, uz atmosferu zajedničkog treninga.",
    slika: "/photos/g-indi-2.jpg",
    alt: "Poluindividualni trening uz trenera u teretani Fitness Time",
  },
  {
    id: "teretana",
    broj: "04",
    naziv: "Teretana — Open Gym",
    kratko: "Tvoj plan, tvoj tempo",
    opis: "Treniraj po svom planu, kada ti odgovara. Oprema, sprave i slobodni tegovi — bez rasporeda i bez čekanja na termin.",
    slika: "/photos/g-grupni-2.jpg",
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

/** Cene se ne prikazuju dok ih klijent ne pošalje — svesno „na upit“. */
export const CENOVNIK = [
  {
    naziv: "Grupni treninzi za žene",
    opis: "Termini u toku nedelje, ujutru i uveče.",
    stavke: [
      "Vođen trening u grupi",
      "Fiksni raspored",
      "Pogodno za početnice",
    ],
  },
  {
    naziv: "Individualni trening",
    opis: "Rad jedan na jedan sa trenerom.",
    stavke: ["Plan po tvom cilju", "Rad na tehnici", "Termin po dogovoru"],
    istaknuto: true,
  },
  {
    naziv: "Poluindividualni trening",
    opis: "Trening uz trenera, u manjoj grupi.",
    stavke: ["Vođenje trenera", "Manja grupa", "Termin po dogovoru"],
  },
  {
    naziv: "Teretana — Open Gym",
    opis: "Samostalan trening po sopstvenom planu.",
    stavke: ["Slobodan pristup opremi", "Bez zakazivanja", "Tvoj tempo"],
  },
];
