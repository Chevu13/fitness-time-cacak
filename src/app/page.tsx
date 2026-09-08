import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Intro from "@/components/Intro";
import Treninzi from "@/components/Treninzi";
import Manifest from "@/components/Manifest";
import Zasto from "@/components/Zasto";
import Tim from "@/components/Tim";
import Galerija from "@/components/Galerija";
import Marquee from "@/components/Marquee";
import Cenovnik from "@/components/Cenovnik";
import Iskustva from "@/components/Iskustva";
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
        <TrustBar />
        <Intro />
        <Treninzi />
        <Manifest />
        <Zasto />
        <Tim />
        <Galerija />
        <Marquee />
        <Cenovnik />
        <Iskustva />
        <Prijava />
        <Kontakt />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
