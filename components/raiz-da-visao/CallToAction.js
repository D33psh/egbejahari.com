"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-24 px-4 bg-stone-950 text-center flex flex-col items-center justify-center border-t border-stone-800/30">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-sm font-semibold text-amber-700 tracking-[0.3em] uppercase mb-6">Propósito e Chamado</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-stone-100 mb-8 leading-tight">
            Despertar indivíduos para sua essência, fortalecer caminhos, e alinhar cada pessoa com seu destino.
          </h3>
          <p className="text-xl text-stone-400 font-light mb-16 italic">
            Aqui, espiritualidade não é teoria. É prática, disciplina e responsabilidade.
          </p>

          <div className="w-24 h-[1px] bg-stone-800 mx-auto mb-16" />

          <h4 className="text-2xl font-serif text-stone-200 mb-6">Um Chamado</h4>
          <p className="text-stone-400 font-light leading-relaxed mb-6">
            Se você sente, você já sabe.
          </p>
          <p className="text-amber-600/90 font-serif text-xl italic tracking-wide">
            "A Raiz não chama quem está curioso. Chama quem está pronto."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
