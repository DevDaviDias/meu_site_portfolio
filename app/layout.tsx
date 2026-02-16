import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";

export const metadata = {
  title: "Meu Portfólio | Davi Dias",
  description: "Desenvolvedor Full Stack apaixonado por tecnologia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      {/* O bg-white (claro) e dark:bg-slate-950 (escuro) garantem que 
        o fundo da página mude automaticamente. 
      */}
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}