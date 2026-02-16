import { motion } from "framer-motion";

type Props = {
  titulo: string;
  instituicao: string;
  anoDeInicio: string;
  anoConclusao: string;
  descricao: string;
  destaques?: string[];
  icon?: React.ReactNode;
};

export default function CardEducacao({
  titulo,
  instituicao,
  icon,
  anoConclusao,
  descricao,
  destaques,
  anoDeInicio,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      // Removido as margens fixas para usar o grid/flex do pai
      className="bg-card text-card-foreground border border-border w-full max-w-4xl mx-auto md:mx-0 rounded-xl p-6 mb-6 shadow-sm hover:shadow-xl hover:border-[#63DEF1]/40 transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        {/* Espaço para o Ícone */}
        {icon && (
          <div className="p-3 rounded-lg bg-[#63DEF1]/10 text-[#63DEF1] group-hover:scale-110 transition-transform">
            {icon}
          </div>
        )}

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#63DEF1] transition-colors">
              {titulo}
            </h2>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400">
              {anoDeInicio} — {anoConclusao}
            </span>
          </div>

          <h3 className="text-[#63DEF1] font-medium mb-3">{instituicao}</h3>
          
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
            {descricao}
          </p>

          {destaques && (
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Principais Conquistas:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {destaques.map((destaque, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#63DEF1]" />
                    {destaque}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}