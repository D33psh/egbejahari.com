"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  Clock,
  Sparkles,
  Users,
  Instagram,
  Phone,
  Home,
  Leaf
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

export default function Umbanda() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans overflow-hidden">
      <Navbar pageTitle="Umbanda" />

      <main className="flex-grow pt-[72px]">
        {/* ── HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-stone-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/40 via-stone-900 to-stone-950" />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="mb-8 relative"
            >
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl scale-150" />
              <Image
                src="/logo-umbanda.png"
                alt="Centro Espiritual Caboclo Flecha Dourada"
                width={240}
                height={240}
                className="rounded-full relative z-10 ring-4 ring-green-500/30 shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-block px-4 py-2 border border-green-400/30 rounded-full mb-6 bg-green-900/30 backdrop-blur-sm">
                <span className="text-green-300 font-semibold text-sm tracking-widest uppercase flex items-center gap-2">
                  <Leaf className="w-4 h-4" />
                  Ilê Àṣẹ Egbé Jàhári
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
            >
              Centro Espiritual <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                Caboclo Flecha Dourada
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-stone-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Um espaço sagrado onde o axé dos Caboclos, Pretos Velhos, Pombogiras e Exus se manifesta para orientar, curar e abrir caminhos.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center mt-4"
            >
              <button
                onClick={() => document.getElementById("sobre").scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                Conheça Nossa Casa
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* ── SOBRE / INTEGRAÇÃO ── */}
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
                <div className="inline-block px-4 py-2 bg-green-50 rounded-full mb-6">
                  <span className="text-green-700 font-semibold text-sm">Integração</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                  A Força da <span className="text-green-600">Umbanda</span> no Ilê
                </h2>
                <div className="space-y-6">
                  <p className="text-stone-600 text-lg leading-relaxed">
                    O Centro Espiritual Caboclo Flecha Dourada é parte viva do nosso Ilê, dedicado às tradições da Umbanda.
                  </p>
                  <p className="text-stone-600 text-lg leading-relaxed">
                    Realizamos giras e rituais em datas definidas, sempre com um culto conduzido com respeito à ancestralidade, à espiritualidade brasileira e ao compromisso inabalável com a caridade.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative bg-gradient-to-br from-green-50 to-stone-50 p-8 sm:p-12 rounded-[2.5rem] border border-green-100 shadow-xl"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-200 rounded-full blur-3xl opacity-50" />
                <h3 className="text-2xl font-bold text-stone-900 mb-8 flex items-center gap-3">
                  <HeartHandshake className="w-8 h-8 text-green-600" />
                  Atendimento Gratuito
                </h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-stone-900 text-lg">Dias Específicos</h4>
                      <p className="text-stone-600">Os atendimentos espirituais são realizados em datas agendadas, sempre de forma gratuita e fraterna.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Sparkles className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-stone-900 text-lg">Apoio Espiritual</h4>
                      <p className="text-stone-600">Entidades oferecem aconselhamento, passes de limpeza, orientação e fortalecimento aos consulentes.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CABOCLO FLECHA DOURADA ── */}
        <section className="py-20 sm:py-28 bg-stone-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/30 via-stone-900 to-stone-950" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 sm:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center order-2 md:order-1"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/20 rounded-2xl blur-3xl scale-105" />
                  <Image
                    src="/Rosarios.jpg"
                    alt="Rosários e Guias"
                    width={400}
                    height={650}
                    className="rounded-2xl relative z-10 shadow-2xl object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  O Patrono Espiritual
                </h2>
                <div className="w-20 h-1 bg-green-500 mb-8 rounded-full" />
                
                <div className="space-y-6">
                  <p className="text-stone-300 text-lg sm:text-xl leading-relaxed italic">
                    Patrono espiritual deste espaço, o Caboclo Flecha Dourada representa a força da mata, a sabedoria dos ancestrais indígenas e o direcionamento certo para os filhos de fé.
                  </p>
                  <p className="text-green-400 text-xl sm:text-2xl font-semibold mt-4">
                    É guia de proteção, coragem e luz.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── COMPROMISSO E PARTICIPAÇÃO ── */}
        <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 sm:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <HeartHandshake className="w-6 h-6 text-green-700" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">
                      Compromisso com a Comunidade
                    </h3>
                  </div>
                  <p className="text-stone-600 text-lg leading-relaxed pl-16">
                    O Centro busca acolher a todos que chegam em busca de apoio espiritual. Mantemos um trabalho pautado no amor, na disciplina espiritual e na força dos Orixás e entidades da Umbanda.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-700" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">
                      Participação Aberta
                    </h3>
                  </div>
                  <p className="text-stone-600 text-lg leading-relaxed pl-16">
                    As giras e atendimentos são abertos ao público. Todos são bem-vindos, independentemente de sua religião, crença ou trajetória espiritual.
                  </p>
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
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/10 rounded-[2rem] blur-2xl scale-105" />
                  <Image
                    src="/FiosDeConta.jpg"
                    alt="Fios de Conta"
                    width={400}
                    height={650}
                    className="rounded-[2rem] relative z-10 shadow-xl object-cover"
                  />
                </div>
              </motion.div>
            </div>
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
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-green-700" />
                      </div>
                      <span className="text-lg font-medium">(11) 93032-9758</span>
                    </div>
                    <div className="flex items-center gap-4 text-stone-700">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Home className="w-5 h-5 text-green-700" />
                      </div>
                      <span className="text-lg font-medium">contato@egbejahari.com</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="https://www.instagram.com/egbejahari?igsh=dGlia3pla3VmbDZ0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-full font-medium transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </Link>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 border-2 border-stone-200 hover:border-green-500 hover:text-green-700 text-stone-700 px-6 py-3 rounded-full font-medium transition-colors"
                    >
                      <Home className="w-5 h-5" />
                      Voltar ao Início
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
                    src="/BabaJahari_6.png"
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
