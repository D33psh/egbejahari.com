import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Flame,
  ArrowRight,
  Gem,
  ShoppingBag,
  Coins,
} from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      icon: Gem,
      title: "Grupo Diamante",
      subtitle: "Comunidade Exclusiva",
      description:
        "O Grupo Diamond é uma comunidade exclusiva criada por Bàbá Jàhári ti Ològúnèdé, onde o conhecimento, a tradição e a força do axé se encontram para transformar vidas.",
      color: "from-purple-600 to-violet-700",
      bgColor: "from-purple-50 to-violet-50",
      highlights: [
        "Reuniões exclusivas com Bàbá Jàhári sobre diversos temas espirituais e de desenvolvimento pessoal.",
        "Mais de 3 anos de conteúdos e estudos já realizados, disponíveis para consulta a qualquer momento.",
        "Descontos incríveis em todos os e-books lançados pelo Ilê Àṣẹ Egbé Jàhári.",
        "Acesso vitalício: entre uma vez e permaneça para sempre.",
      ],
      link: "/diamond",
    },
    {
      icon: Coins,
      title: "O Ajê",
      subtitle: "O Caminho para a Prosperidade",
      description:
        "Quebre as amarras que te limitam e descubra as virtudes do caráter que são essenciais para atrair a prosperidade. A chave para a prosperidade está em suas mãos, e neste ebook você irá aprender como usá-la da melhor forma possível.",
      color: "from-yellow-600 to-amber-700",
      bgColor: "from-yellow-50 to-amber-50",
      highlights: [
        "Prosperidade Material e Espiritual",
        "Proteção e Quebra de Bloqueios",
        "Equilíbrio Interno e Caráter Virtuoso",
        "Caminhos Práticos do Culto",
      ],
      link: "/aje",
    },
    {
      icon: Flame,
      title: "Terreiro 197",
      subtitle: "Culto aos Guardiões",
      description:
        "Servir a Exu e Pombogira é reconhecer neles a presença dos espíritos ancestrais, aqueles que um dia caminharam entre os vivos e hoje habitam o mistério do invisível. São mortos que conhecemos, espíritos que tiveram vida, história, escolhas e caminhos, e que através de nossa devoção voltam a pulsar com força e presença.",
      color: "from-red-600 to-rose-700",
      bgColor: "from-red-50 to-rose-50",
      highlights: [
        "Culto aos Ancestrais",
        "Giras e Festividades",
        "Oferendas e rituais ancestrais",
        "Firmeza espiritual e devoção",
      ],
      link: "/terreiro197",
    },
    {
      icon: ShoppingBag,
      title: "Wurá Shop",
      subtitle: "Produtos Sagrados",
      description:
        "Loja especializada em produtos artesanais, litúrgicos e itens sagrados para sua prática espiritual e conexão com a ancestralidade. Feitos com amor e respeito às tradições.",
      color: "from-amber-600 to-orange-700",
      bgColor: "from-amber-50 to-orange-50",
      highlights: [
        "Produtos artesanais exclusivos",
        "Itens litúrgicos tradicionais",
        "Guias, patuás e amuletos",
      ],
      link: "https://www.instagram.com/wurashop.oficial/",
    },
    {
      icon: Shield,
      title: "Àlàgbára",
      subtitle: "O Sagrado Masculino",
      description:
        "O Àlàgbára nasce como um espaço de encontro, autoconhecimento e reconexão com a essência do masculino sagrado. Nossa missão é resgatar valores ancestrais, cultivar a presença consciente e fortalecer homens que buscam equilíbrio entre corpo, mente e espírito.",
      color: "from-blue-600 to-indigo-700",
      bgColor: "from-blue-50 to-indigo-50",
      highlights: [
        "Grupo exclusivo no WhatsApp",
        "Encontros online: meditações e rodas de conversa",
        "Material complementar: apostilas, vídeos e práticas",
        "Rede de apoio e escuta ativa entre irmãos",
      ],
      link: "/alagbara",
    },
    {
      icon: Heart,
      title: "Centro Espiritual",
      subtitle: "Caboclo Flecha Dourada",
      description:
        "Um espaço sagrado onde o axé dos Caboclos, Pretos Velhos, Pombogiras, Exus e demais linhas de trabalho se manifesta para orientar, curar e abrir caminhos.",
      color: "from-green-600 to-emerald-700",
      bgColor: "from-green-50 to-emerald-50",
      highlights: [
        "Atendimentos espirituais gratuitos",
        "Giras e rituais de Umbanda em datas definidas",
        "Passes de limpeza e orientação",
        "Aberto a todos, independente de religião",
      ],
      link: "/umbanda",
    },
  ];

  return (
    <section
      id="projetos"
      className="py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-stone-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-amber-50 rounded-full mb-6">
            <span className="text-amber-700 font-semibold text-sm">
              Nossos Projetos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Caminhos de Transformação
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Conheça nossos seis pilares de atuação, cada um dedicado a uma
            dimensão específica da jornada espiritual e comunitária.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="overflow-hidden hover:shadow-2xl transition-all duration-500 h-full group border-stone-200 border border-1px rounded-md">
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <div className="p-0">
                  <div className={`bg-gradient-to-br ${project.bgColor} p-6`}>
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-stone-600 mb-3">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="p-6">
                    <p className="text-stone-700 leading-relaxed mb-4 text-sm">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} mt-1.5 flex-shrink-0`}
                          />
                          <span className="text-xs text-stone-600">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      className={`w-full border-2 hover:bg-gradient-to-r ${project.color} hover:text-white transition-all duration-300 flex flex-row items-center justify-center py-2`}
                      onClick={() => window.open(project.link, "_self")}
                    >
                      Saiba Mais
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
