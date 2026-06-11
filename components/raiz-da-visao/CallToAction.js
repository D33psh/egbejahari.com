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
          <h2 className="text-sm font-semibold text-amber-700 tracking-[0.3em] uppercase mb-6">Nosso Trabalho</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-stone-100 mb-8 leading-tight">
            Nosso compromisso é oferecer um espaço de crescimento, aprendizado e reconexão, onde cada participante possa fortalecer suas raízes, ampliar sua visão e caminhar com mais consciência em sua jornada.
          </h3>
          <p className="text-xl text-stone-400 font-light mb-16 italic">
            Os rituais do Raiz da Visão são conduzidos com seriedade, respeito e responsabilidade. Utilizamos elementos tradicionais como ervas, defumações, cantos, rezas, harmonização energética e práticas de acolhimento, sempre buscando criar um ambiente seguro e propício para a experiência espiritual.<br /><br />
          </p>

          <p className="text-amber-600/90 font-serif text-xl italic tracking-wide">
            "Fortalecendo as raízes, expandindo a consciência e honrando os ensinamentos da floresta. 🌿✨"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
