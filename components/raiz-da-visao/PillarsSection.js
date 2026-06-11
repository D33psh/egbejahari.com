"use client";

import { motion } from "framer-motion";
import { CircleDot, Moon } from "lucide-react";

export default function PillarsSection() {
  return (
    <section className="py-24 px-4 bg-stone-950 text-stone-300">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold text-amber-600/90 tracking-[0.2em] uppercase mb-4">Os Pilares</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-stone-100">Círculos de Desenvolvimento</h3>
          <p className="mt-6 text-lg text-stone-400 max-w-2xl mx-auto font-light leading-relaxed">
            Dentro da Raiz da Visão, dois círculos sustentam o desenvolvimento espiritual coletivo.
            Não se trata apenas de um projeto — é um portal. Um espaço onde o indivíduo é convidado a sair da superfície e tocar sua própria raiz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 relative">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none hidden md:flex">
            <div className="w-[1px] h-full bg-stone-800/50" />
          </div>

          {/* ALAGBARA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center p-8 bg-stone-900/20 rounded-2xl border border-stone-800/30 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
          >
            <div className="w-16 h-16 rounded-full bg-stone-900 border border-amber-900/50 flex items-center justify-center mb-6 shadow-inner">
              <CircleDot className="w-8 h-8 text-amber-600" />
            </div>
            <h4 className="text-2xl font-serif text-stone-100 mb-2">ÀLÀGBÁRA</h4>
            <span className="text-sm uppercase tracking-widest text-amber-700 font-medium mb-6">O Sagrado Masculino</span>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
              A força que constrói, protege e direciona. Um espaço de irmandade onde homens se encontram para despertar sua potência, curar feridas e assumir responsabilidade sobre quem são e sobre o que constroem no mundo.
            </p>
            <p className="text-amber-500/80 italic font-serif">
              "Aqui, não há espaço para fuga. Há presença, verdade e transformação."
            </p>
          </motion.div>

          {/* ASEAGBA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 bg-stone-900/20 rounded-2xl border border-stone-800/30 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
          >
            <div className="w-16 h-16 rounded-full bg-stone-900 border border-blue-900/50 flex items-center justify-center mb-6 shadow-inner">
              <Moon className="w-8 h-8 text-blue-500" />
            </div>
            <h4 className="text-2xl font-serif text-stone-100 mb-2">ÀṢẸÀGBÀ</h4>
            <span className="text-sm uppercase tracking-widest text-blue-700 font-medium mb-6">O Sagrado Feminino</span>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
              A força que gera, nutre e transforma. Um círculo de reconexão com o poder feminino ancestral, com os ciclos da vida, com a intuição e com a sabedoria do sentir.
            </p>
            <p className="text-blue-400/80 italic font-serif">
              "Um espaço seguro para florescer, mas também para se fortalecer."
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
