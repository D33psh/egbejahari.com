import "../../app/globals.css"

export const metadata = {
  title: "Terreiro 197 | Culto aos Guardiões",
  description:
    "A morada sagrada dos Guardiões, onde Exu e Pombogira se fazem presentes com sua força viva e transformadora. Culto conduzido com disciplina e respeito.",
};

export default function TerreiroLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
