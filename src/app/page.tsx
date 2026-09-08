import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Marquee from "@/components/Marquee";
import Treninzi from "@/components/Treninzi";
import Zasto from "@/components/Zasto";
import Manifest from "@/components/Manifest";
import Galerija from "@/components/Galerija";
import Cenovnik from "@/components/Cenovnik";
import Prijava from "@/components/Prijava";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Marquee />
        <Treninzi />
        <Zasto />
        <Manifest />
        <Galerija />
        <Cenovnik />
        <Prijava />
        <Kontakt />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
