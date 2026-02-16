import { motion } from "framer-motion";

type Props = {
  titulo: string;
  instituicao: string;
  anoDeInicio: string;
  anoConclusao: string;
  descricao: string;
};

export default function CardCertificacoes({
  titulo,
  instituicao,
  anoConclusao,
  anoDeInicio,
  descricao,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      // bg-card e text-card-foreground garantem que ele mude de cor no dark mode automaticamente
      className="bg-card text-card-foreground border border-border w-full md:max-w-[35em] rounded-lg p-6 mb-4 shadow-sm hover:shadow-md hover:border-[#63DEF1]/50 transition-all duration-300 group"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#63DEF1] transition-colors">
          {titulo}
        </h2>
        
        <div className="flex justify-between items-center text-sm mb-2">
          <span className="font-medium text-[#63DEF1]">
            {instituicao}
          </span>
          <span className="text-slate-500 dark:text-slate-400 italic">
            {anoDeInicio} — {anoConclusao}
          </span>
        </div>

        {descricao && (
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
            {descricao}
          </p>
        )}
      </div>
    </motion.div>
  );
}