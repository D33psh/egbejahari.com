"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react"
import { motion } from "framer-motion";
import {
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Instagram,
  Home,
  ShieldAlert,
  Coins
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

export default function Aje() {
  const conteudos = [
    "A dona da morada da Riqueza",
    "Orunmila e Ajê",
    "Tenha uma Mente Próspera",
    "Se cerque de prosperidade",
    "Quebre as Amarras",
    "Ajê e a Organização",
    "As Virtudes do Caráter",
    "Ajê e Seu lar",
    "A chave para a Prosperidade",
    "Proteção contra inveja financeira",
    "O caminho para a Riqueza",
    "Procedimentos do Culto",
    "Como Cultuar",
    "Formas de Culto",
    "Ajê e Orí",
    "Assentamento de Ajê",
    "Adimú Ajê",
    "Sacrifícios",
    "Ewê Ajê",
    "Èsú Awure",
    "Generosidade, Honestidade e Sucesso",
    "Ofó, Àdúrà, Oriki, Orin, Ebó",
    "10 regras para adquirir Prosperidade"
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans overflow-hidden">
      <Navbar pageTitle="O Ajê" />

      <main className="flex-grow pt-[72px]">
        {/* ── HERO ── */}
        <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-stone-950 pt-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/40 via-stone-900 to-stone-950" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left pt-10 lg:pt-0"
            >
              <div className="inline-block px-4 py-2 border border-yellow-400/30 rounded-full mb-6 bg-yellow-900/30 backdrop-blur-sm">
                <span className="text-yellow-300 font-semibold text-sm tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2">
                  <Coins className="w-4 h-4" />
                  E-book Exclusivo
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                O Caminho para a <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                  Prosperidade
                </span>
              </h1>

              <p className="text-stone-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Quebre as amarras que te limitam e descubra as virtudes do caráter que são essenciais para atrair a prosperidade. A chave para a prosperidade está em suas mãos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="https://pay.kiwify.com.br/XGEQOXa"
                  className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-stone-900 font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 flex items-center justify-center"
                >
                  Garantir meu E-book
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={() => document.getElementById("conteudo").scrollIntoView({ behavior: "smooth" })}
                  className="border-2 border-stone-600 text-stone-300 hover:text-white hover:border-stone-400 px-8 py-4 text-lg rounded-full transition-all duration-300 flex items-center justify-center"
                >
                  Ver Conteúdo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end relative"
            >
              <div className="absolute inset-0 bg-yellow-500/20 rounded-[3rem] blur-3xl scale-90" />
              <Image
                src="/aje-home.png"
                alt="E-book Ajê"
                width={565 / 1.2}
                height={799 / 1.2}
                className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </section>

        {/* ── SOBRE O E-BOOK ── */}
        <section className="py-20 bg-stone-50 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
            >
              <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-stone-800 leading-relaxed italic">
                "Neste ebook você irá aprender como usá-la da melhor forma possível. A chave para a prosperidade está em suas mãos."
              </h2>
            </motion.div>
          </div>
        </section>

        {/* ── CONTEÚDO ── */}
        <section id="conteudo" className="py-24 bg-white relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-6">
                <span className="text-amber-800 font-semibold text-sm">O que você vai aprender</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
                Conteúdo do E-book
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Um guia completo contendo ensinamentos profundos, fundamentos de culto e práticas para atrair e manter a riqueza.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {conteudos.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
                  className="flex items-start gap-4 p-5 bg-stone-50 border border-stone-100 rounded-2xl hover:border-amber-300 hover:bg-amber-50/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="mt-1 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="text-stone-700 font-medium pt-1.5">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OFERTA ── */}
        <section className="py-24 bg-stone-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/alagbara-background.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-900/90 to-stone-950" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="bg-stone-800/50 backdrop-blur-md border border-stone-700 rounded-[3rem] p-8 sm:p-16 shadow-2xl relative"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold px-6 py-2 rounded-full text-sm tracking-wide shadow-lg">
                OFERTA POR TEMPO LIMITADO
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8">
                Desperte sua Mente Próspera
              </h2>

              <div className="mb-10 flex flex-col items-center">
                <span className="text-stone-400 line-through text-xl mb-2">De R$ 457,00</span>
                <span className="text-stone-300 text-lg mb-2">Por apenas</span>
                <div className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mb-4">
                  R$ 137,00
                </div>
                <span className="text-xl text-stone-300">Ou em até <strong className="text-white">6x de R$ 25,70</strong></span>
              </div>

              <Link
                href="https://pay.kiwify.com.br/XGEQOXa"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-stone-900 font-bold text-xl px-12 py-5 rounded-full shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:shadow-[0_0_60px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105"
              >
                Comprar Agora
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── CONTATO ── */}
        <section className="py-20 bg-stone-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-xl border border-stone-200">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-8">
                    Fale conosco
                  </h2>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-4 text-stone-700">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-amber-700" />
                      </div>
                      <span className="text-lg font-medium">(11) 93032-9758</span>
                    </div>
                    <div className="flex items-center gap-4 text-stone-700">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Home className="w-5 h-5 text-amber-700" />
                      </div>
                      <span className="text-lg font-medium">Rua Maritaca, 197, Cidade Popular</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="http://instagram.com/egbejahari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-full font-medium transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </Link>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 border-2 border-stone-200 hover:border-amber-500 hover:text-amber-700 text-stone-700 px-6 py-3 rounded-full font-medium transition-colors"
                    >
                      <Home className="w-5 h-5" />
                      egbejahari.com.br
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex justify-center"
                >
                  <Image
                    src="/BabaJahari_7.jpg"
                    alt="Babá Jahari"
                    width={400}
                    height={400}
                    className="rounded-[2rem] object-cover w-full max-w-[400px] shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
