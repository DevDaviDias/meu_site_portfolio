type TituloProps = {
  texto: string;
};

export default function Titulo({ texto }: TituloProps) {
  return (
    <h2 className="
      /* Tipografia e Cores - Agora com 5xl no desktop */
      text-3xl md:text-5xl font-bold text-slate-900 dark:text-white 
      mb-10 pt-6 px-4 
      
      /* Alinhamento Responsivo (Respeitando a Sidebar) */
      lg:ml-[288px] 
      transition-all duration-300
      tracking-tight
    ">
      {texto}
    </h2>
  );
}