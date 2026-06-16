import "../../app/globals.css"

export const metadata = {
  title: "O Ajê | O Caminho para a Prosperidade",
  description:
    "Descubra as virtudes do caráter essenciais para atrair a prosperidade. Um guia completo com ensinamentos profundos e fundamentos de culto.",
};

export default function AjeLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
