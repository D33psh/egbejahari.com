"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Lock,
  Users,
  Video,
  Star,
  ArrowDown,
  ArrowRight,
  ShieldCheck,
  Gift
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Diamond() {
  const benefits = [
    {
      icon: BookOpen,
      title: "E-books Exclusivos",
      description: "Apostilas digitais, materiais práticos e didáticos para consulta, rezas, cânticos e rituais. Atualizações constantes com novos lançamentos.",
      color: "from-purple-600 to-fuchsia-700",
      bgColor: "from-purple-50 to-fuchsia-50",
    },
    {
      icon: Video,
      title: "Reuniões Secretas",
      description: "Conteúdos profundos, gravados e disponibilizados apenas para os membros do grupo. Aprenda fundamentos que não estão abertos ao público.",
      color: "from-blue-600 to-indigo-700",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      icon: Users,
      title: "Encontros Reservados",
      description: "Encontros reservados apenas para membros, com aprofundamento em temas avançados. Espaço de troca, onde dúvidas são esclarecidas.",
      color: "from-amber-600 to-orange-700",
      bgColor: "from-amber-50 to-orange-50",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans overflow-hidden">
      <Navbar pageTitle="Grupo Diamond" />

      <main className="flex-grow pt-[72px]">
        {/* ── HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-stone-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-stone-900 to-stone-950" />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="mb-8 relative"
            >
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl scale-150" />
              <Image
                src="/GrupoDiamond.jpg"
                alt="Grupo Diamond"
                width={200}
                height={200}
                className="rounded-full relative z-10 ring-4 ring-purple-500/30 shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-block px-4 py-2 border border-purple-400/30 rounded-full mb-6 bg-purple-900/30 backdrop-blur-sm">
                <span className="text-purple-300 font-semibold text-sm tracking-widest uppercase flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Área de Membros Exclusiva
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
            >
              Seja Membro do <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                Grupo Diamond
              </span>
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center mt-8"
            >
              <button
                onClick={() => document.getElementById("sobre").scrollIntoView({ behavior: "smooth" })}
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 animate-bounce"
              >
                <ArrowDown className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* ── INTRODUÇÃO ── */}
        <section id="sobre" className="py-20 sm:py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 sm:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                  O melhor grupo para aprender sobre <span className="text-purple-600">Òrìṣà</span>
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-8">
                  O Grupo Diamond é uma comunidade exclusiva criada por Bàbá Jàhári ti Ològúnèdé, onde o conhecimento, a tradição e a força do axé se encontram para transformar vidas.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Lock className="w-4 h-4 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-lg">Acesso a Conteúdo Exclusivo</h4>
                      <p className="text-stone-600">Materiais produzidos especialmente para os membros, com aprofundamento nos fundamentos espirituais.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-lg">Estudos Avançados</h4>
                      <p className="text-stone-600">Conhecimentos e fundamentos que não estão disponíveis de forma aberta ao público geral.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative bg-gradient-to-br from-purple-50 to-stone-50 p-8 sm:p-12 rounded-3xl border border-purple-100"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200 rounded-full blur-3xl opacity-50" />
                <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-purple-600" />
                  Vantagens para Membros
                </h3>
                <ul className="space-y-4">
                  {[
                    "Mais de 3 anos de conteúdos já realizados.",
                    "Disponível para consulta a qualquer momento.",
                    "Comunidade engajada e respeitosa.",
                    "Acesso antecipado a novidades do Ilê.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CONTEÚDO ── */}
        <section className="py-20 sm:py-28 bg-stone-50 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-6 max-w-4xl mx-auto">
                Mais de 3 anos de conteúdo disponível no grupo e muitas surpresas!
              </h2>
              <div className="flex justify-center mb-8">
                <Image src="/t.png" alt="Telegram" width={60} height={60} className="hover:scale-110 transition-transform" />
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="bg-white rounded-2xl p-8 h-full border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-14 h-14 bg-gradient-to-br ${benefit.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                      <benefit.icon className={`w-7 h-7 text-purple-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">{benefit.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DESCONTOS ── */}
        <section className="py-20 bg-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-900/50 via-purple-900 to-stone-900" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
            >
              <Gift className="w-16 h-16 text-purple-300 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Descontos especiais em Lançamentos
              </h2>
              <p className="text-purple-100 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                Condições exclusivas em cursos, materiais, rituais e projetos ligados ao Ilê. Acesso antecipado a novidades e lançamentos.
              </p>
              
              <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:px-12">
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase">
                  Acesso Vitalício
                </span>
                <p className="text-purple-200 mt-2">Entre uma vez e permaneça para sempre.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-20 sm:py-32 bg-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="bg-stone-50 border border-stone-200 rounded-3xl p-8 sm:p-12 shadow-2xl"
            >
              <Image
                src="/GrupoDiamond.jpg"
                alt="Grupo Diamante"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-8 shadow-md"
              />
              
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-8">
                Faça parte agora
              </h2>

              <div className="mb-8">
                <div className="text-stone-500 mb-2">Investimento único</div>
                <div className="text-4xl sm:text-5xl font-extrabold text-stone-900 mb-2">
                  <span className="text-2xl text-stone-500 font-medium">3x de</span> R$ 53,53
                </div>
                <div className="text-stone-500 font-medium">
                  Ou R$ 150,00 à vista
                </div>
              </div>

              <Link
                href="https://pay.kiwify.com.br/jfMG2xa"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-6"
              >
                Comprar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <p className="text-stone-500 text-sm">
                E acesse já todo o conteúdo disponível.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
