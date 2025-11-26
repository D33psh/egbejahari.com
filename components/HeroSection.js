import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-block mb-4 sm:mb-6"
          >
            <div className="w-30 h-30 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <Image
                src="/logo-ile.jpeg"
                alt="Ile Ase Egbe Jahari"
                width={320 * 5}
                height={320 * 5}
                className="w-full h-auto text-white rounded-full"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-4 sm:mb-6 leading-tight px-4"
          >
            Ilê Àṣẹ Egbé Jàhári
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4"
          >
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-amber-600" />
            <p className="text-base sm:text-xl md:text-2xl text-amber-700 font-medium">
              Força, Consciência e Ancestralidade
            </p>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-amber-600" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-sm sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          >
            Uma família espiritual guiada pela ancestralidade, pela força dos
            Òrìṣà e pelo compromisso com o axé. Aqui, tradição e conhecimento se
            encontram para transformar vidas, unir caminhos e fortalecer
            destinos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 max-w-2xl mx-auto"
          >
            <button
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-xl w-full sm:w-auto flex flex-row items-center justify-center"
              onClick={() =>
                document
                  .getElementById("projetos")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Mais Sobre a Gente
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              className="border-2 border-amber-700 text-amber-700 hover:bg-amber-50 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
              onClick={() =>
                window.open("https://wa.me/5511959659758", "_blank")
              }
            >
              Entre em Contato
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-1 sm:bottom-10 left-1/2 transform -translate-x-1/2 block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-stone-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
