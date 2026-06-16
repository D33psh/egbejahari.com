"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Phone,
  MessageCircle,
  Video,
  BookOpen,
  Users,
  Shield,
  Leaf,
  Moon,
  Heart,
  ArrowLeft,
  Quote,
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

export default function Alagbara() {
  const pilares = [
    {
      icon: MessageCircle,
      title: "Grupo no WhatsApp",
      description:
        "Reflexões, desafios, partilhas e conteúdos semanais em um grupo exclusivo de irmãos.",
      color: "from-green-600 to-emerald-700",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: Video,
      title: "Encontros Online",
      description:
        "Meditações guiadas, rodas de conversa, vivências e exercícios em tempo real.",
      color: "from-blue-600 to-indigo-700",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      icon: BookOpen,
      title: "Material Complementar",
      description:
        "Apostila, vídeos, frases e práticas guiadas para o cotidiano, disponíveis a qualquer hora.",
      color: "from-amber-600 to-orange-700",
      bgColor: "from-amber-50 to-orange-50",
    },
    {
      icon: Users,
      title: "Rede de Apoio",
      description:
        "Espaço para trocas, escuta ativa e fortalecimento entre irmãos que caminham juntos.",
      color: "from-purple-600 to-violet-700",
      bgColor: "from-purple-50 to-violet-50",
    },
  ];

  const fundamentos = [
    { icon: Shield, text: "Masculinidade consciente e restaurada" },
    { icon: Heart, text: "Propósito, escuta e maturidade emocional" },
    { icon: Moon, text: "Espiritualidade livre, intuitiva e integral" },
    { icon: Leaf, text: "Ancestralidade como fonte e caminho" },
    { icon: Users, text: "Práticas de silêncio, corpo e reconexão" },
  ];

  const masculino = [
    "Forte, mas não bruto",
    "Sensível, mas não frágil",
    "Firme, mas não opressor",
    "Em paz com sua sombra e sua luz",
    "Capaz de proteger sem ferir e de guiar sem controlar",
  ];

  const depoimentos = [
    {
      nome: "Junior Perez",
      texto:
        "Não participo dos encontros presenciais, nem faço parte oficialmente do grupo, mas apenas por seguir o Àlàgbára aqui no Instagram já sinto diferença na minha vida. As palavras, reflexões e ensinamentos me ajudam a olhar para mim com mais respeito e consciência. Sou grato por esse espaço existir e por poder receber essa força mesmo à distância. Àṣẹ!",
    },
    {
      nome: "Luciano Silva",
      texto:
        "Estou fazendo a terapia transpessoal guiada pelo Àlàgbára e, em apenas 21 dias, já consegui me libertar de traumas que carregava há anos. Sinto leveza, clareza e um renascimento dentro de mim. Gratidão, Àṣẹ!",
    },
    {
      nome: "Gustavo Alves",
      texto:
        "Antes de chegar ao grupo Àlàgbára eu carregava dores, culpas e traumas que me impediam de ser quem eu realmente sou. Aqui encontrei algo que nunca tive: irmãos que me olham sem julgamento e me levantam quando eu penso em cair. Através das partilhas, rituais e do acolhimento, consegui ressignificar minha história. Hoje me sinto mais inteiro, mais forte e com coragem para honrar o homem que habita em mim. Àṣẹ!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50 flex flex-col">
      <Navbar pageTitle="Àlàgbára" />

      <main className="flex-grow pt-[72px]">
        {/* ── HERO ── */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/alagbara-background.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-900/60 to-stone-950/80" />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 border border-amber-400/50 rounded-full mb-6 bg-amber-900/20 backdrop-blur-sm">
                <span className="text-amber-300 font-semibold text-sm tracking-widest uppercase">
                  Grupo do Homem
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Special Elite', system-ui" }}
            >
              O Sagrado{" "}
              <span className="text-amber-400">Masculino</span>
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
              <p className="text-amber-300 font-medium text-lg sm:text-xl tracking-wide">
                Àlàgbára
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            >
              Um espaço de encontro, autoconhecimento e reconexão com a essência
              do masculino sagrado.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 text-base sm:text-lg shadow-xl w-full sm:w-auto transition-all duration-300 rounded-sm"
                onClick={() =>
                  document
                    .getElementById("sobre")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Saiba Mais
              </button>
              <button
                className="border-2 border-white/60 text-white hover:bg-white/10 px-8 py-4 text-base sm:text-lg w-full sm:w-auto transition-all duration-300 rounded-sm backdrop-blur-sm"
                onClick={() =>
                  window.open("https://wa.me/5511930329758", "_blank")
                }
              >
                <Phone className="inline w-4 h-4 mr-2" />
                WhatsApp
              </button>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </section>

        {/* ── SOBRE ── */}
        <section id="sobre" className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-stone-100/40 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-block px-4 py-2 bg-amber-50 rounded-full mb-6">
                <span className="text-amber-700 font-semibold text-sm">
                  Quem Somos
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4">
                Àlàgbára — Força, Consciência e Sagrado Masculino
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-stone-800/20 rounded-full scale-105 blur-xl" />
                  <Image
                    src="/alagbara-background.jpg"
                    alt="Alagbara — Sagrado Masculino"
                    width={480}
                    height={480}
                    className="rounded-full object-cover w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative z-10 ring-4 ring-amber-600/20"
                  />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-5"
              >
                <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                  O Àlàgbára nasce como um espaço de encontro, autoconhecimento
                  e reconexão com a essência do masculino sagrado. Nossa missão
                  é resgatar valores ancestrais, cultivar a presença consciente
                  e fortalecer homens que buscam equilíbrio entre corpo, mente e
                  espírito.
                </p>
                <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                  Aqui, o homem é convidado a olhar para dentro, reconhecer suas
                  potências, curar suas feridas e transformar sua forma de estar
                  no mundo. Trabalhamos com rodas de estudos, vivências, terapias
                  e rituais que unem sabedoria ancestral, espiritualidade e
                  práticas contemporâneas de cuidado e autodesenvolvimento.
                </p>
                <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                  Este é um espaço de acolhimento, onde cada homem pode se
                  lembrar de sua verdadeira força: aquela que não oprime, mas que
                  sustenta; que não fere, mas que protege; que não se perde, mas
                  se renova em cada passo.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── JURAMENTO ── */}
        <section className="py-16 sm:py-24 bg-stone-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-stone-900 to-stone-950" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 border border-amber-600/40 rounded-full mb-8 bg-amber-900/20">
                <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">
                  Juramento
                </span>
              </div>

              <Quote className="w-10 h-10 text-amber-500/60 mx-auto mb-6" />

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 leading-relaxed"
                style={{ fontFamily: "'Special Elite', system-ui" }}
              >
                Juramento do Homem Àlàgbára
              </h2>

              <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-8 sm:p-12 text-left">
                <p className="text-stone-200 text-base sm:text-lg leading-loose italic">
                  "Eu me comprometo a ser um homem inteiro.
                  <br />
                  <br />A reconhecer minhas feridas sem deixar que elas me definam.
                  <br />
                  <br />A respeitar os que vieram antes de mim e a me tornar um
                  espelho digno para os que virão.
                  <br />
                  <br />A não me esconder na força nem me perder na fraqueza.
                  <br />
                  <br />
                  <strong className="text-amber-400 not-italic">
                    Eu escolho caminhar com verdade, integridade e coragem.
                  </strong>
                  "
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── ESTRUTURA DO PROJETO ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-stone-100/30 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-block px-4 py-2 bg-amber-50 rounded-full mb-6">
                <span className="text-amber-700 font-semibold text-sm">
                  Como Funciona
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4">
                Estrutura do Projeto
              </h2>
              <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto">
                Quatro pilares que sustentam a jornada do homem Àlàgbára.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {pilares.map((pilar, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="overflow-hidden hover:shadow-2xl transition-all duration-500 h-full border border-stone-200 rounded-xl group">
                    <div className={`h-1.5 bg-gradient-to-r ${pilar.color}`} />
                    <div className={`bg-gradient-to-br ${pilar.bgColor} p-6`}>
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${pilar.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <pilar.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-stone-900 mb-3">
                        {pilar.title}
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        {pilar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FUNDAMENTOS ── */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1"
              >
                <div className="inline-block px-4 py-2 bg-amber-50 rounded-full mb-6">
                  <span className="text-amber-700 font-semibold text-sm">
                    Nossas Bases
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-8">
                  Fundamentos do Projeto
                </h2>

                <div className="space-y-5">
                  {fundamentos.map((item, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-amber-700" />
                      </div>
                      <span className="text-stone-700 font-medium pt-1.5">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="order-1 md:order-2 flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-stone-400/20 rounded-2xl scale-105 blur-xl" />
                  <Image
                    src="/alagbara-coração.jpg"
                    alt="Fundamentos Àlàgbára"
                    width={500}
                    height={500}
                    className="rounded-2xl object-cover w-full max-w-sm sm:max-w-md relative z-10 shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── O MASCULINO QUE CONSTRUÍMOS ── */}
        <section className="py-16 sm:py-24 bg-stone-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-700/50 via-stone-800 to-stone-900" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500/10 rounded-2xl scale-105 blur-xl" />
                  <Image
                    src="/alagbara-meditação.jpg"
                    alt="O Masculino Àlàgbára"
                    width={500}
                    height={500}
                    className="rounded-2xl object-cover w-full max-w-sm sm:max-w-md relative z-10 shadow-2xl"
                  />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-2 border border-amber-600/40 rounded-full mb-6 bg-amber-900/20">
                  <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">
                    Nossa Visão
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                  O Masculino que Construímos
                </h2>

                <div className="space-y-4">
                  {masculino.map((item, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-stone-700/50 border border-stone-600/50 rounded-xl hover:border-amber-500/40 transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                      <span className="text-stone-200 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-block px-4 py-2 bg-amber-50 rounded-full mb-6">
                <span className="text-amber-700 font-semibold text-sm">
                  Testemunhos
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4">
                Depoimentos
              </h2>
              <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto">
                Histórias reais de homens que escolheram caminhar com
                consciência.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {depoimentos.map((dep, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    <Quote className="w-8 h-8 text-amber-500/40 mb-4" />
                    <p className="text-stone-600 leading-relaxed text-sm sm:text-base italic">
                      "{dep.texto}"
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {dep.nome.charAt(0)}
                    </div>
                    <span className="font-semibold text-stone-900 text-sm">
                      {dep.nome}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTATO ── */}
        <section className="py-16 sm:py-24 bg-stone-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-stone-900 to-stone-950" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-2 border border-amber-600/40 rounded-full mb-6 bg-amber-900/20">
                  <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">
                    Fale Conosco
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Entre em Contato
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-stone-300">
                    <div className="w-10 h-10 bg-stone-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-base">(11) 93032-9758</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-300">
                    <div className="w-10 h-10 bg-stone-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-base">contato@egbejahari.com</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">
                  Me acompanhe nas redes
                </h3>
                <div className="flex gap-3">
                  <Link
                    href="https://www.instagram.com/alagbara.sagradomasculino?igsh=MXBycGk4NGtzbG42dw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-stone-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300"
                    aria-label="Instagram Àlàgbára"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </Link>
                  <button
                    onClick={() =>
                      window.open("https://wa.me/5511930329758", "_blank")
                    }
                    className="w-11 h-11 bg-stone-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500/10 rounded-2xl scale-105 blur-xl" />
                  <Image
                    src="/BabaJahari_2.png"
                    alt="Baba Jahari"
                    width={480}
                    height={480}
                    className="rounded-2xl object-cover w-full relative z-10 shadow-2xl"
                  />
                </div>

                <div className="flex justify-center">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar ao Egbe Jahari
                  </Link>
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