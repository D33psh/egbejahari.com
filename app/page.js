"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { MapPin, Phone, Instagram, Sparkles, Menu, X } from "lucide-react";
import Image from "next/image";

import HeroSection from "../components/HeroSection.js";
import AboutSection from "../components/AboutSection.js";
import ProjectsSection from "../components/ProjectsSection.js";
import LocationSection from "../components/LocationSection.js";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Localização", href: "#localizacao" },
  ];

  const navItemsMobile = [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Localização", href: "#localizacao" },
    { label: "Terreiro 197", href: "/terreiro197" },
    { label: "Alagbará", href: "/alagbara" },
    { label: "Áseagbá", href: "/aseagba" },
    { label: "Grupo Diamond", href: "/diamond" },
    { label: "Umbanda", href: "/umbanda" },
    { label: "Wurá Shop", href: "http://instagram.com/wurashopoficial" },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);

    window.open(href, "_self");
    // setTimeout(() => {
    //   const element = document.querySelector(href);
    //   if (element) {
    //     element.scrollIntoView({ behavior: "smooth" });
    //   }
    // }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-white/90 backdrop-blur-md shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logo-ile.jpeg"
                  alt="Ile Ase Egbe Jahari"
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h2>Ilê Àṣẹ Egbé Jàhári</h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden md:flex items-center gap-6 lg:gap-8"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-stone-700 hover:text-amber-700 transition-colors font-medium text-sm lg:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2"
            >
              <button
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg text-xs sm:text-sm py-2 px-3 sm:px-4 hidden sm:flex sm:items-center sm:justify-center"
                onClick={() =>
                  window.open("https://wa.me/5511959659758", "_blank")
                }
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                WhatsApp
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </motion.div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4 bg-white rounded-xl shadow-lg border border-stone-200"
              >
                <div className="flex flex-col gap-2 p-2">
                  {navItemsMobile.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-stone-700 hover:text-amber-700 hover:bg-amber-50 transition-colors font-medium py-3 px-4 rounded-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                  <button
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg w-full mt-2 flex items-center justify-center py-2"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.open("https://wa.me/5511959659758", "_blank");
                    }}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <LocationSection />

      <footer className="bg-stone-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/logo-ile.jpeg"
                    alt="Ile Ase Egbe Jahari"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold">
                    Ilê Àṣẹ Egbé Jàhári
                  </h3>
                </div>
              </div>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                Centro cultural e Religioso
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                Contato
              </h4>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-stone-400">
                <p>contato@egbejahari.com</p>
                <p>(11) 95965-9758</p>
                <p>São Paulo, Brasil</p>
              </div>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                Redes Sociais
              </h4>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://www.instagram.com/egbejahari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-stone-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://wa.me/5511959659758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-stone-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-stone-500 text-xs sm:text-sm">
            <p>© 2025 Ilê Àṣẹ Egbé Jàhári. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
