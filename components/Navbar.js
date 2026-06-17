"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ pageTitle }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemsMobile = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Localização", href: "/#localizacao" },
    { label: "Terreiro 197", href: "/terreiro197" },
    { label: "Alagbará", href: "/alagbara" },
    { label: "Áseagbá", href: "/aseagba" },
    { label: "Grupo Diamond", href: "/diamond" },
    { label: "Umbanda", href: "/umbanda" },
    { label: "Raiz da Visão", href: "/raizdavisao" },
    { label: "Wurá Shop", href: "https://wa.me/c/199879909486627" },
  ];

  const projects = [
    { label: "Terreiro 197", href: "/terreiro197" },
    { label: "Alagbará", href: "/alagbara" },
    { label: "Áseagbá", href: "/aseagba" },
    { label: "Grupo Diamond", href: "/diamond" },
    { label: "Umbanda", href: "/umbanda" },
    { label: "Raiz da Visão", href: "/raizdavisao" },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    setIsProjectsOpen(false);
    if (href.startsWith("http")) {
      window.open(href, "_blank");
    } else {
      window.open(href, "_self");
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-white/95 backdrop-blur-lg shadow-lg"
        : "bg-white/90 backdrop-blur-md shadow-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            >
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
                <h2 className="text-stone-900 font-bold hidden sm:block">
                  Ilê Àṣẹ Egbé Jàhári {pageTitle && <span className="text-amber-700 font-normal">| {pageTitle}</span>}
                </h2>
                <h2 className="text-stone-900 font-bold sm:hidden">
                  {pageTitle ? pageTitle : "Egbé Jàhári"}
                </h2>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            <a
              href="/#sobre"
              className="text-stone-700 hover:text-amber-700 transition-colors font-medium text-sm lg:text-base"
              onClick={(e) => { e.preventDefault(); handleNavClick("/#sobre"); }}
            >
              Sobre
            </a>

            {/* Projetos Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button className="flex items-center gap-1 text-stone-700 hover:text-amber-700 transition-colors font-medium text-sm lg:text-base py-2">
                Projetos <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {isProjectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-48 bg-white border border-stone-100 rounded-xl shadow-xl overflow-hidden py-2"
                  >
                    {projects.map((proj) => (
                      <a
                        key={proj.href}
                        href={proj.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(proj.href); }}
                        className="block px-4 py-2 text-sm text-stone-600 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                      >
                        {proj.label}
                      </a>
                    ))}
                    <div className="border-t border-stone-100 my-1"></div>
                    <a
                      href="https://wa.me/c/199879909486627"
                      onClick={(e) => { e.preventDefault(); handleNavClick("https://wa.me/c/199879909486627"); }}
                      className="block px-4 py-2 text-sm text-stone-600 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                    >
                      Wurá Shop
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="/#localizacao"
              className="text-stone-700 hover:text-amber-700 transition-colors font-medium text-sm lg:text-base"
              onClick={(e) => { e.preventDefault(); handleNavClick("/#localizacao"); }}
            >
              Localização
            </a>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2"
          >
            <button
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg text-xs sm:text-sm py-2 px-3 sm:px-4 hidden sm:flex sm:items-center sm:justify-center rounded-md transition-all"
              onClick={() =>
                window.open("https://wa.me/5511930329758", "_blank")
              }
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              WhatsApp
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-stone-900 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden"
            >
              <div className="flex flex-col gap-1 p-2">
                {navItemsMobile.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-stone-700 hover:text-amber-700 hover:bg-amber-50 transition-colors font-medium py-3 px-4 rounded-lg block"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg w-full mt-2 flex items-center justify-center py-3 rounded-md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.open("https://wa.me/5511930329758", "_blank");
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
  );
}
