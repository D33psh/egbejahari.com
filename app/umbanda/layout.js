import "../../app/globals.css"

export const metadata = {
  title: "Centro Espiritual Caboclo Flecha Dourada | Umbanda",
  description:
    "Espaço sagrado do Ilê Àṣẹ Egbé Jàhári dedicado às tradições da Umbanda. Atendimentos espirituais gratuitos, passes de limpeza e aconselhamento com Caboclos, Pretos Velhos, Pombogiras e Exus.",
};

export default function UmbandaLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
