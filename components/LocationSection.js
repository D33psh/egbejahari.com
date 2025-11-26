import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Star } from "lucide-react";

export default function LocationSection() {
  const address = "São Paulo, SP, Brasil";
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Egbe+Jahari+São+Paulo";
  const googleReviewsUrl = "https://www.google.com/search?q=Egbe+Jahari";

  return (
    <section
      id="localizacao"
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-amber-100/20 rounded-full blur-3xl" />

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
              Localização
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6 px-4">
            Venha nos Visitar
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed px-4">
            Nosso espaço está de portas abertas para acolher você. Venha
            conhecer nossa comunidade e vivenciar a ancestralidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-5 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-stone-200 h-full border border-1px rounded-md">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-1 sm:mb-2">
                    Nossa Localização
                  </h3>
                  <p className="text-sm sm:text-base text-stone-600">
                    Encontre-nos facilmente no coração de São Paulo
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="bg-amber-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-stone-700 font-medium mb-1">
                    Endereço
                  </p>
                  <p className="text-lg sm:text-xl text-stone-900 font-semibold">
                    {address}
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <button
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-5 sm:py-6 text-sm sm:text-base md:text-lg flex flex-row items-center justify-center"
                    onClick={() => window.open(googleMapsUrl, "_blank")}
                  >
                    <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Abrir no Google Maps
                  </button>

                  <button
                    variant="outline"
                    className="w-full border-2 border-amber-700 text-amber-700 hover:bg-amber-50 py-5 sm:py-6 text-sm sm:text-base md:text-lg flex flex-row items-center justify-center"
                    onClick={() => window.open(googleReviewsUrl, "_blank")}
                  >
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Ver Avaliações no Google
                  </button>
                </div>

                <div className="bg-stone-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h4 className="font-bold text-stone-900 mb-2 sm:mb-3 text-sm sm:text-base">
                    Horários de Atendimento
                  </h4>
                  <div className="space-y-1.5 sm:space-y-2 text-stone-700 text-xs sm:text-sm md:text-base">
                    <p>📅 Consulte disponibilidade via WhatsApp</p>
                    <p>🕐 Atendimentos e giras em dias específicos</p>
                    <p>✨ Sempre com amor e respeito</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px] sm:min-h-[500px] relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0481995724!2d-46.87549524999999!3d-23.6821604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="inline-block p-4 sm:p-6 bg-gradient-to-br from-amber-50 to-stone-50 border-amber-200 max-w-2xl">
            <p className="text-xs sm:text-sm md:text-base text-stone-700">
              <span className="font-bold text-amber-700">💡 Dica:</span> Entre
              em contato antes de sua visita para confirmar os horários e
              atividades disponíveis
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
