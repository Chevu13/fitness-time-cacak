import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/content";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitness-time-cacak.vercel.app"),
  title: {
    default: "Fitness Time Čačak — teretana, grupni i personalni treninzi",
    template: "%s | Fitness Time Čačak",
  },
  description:
    "Fitness Time je teretana u Čačku: grupni treninzi za žene, individualni i poluindividualni treninzi uz trenera, i open gym za trening po sopstvenom planu. Prijavi se za probni trening.",
  keywords: [
    "Fitness Time Čačak",
    "teretana Čačak",
    "fitness Čačak",
    "grupni treninzi Čačak",
    "personalni trening Čačak",
    "treninzi za žene Čačak",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "Fitness Time",
    title: "Fitness Time Čačak — treniraj uz podršku trenera",
    description:
      "Grupni treninzi za žene, individualni i poluindividualni treninzi, i open gym. Tvoje vreme. Tvoj cilj. Tvoja snaga.",
    images: [
      {
        url: "/photos/hero.jpg",
        width: 1320,
        height: 742,
        alt: "Fitness Time Čačak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitness Time Čačak",
    description: "Grupni, individualni i poluindividualni treninzi u Čačku.",
    images: ["/photos/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: BUSINESS.name,
  description:
    "Teretana u Čačku — grupni treninzi za žene, individualni i poluindividualni treninzi, open gym.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Čačak",
    addressCountry: "RS",
  },
  areaServed: "Čačak",
  sameAs: [BUSINESS.instagramUrl],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr-Latn-RS" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
