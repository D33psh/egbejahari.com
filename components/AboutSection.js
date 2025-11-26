import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Sparkles, Flame } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Ancestralidade",
      description: " Respeito e honra a quem veio antes de nós.",
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Caminhamos juntos, fortalecendo uns aos outros.",
    },
    {
      icon: Sparkles,
      title: "Responsabilidade",
      description: "Cuidamos do axé com seriedade e compromisso.",
    },
    {
      icon: Flame,
      title: "Conhecimento",
      description:
        "Estudo, prática e vivência como bases para evoluir espiritualmente.",
    },
  ];

  return (
    <section
      id="sobre"
      className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-amber-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-stone-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-50 rounded-full mb-4 sm:mb-6">
            <span className="text-amber-700 font-semibold text-xs sm:text-sm">
              Sobre Nós
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6 px-4">
            Nossa Missão
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed px-4">
            Manter viva a herança espiritual do Candomblé, ensinando e
            praticando com seriedade os fundamentos do culto aos Òrìṣà,
            promovendo a união, a força coletiva e o respeito à diversidade de
            caminhos que cada pessoa traz em sua jornada.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 bg-white border-stone-200 h-full border border-1px rounded-md">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 sm:mb-6">
                Quem Somos?
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-3 sm:mb-4">
                O Ilê Àṣẹ Egbé Jàhári é uma casa de axé dedicada ao culto aos
                Òrìṣà, guiada pela ancestralidade e pelo compromisso com a
                espiritualidade verdadeira. Nosso terreiro é um espaço de
                acolhimento, estudo, prática e devoção, onde cada pessoa
                encontra a oportunidade de caminhar em sintonia com o seu
                destino e fortalecer sua ligação com o sagrado.
              </p>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Sob a liderança de Bàbá Jàhári ti Ològúnèdé, sacerdote de
                Candomblé, o Ilê Àṣẹ Egbé Jàhári se firma como uma comunidade
                que valoriza a tradição, mas também compreende a importância do
                diálogo com os tempos atuais. Aqui, preservamos os rituais
                ancestrais e transmitimos o axé com responsabilidade, dedicação
                e amor.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
