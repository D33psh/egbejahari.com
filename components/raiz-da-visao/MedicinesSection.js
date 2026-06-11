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
            A Medicina da Floresta é um instrumento sagrado de conexão com a natureza, com a ancestralidade e com a essência divina presente em cada ser. No Projeto Raiz da Visão, compreendemos que a verdadeira cura acontece quando corpo, mente, emoções e espírito caminham em harmonia.<br /><br />

            Nossos rituais são realizados com respeito às tradições das medicinas ancestrais e têm como propósito proporcionar um espaço seguro de autoconhecimento, reflexão e reconexão. Através da força da floresta, somos convidados a olhar para dentro de nós mesmos, compreender nossos processos, reconhecer nossas sombras e fortalecer nossa luz.<br /><br />

            Cada participante é chamado a viver sua própria experiência, respeitando seu tempo, sua história e seu caminho. Não buscamos respostas prontas, mas a oportunidade de desenvolver uma escuta mais profunda de si mesmo, da natureza e do sagrado.<br /><br />

            Durante o ritual, o silêncio, os cantos, as rezas, os elementos naturais e a força da coletividade criam um campo propício para o aprendizado, a cura e a expansão da consciência. A medicina não faz o trabalho por nós; ela nos auxilia a enxergar com mais clareza aquilo que precisa ser transformado em nossa vida.<br /><br />

          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
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
