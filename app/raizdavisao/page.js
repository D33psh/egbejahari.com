import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "../../components/raiz-da-visao/HeroSection";
import PillarsSection from "../../components/raiz-da-visao/PillarsSection";
import MedicinesSection from "../../components/raiz-da-visao/MedicinesSection";
import ResponsabilitySection from "../../components/raiz-da-visao/ResponsabilitySection";
import CallToAction from "../../components/raiz-da-visao/CallToAction";
import LocationSection from "../../components/LocationSection";

export const metadata = {
  title: "Raiz da Visão | Egbé Jàhári",
  description: "Um chamado ao despertar, à verdade e à reconexão com a essência. Projeto Raiz da Visão no Egbé Jàhári.",
};

export default function RaizDaVisaoPage() {
  return (
    <div className="min-h-screen bg-stone-950 font-sans selection:bg-amber-900/30 selection:text-amber-100 flex flex-col">
      <Navbar pageTitle="Raiz da Visão" />
      <main className="flex-grow pt-[72px]">
        <HeroSection />
        <MedicinesSection />
        <ResponsabilitySection />
        <CallToAction />
        <PillarsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
