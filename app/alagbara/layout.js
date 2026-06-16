import "../../app/globals.css"

export const metadata = {
  title: "Àlàgbára — O Sagrado Masculino | Ilê Àṣẹ Egbé Jàhári",
  description:
    "O Àlàgbára é um espaço de encontro, autoconhecimento e reconexão com a essência do masculino sagrado. Rodas de estudos, vivências, terapias e rituais que unem sabedoria ancestral e espiritualidade.",
};

export default function AlagbaraLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}