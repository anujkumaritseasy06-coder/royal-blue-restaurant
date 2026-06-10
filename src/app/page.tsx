import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBuilding from "@/components/TrustBuilding";
import About from "@/components/About";
import Dining from "@/components/Dining";
import Banquets from "@/components/Banquets";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-gold selection:text-royal-blue">
      <Header />
      <Hero />
      <TrustBuilding />
      <About />
      <Dining />
      <Banquets />
      <Gallery />
      <Reviews />
      <Contact />
      <FAQ />
      <Footer />
      <FloatingContact />
    </main>
  );
}
