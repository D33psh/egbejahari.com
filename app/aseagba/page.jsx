"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Circle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const GeometricOrb = ({ delay = 0, duration = 20, size = 400 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0.1, 0.2, 0.1],
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
    className="absolute rounded-full blur-3xl"
    style={{
      width: size,
      height: size,
      background:
        "radial-gradient(circle, rgba(212, 131, 109, 0.15) 0%, transparent 70%)",
    }}
  />
);

export default function Aseagba() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden relative">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <GeometricOrb delay={0} duration={25} size={600} />
        <GeometricOrb delay={5} duration={30} size={400} />
        <GeometricOrb delay={10} duration={20} size={500} />
      </div>

      {/* Cursor Follow Effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(212, 131, 109, 0.08) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Geometric Frame */}
          <motion.div
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] border border-[#D4836D]/20 rounded-full animate-spin-slow" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] border border-[#D4836D]/10 rounded-full animate-spin-reverse" />
            </div>

            <motion.img
              src="/aseagba.png"
              alt="ÀṢẸÀGBÀ"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="w-80 md:w-96 lg:w-[450px] relative z-10 drop-shadow-2xl"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-[#E8A090] text-xs md:text-sm tracking-[0.4em] uppercase font-light"
          >
            Irmandade do Sagrado Feminino Ancestral
          </motion.p>
        </motion.div>
      </section>

      {/* Manifesto Section - Enhanced */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4836D]/5 to-transparent" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#D4836D] mb-4">
                Manifesto
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-[#D4836D] to-transparent" />
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-12 text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/95">
              A Força das Ancestrais
              <br />
              <span className="text-[#E8A090]">habita em nós.</span>
            </p>

            <div className="flex justify-center gap-3 my-12">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-2 h-2 rounded-full bg-[#D4836D]"
                />
              ))}
            </div>

            <p className="text-lg md:text-xl text-white/70 leading-loose font-light max-w-3xl mx-auto">
              Somos filhas do ventre primordial. Guardamos no sangue os segredos
              do tempo, carregamos nos ossos os cantos antigos, e em nossas mãos
              repousa o poder do axé.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Vision Cards */}
      <section className="py-32 px-6 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "O Chamado",
                text: "ÀṢẸÀGBÀ é um chamado. Um reencontro com a sabedoria ancestral feminina. É o círculo das que lembram, das que curam, das que plantam o axé na terra com os pés descalços.",
                icon: "◈",
              },
              {
                title: "O Círculo",
                text: "Aqui, nos reunimos não para competir, mas para nos fortalecer mutuamente. Caminhamos lado a lado, como Iyámi nos ensinou: firmes, belas, ferozes, compassivas.",
                icon: "◉",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4836D]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-[#151515]/80 backdrop-blur-sm border border-[#D4836D]/20 rounded-2xl p-10 md:p-12 group-hover:border-[#D4836D]/40 transition-all duration-500">
                  <div className="text-6xl text-[#D4836D] mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-[#E8A090] mb-6 tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Elements Section - Enhanced */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4836D]/5 via-transparent to-[#D4836D]/5" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Somos <span className="text-[#D4836D]">Força</span>
            </h2>
            <p className="text-white/50 text-sm tracking-[0.3em] uppercase">
              Os Quatro Elementos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                element: "Água",
                desc: "que molda",
                color: "from-blue-500/20 to-[#D4836D]/20",
                symbol: "〰",
              },
              {
                element: "Fogo",
                desc: "que transforma",
                color: "from-red-500/20 to-[#D4836D]/20",
                symbol: "⌇",
              },
              {
                element: "Terra",
                desc: "que sustenta",
                color: "from-green-500/20 to-[#D4836D]/20",
                symbol: "▲",
              },
              {
                element: "Ar",
                desc: "que sopra mudança",
                color: "from-cyan-500/20 to-[#D4836D]/20",
                symbol: "○",
              },
            ].map((item, index) => (
              <motion.div
                key={item.element}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}
                />
                <div className="relative bg-[#0D0D0D]/90 backdrop-blur-sm border border-[#D4836D]/20 rounded-2xl p-8 group-hover:border-[#D4836D]/60 transition-all duration-500">
                  <div className="text-5xl text-[#D4836D] mb-4 text-center">
                    {item.symbol}
                  </div>
                  <h3 className="text-2xl font-light text-white text-center mb-2 tracking-wider">
                    {item.element}
                  </h3>
                  <p className="text-[#E8A090]/60 text-sm text-center font-light tracking-wide">
                    {item.desc}
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D4836D]/50 to-transparent mt-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Juramento Section */}
      <section className="py-32 px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4836D]/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-[#0D0D0D]/50 backdrop-blur-md border border-[#D4836D]/30 rounded-3xl p-12 md:p-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-center mb-8"
              >
                <Circle
                  className="w-16 h-16 text-[#D4836D] mx-auto"
                  strokeWidth={0.5}
                />
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-light text-[#E8A090] text-center mb-12 tracking-wide">
                O Juramento
              </h3>

              <div className="space-y-6 text-center">
                <p className="text-white/80 leading-loose font-light text-base md:text-lg italic">
                  "Juro diante da minha ancestralidade, das águas que correm em
                  mim, da terra que me sustenta, do fogo que me renova e do ar
                  que me conecta..."
                </p>
                <p className="text-white/80 leading-loose font-light text-base md:text-lg italic">
                  "...honrar o caminho das que vieram antes, cuidar das que
                  caminham ao meu lado, e preparar o solo para as que virão."
                </p>
                <p className="text-[#D4836D] text-xl md:text-2xl font-light mt-8">
                  Eu sou ÀṢẸÀGBÀ.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Structure Section */}
      <section className="py-32 px-6 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              A <span className="text-[#D4836D]">Estrutura</span>
            </h2>
            <p className="text-white/50 text-sm tracking-[0.3em] uppercase">
              Círculo Sagrado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Iyá Mor", desc: "Guardiã do Círculo" },
              { title: "Filhas do Ventre", desc: "Mulheres iniciadas" },
              {
                title: "Guardadoras do Àṣẹ",
                desc: "Mantêm rituais e tradições",
              },
              { title: "Curandeiras", desc: "Saberes terapêuticos" },
              { title: "Sementes", desc: "Novas integrantes" },
            ].map((role, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#151515] to-[#0D0D0D] border border-[#D4836D]/20 rounded-xl p-6 group hover:border-[#D4836D]/50 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4836D] group-hover:w-3 group-hover:h-3 transition-all" />
                  <h4 className="text-[#E8A090] font-light text-lg">
                    {role.title}
                  </h4>
                </div>
                <p className="text-white/50 text-sm font-light pl-5">
                  {role.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Principles Section - Enhanced */}
      <section className="py-32 px-6 md:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4836D]/5 to-transparent" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Nossos <span className="text-[#D4836D]">Pilares</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              "Sigilo e respeito são fundamentos sagrados",
              "Não há disputa entre irmãs — a cura é coletiva",
              "Nenhuma mulher será deixada para trás",
              "A permanência no círculo requer presença ativa",
              "O círculo não termina: ele gira",
            ].map((principle, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 20 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <motion.div
                  className="w-12 h-px bg-gradient-to-r from-[#D4836D]/40 to-transparent group-hover:from-[#D4836D] group-hover:to-[#D4836D]/60 transition-all duration-500"
                  whileHover={{ width: 60 }}
                />
                <p className="text-white/70 text-base md:text-lg font-light group-hover:text-white transition-colors duration-300">
                  {principle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final Quote */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#D4836D]/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#D4836D]/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#D4836D]/10 rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light leading-relaxed mb-8">
            Somos a água que molda.
            <br />
            Somos o fogo que transforma.
            <br />
            Somos a terra que sustenta.
            <br />
            Somos o ar que sopra mudança.
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-[#D4836D] font-light">
            Somos ÀṢẸÀGBÀ.
          </p>
        </motion.div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-40 px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-12"
          >
            <img
              src="/aseagba.png"
              alt="ÀṢẸÀGBÀ"
              className="w-32 md:w-40 mx-auto opacity-80"
            />
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
            Entre no <span className="text-[#D4836D]">Círculo</span>
          </h3>

          <p className="text-white/60 text-base md:text-lg font-light mb-12 leading-relaxed">
            Descubra mais sobre nossa jornada ancestral.
            <br />
            Conecte-se com a força sagrada do feminino.
          </p>

          <motion.a
            href="https://www.instagram.com/aseagba.sagradofeminino?igsh=bGQ3ZjdnbjRzNnJz"
            target="_self"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-[#D4836D] to-[#C47361] text-white hover:from-[#C47361] hover:to-[#D4836D] transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <Instagram className="w-5 h-5 relative z-10" />
            <span className="text-sm tracking-[0.2em] uppercase font-light relative z-10">
              Siga no Instagram
            </span>
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wider">
            ÀṢẸÀGBÀ © {new Date().getFullYear()}
          </p>
          <p className="text-white/20 text-xs tracking-wider">
            Irmandade do Sagrado Feminino Ancestral
          </p>
        </div>
      </footer>

      {/* Custom Animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
