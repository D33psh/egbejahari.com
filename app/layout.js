import "./globals.css";

export const metadata = {
  title: "Ile Ase Egbe Jahari",
  description: "Centro cultural e Religioso",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
