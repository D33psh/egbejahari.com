"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Flame,
  ArrowRight,
  Shield,
  Key,
  Wind,
  Instagram,
  Phone,
  Home,
  MessageCircle
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

export default function Terreiro197() {
  return (
    <div className="min-h-screen bg-stone-900 flex flex-col font-sans overflow-hidden">
      <Navbar pageTitle="Terreiro 197" />

      <main className="flex-grow pt-[72px]">
        {/* ── HERO ── */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/30 via-stone-900 to-stone-950" />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="mb-8 relative"
            >
              <div className="absolute inset-0 bg-red-600/20 rounded-full blur-2xl scale-150" />
              <Image
                src="/logo-terreiro.jpg"
                alt="Terreiro 197"
                width={240}
                height={240}
                className="rounded-full relative z-10 ring-4 ring-red-500/30 shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-block px-4 py-2 border border-red-500/30 rounded-full mb-6 bg-red-900/30 backdrop-blur-sm">
                <span className="text-red-400 font-semibold text-sm tracking-widest uppercase flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  Culto aos Guardiões
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
            >
              Terreiro <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">197</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-stone-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              A morada sagrada dos Guardiões, onde Exu e Pombogira se fazem presentes com sua força viva e transformadora.
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
                className="bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                Conheça o Terreiro
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* ── SOBRE O CULTO ── */}
        <section id="sobre" className="py-20 sm:py-28 bg-stone-900 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 sm:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-2 border border-red-500/20 bg-red-900/20 rounded-full mb-6">
                  <span className="text-red-400 font-semibold text-sm">O Mistério e a Força</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  A morada sagrada dos <span className="text-red-500">Guardiões</span>
                </h2>

                <div className="space-y-6">
                  <p className="text-stone-300 text-lg leading-relaxed">
                    O Terreiro 197 é a morada sagrada dos Guardiões, onde Exu e Pombogira se fazem presentes com sua força viva e transformadora. Aqui, dentro do Ilê Àṣẹ Egbé Jàhári, cultivamos um culto dedicado àqueles que transitam entre os mundos, mensageiros e guardiões dos caminhos.
                  </p>
                  <p className="text-stone-300 text-lg leading-relaxed">
                    Nosso trabalho é firmado na ancestralidade dos mortos cujas histórias conhecemos e honramos. É através dessa ligação direta com os espíritos que caminharam a terra, que mantemos viva a chama do axé.
                  </p>
                  <p className="text-stone-300 text-lg leading-relaxed">
                    O culto é conduzido com disciplina, respeito e entrega, sempre com dedicação aos Guardiões que regem esta casa: Exu Marabô e Maria Mulambo.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid gap-6"
              >
                <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700 p-8 rounded-[2rem]">
                  <Shield className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Exu Marabô</h3>
                  <p className="text-stone-400">Senhor de sabedoria, movimento e firmeza. Comando masculino dos caminhos.</p>
                </div>

                <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700 p-8 rounded-[2rem] ml-0 sm:ml-12">
                  <Flame className="w-10 h-10 text-rose-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Maria Mulambo</h3>
                  <p className="text-stone-400">Senhora de encantos, força e acolhimento. A energia feminina que cura e protege.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PROFUNDIDADE DO CULTO ── */}
        <section className="py-20 sm:py-32 bg-stone-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-900/20 via-stone-950 to-stone-950" />

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
                  <div className="absolute inset-0 bg-red-600/20 rounded-[2rem] blur-3xl scale-105" />
                  <Image
                    src="/BabaJahari_3.png"
                    alt="Babá Jahari"
                    width={400}
                    height={650}
                    className="rounded-[2rem] relative z-10 shadow-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-stone-800"
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
                <Key className="w-12 h-12 text-red-500 mb-8" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
                  A ponte entre o mundo dos vivos e dos mortos
                </h2>

                <div className="space-y-6">
                  <p className="text-stone-400 text-lg leading-relaxed">
                    Servir a Exu e Pombogira é reconhecer neles a presença dos espíritos ancestrais, aqueles que um dia caminharam entre os vivos e hoje habitam o mistério do invisível. São mortos que conhecemos, que voltam a pulsar com força e presença.
                  </p>
                  <p className="text-stone-400 text-lg leading-relaxed">
                    Quando acendemos a vela, derramamos a bebida ou entoamos a reza, estamos dando a eles a possibilidade de se manifestarem novamente. É nesse ato de servir que fortalecemos o vínculo, oferecendo vida para que eles nos ofereçam amparo.
                  </p>
                  <div className="p-6 bg-red-900/20 border-l-4 border-red-500 rounded-r-xl">
                    <p className="text-red-200 font-medium italic text-lg">
                      "Servir aos Guardiões é reconhecer a interdependência entre os mundos: damos vida a quem já partiu, e recebemos deles o apoio necessário para viver com firmeza, coragem e direção."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── RESPONSABILIDADE ── */}
        <section className="py-20 sm:py-32 bg-stone-900 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
            >
              <Wind className="w-12 h-12 text-stone-500 mx-auto mb-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 leading-relaxed">
                Um culto de responsabilidade
              </h2>
              <p className="text-stone-300 text-xl leading-loose">
                Servir a Exu e Pombogira é assumir um compromisso com os mortos que nos acompanham. Não é um culto de vaidade, mas de responsabilidade: dar vida a esses espíritos exige disciplina, respeito e verdade. Quem caminha com os Guardiões precisa honrar cada passo.
              </p>
              <p className="text-red-500 text-2xl font-bold mt-10 tracking-widest uppercase">
                Laroyê Exu, Mojubá! Saravá Maria Mulambo!
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── CONTATO E IMAGENS ── */}
        <section className="py-20 bg-stone-950 relative border-t border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col gap-8"
              >
                <Image
                  src="/BabaJahari_4.png"
                  alt="Babá Jahari"
                  width={600}
                  height={800}
                  className="rounded-[2rem] object-cover w-fit"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="space-y-10"
              >
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                    Entre em contato
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-stone-300">
                      <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-red-500" />
                      </div>
                      <span className="text-lg font-medium">(11) 93032-9758</span>
                    </div>
                    <div className="flex items-center gap-4 text-stone-300">
                      <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-red-500" />
                      </div>
                      <span className="text-lg font-medium">contato@egbejahari.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Me acompanhe nas redes</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="http://instagram.com/terreiro197"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      @terreiro197
                    </Link>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 border-2 border-stone-700 hover:border-red-500 hover:text-red-400 text-stone-300 px-6 py-3 rounded-full font-medium transition-colors"
                    >
                      <Home className="w-5 h-5" />
                      Voltar ao Início
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
