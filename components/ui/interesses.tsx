import React from "react";
import { motion } from "framer-motion";

type InteressesProps = {
  icon: React.ReactNode;
  title: string;
  interesse: string;
};

export default function Interesses({ title, interesse, icon }: InteressesProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="w-full md:w-40 h-32 rounded-xl flex flex-col items-center justify-center 
                 bg-card text-card-foreground border border-border
                 p-4 shadow-sm hover:shadow-xl hover:border-[#63DEF1]/50 
                 transition-all duration-300 group"
    >
      {/* Container do Ícone com destaque em Ciano */}
      <div className="mb-2 text-[#63DEF1] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Título */}
      <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
        {title}
      </div>

      {/* Descrição do Interesse */}
      <div className="text-xs text-center text-slate-500 dark:text-slate-400">
        {interesse}
      </div>
    </motion.div>
  );
}