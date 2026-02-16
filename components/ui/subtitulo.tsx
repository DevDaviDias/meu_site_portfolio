import React from 'react';

type Props = {
  subtitle: string;
  className?: string; // Adicionado para dar flexibilidade de margens
}

export default function Subtitulo({ subtitle, className }: Props) {
  return (
    <div className={`relative mb-6 ${className}`}>
      {/* O texto agora usa cores dinâmicas e um peso visual melhor */}
      <h2 className="text-slate-900 dark:text-white font-bold text-xl md:text-2xl tracking-tight">
        {subtitle}
      </h2>
      
      {/* Um detalhe visual: uma linha pequena abaixo do título na cor do seu tema */}
      <div className="h-1 w-12 bg-[#63DEF1] rounded-full mt-2" />
    </div>
  );
}