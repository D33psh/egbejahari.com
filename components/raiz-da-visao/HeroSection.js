"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-stone-950">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{ backgroundImage: "url('/images/raiz_hero_bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-950/80 to-stone-950" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <Image
          src="/image.png"
          alt="Raiz da Visão"
          width={320 * 1}
          height={320 * 1}
          className="text-white rounded-full m-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-amber-600/90 tracking-[0.2em] text-sm md:text-base font-semibold uppercase mb-4"
        >
          Egbé Jàhári apresenta
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif font-bold text-stone-100 mb-6 tracking-wide drop-shadow-lg"
        >
          RAIZ DA VISÃO
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-24 h-[1px] bg-amber-700/50 mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl text-stone-300 font-light max-w-2xl leading-relaxed"
        >
          Um chamado ao despertar, à verdade e à reconexão com a essência.
        </motion.p>
      </div>
    </section>
  );
}
