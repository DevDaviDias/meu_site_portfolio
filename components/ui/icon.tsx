import React from "react";

type IconProps = {
  icon: React.ReactNode;
  className?: string; // Permite passar classes extras se precisar mudar a cor ou tamanho
};

export default function Icon({ icon, className }: IconProps) {
  return (
    <div 
      className={`
        inline-flex items-center justify-center 
        p-2 rounded-lg 
        bg-slate-100 dark:bg-white/10 
        text-[#63DEF1] 
        transition-all duration-300
        ${className}
      `}
    >
      {/* Aqui garantimos que o ícone tenha um tamanho padrão caso você esqueça de definir */}
      <div className="flex-shrink-0 [&>svg]:w-6 [&>svg]:h-6">
        {icon}
      </div>
    </div>
  );
}