"use client";

import { motion } from "framer-motion";

export default function ResponsabilitySection() {
  return (
    <section className="py-24 px-4 bg-stone-950 text-center flex flex-col items-center justify-center border-t border-stone-800/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-sm font-semibold text-amber-700 tracking-[0.3em] uppercase mb-6">A Cura Começa Pela Responsabilidade</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-stone-100 mb-8 leading-tight">
            A transformação verdadeira exige comprometimento. A Medicina da Floresta pode abrir caminhos, mas cabe a cada pessoa assumir a responsabilidade por suas escolhas, atitudes e mudanças.<br /><br />
          </h3>
          <p className="text-xl text-stone-400 font-light mb-16 italic">
            Por isso, convidamos cada participante a preparar-se para o ritual com sinceridade, respeito e intenção. Que os dias que antecedem a cerimônia sejam momentos de reflexão, oração e conexão interior.<br /><br />

            Quanto mais consciente for a sua entrega, mais profunda poderá ser a sua experiência.<br /><br />
          </p>

          <div className="w-24 h-[1px] bg-stone-800 mx-auto mb-16" />

          <h4 className="text-2xl font-serif text-stone-200 mb-6">Somos Parte da Grande Teia da Vida</h4>
          <p className="text-stone-400 font-light leading-relaxed mb-6">
            No Raiz da Visão acreditamos que todos os seres estão conectados. A floresta, as águas, os ventos, os ancestrais, os espíritos da natureza e os seres humanos fazem parte de um mesmo organismo vivo.<br /><br />

            Quando nos reunimos em círculo, fortalecemos essa conexão e recordamos algo essencial: ninguém caminha sozinho.<br /><br />

            A medicina nos ensina a ouvir, a respeitar, a agradecer e a viver com mais presença. Ela nos lembra que a simplicidade da natureza contém ensinamentos profundos sobre equilíbrio, amor, humildade e cooperação.<br /><br />
          </p>
          <p className="text-amber-600/90 font-serif text-xl italic tracking-wide">
            "A Raiz não chama quem está curioso. Chama quem está pronto."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
