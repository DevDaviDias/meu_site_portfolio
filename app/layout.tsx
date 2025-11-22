import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";

export const metadata = {
  title: "Meu Portfólio | Davi Dias",
  description: "Desenvolvedor Front-End apaixonado por tecnologia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
