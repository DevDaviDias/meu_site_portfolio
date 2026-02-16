import { motion } from "framer-motion";
import React from "react";

type InfoProps = {
  icon: React.ReactNode;
  text: string;
  complemento: string;
};



export default function InfoItem({ icon, text, complemento }: InfoProps) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/5 group border border-transparent hover:border-[#63DEF1]/10">
      
      {/* Container do Ícone - Ajustado para o seu azul padrão */}
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#63DEF1]/10 text-[#63DEF1] group-hover:bg-[#63DEF1] group-hover:text-slate-900 transition-all duration-300 shadow-sm">
        {React.cloneElement(icon as React.ReactElement, { size: 20 } as any)}
      </div>

      {/* Textos */}
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">
          {text}
        </span>
        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors group-hover:text-[#63DEF1]">
          {complemento}
        </span>
      </div>
    </div>
  );
}