"use client";

import { motion } from "framer-motion";

export default function MedicinesSection() {
  const medicines = [
    {
      name: "Rapé (Hapé)",
      description: "Medicina ancestral indígena utilizada para aterramento, limpeza energética e foco espiritual. Atua diretamente no campo mental e energético, trazendo clareza, presença e conexão com o agora.",
      color: "border-amber-900/40 hover:border-amber-700/60 "
    },
    {
      name: "Ayahuasca",
      description: "Uma medicina de expansão da consciência que conduz o indivíduo a um mergulho profundo em si mesmo. Revela, ensina, confronta e cura — sempre de acordo com o que cada pessoa está pronta para acessar.",
      quote: "Não é fuga. É encontro com a verdade.",
      color: "border-emerald-900/40 hover:border-emerald-700/60"
    },
    /*{
      name: "Sananga",
      description: "Colírio sagrado utilizado para limpeza espiritual e alinhamento da visão — não apenas física, mas também energética e intuitiva. Auxilia na remoção de cargas densas e fortalece a percepção.",
      color: "border-stone-700/40 hover:border-stone-500/60"
    }*/
  ];

  return (
    <section className="py-24 px-4 bg-stone-900 text-stone-300 relative overflow-hidden">
      {/* Background Image Element */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity"
        style={{ backgroundImage: "url('/images/raiz_medicines.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-emerald-700/90 tracking-[0.2em] uppercase mb-4">Expansão da Consciência</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-stone-100 mb-6">Medicinas da Floresta</h3>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto font-light leading-relaxed">
            A Raiz da Visão trabalha com medicinas sagradas que auxiliam no processo de limpeza, alinhamento e abertura espiritual.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {medicines.map((med, idx) => (
            <motion.div
              key={med.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`p-8 bg-stone-950/50 backdrop-blur-sm rounded-xl border ${med.color} transition-colors duration-500 flex flex-col h-full shadow-lg`}
            >
              <h4 className="text-2xl font-serif text-stone-100 mb-4 pb-4 border-b border-stone-800/50">
                {med.name}
              </h4>
              <p className="text-stone-400 font-light leading-relaxed flex-grow">
                {med.description}
              </p>
              {med.quote && (
                <p className="mt-6 text-emerald-500/80 italic font-serif text-sm">
                  "{med.quote}"
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
