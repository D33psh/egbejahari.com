import "../../app/globals.css"

export const metadata = {
  title: "Grupo Diamond | Ilê Àṣẹ Egbé Jàhári",
  description:
    "O melhor grupo para aprender sobre Òrìṣà. Acesso a conteúdo exclusivo, materiais didáticos, reuniões secretas e descontos vitálicios.",
};

export default function DiamondLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
