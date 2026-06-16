"use client";

import Image from "next/image";
import { Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logo-ile.jpeg"
                  alt="Ile Ase Egbe Jahari"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold">
                  Ilê Àṣẹ Egbé Jàhári
                </h3>
              </div>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              Centro cultural e Religioso
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Contato
            </h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-stone-400">
              <p>contato@egbejahari.com</p>
              <p>(11) 93032-9758</p>
              <p>São Paulo, Brasil</p>
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Redes Sociais
            </h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/egbejahari/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-stone-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/5511930329758"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-stone-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-stone-500 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Ilê Àṣẹ Egbé Jàhári. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
