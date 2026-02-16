"use client";

import { memo } from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// 1. DADOS
const FORMACOES_DATA = [
  {
    titulo: "Análise e Desenvolvimento de Sistemas",
    instituicao: "Unopar",
    periodo: "2024 — 2026",
    descricao: "Foco em engenharia de software, arquitetura de sistemas e desenvolvimento web full stack.",
    status: "Graduação",
  },
];

const CERTIFICACOES_DATA = [
  {
    titulo: "JavaScript e TypeScript – Full Stack",
    instituicao: "Udemy (Luiz Otávio Miranda)",
    periodo: "2023 — 2024",
    descricao: "Frontend e backend com Node.js, Express, APIs REST, React e Design Patterns.",
    tags: ["Full Stack", "Node.js"],
  },
  {
    titulo: "Desenvolvimento Web Avançado",
    instituicao: "Felipe Deschamps",
    periodo: "2025 — Presente",
    descricao: "Boas práticas, arquitetura limpa e visão profissional de desenvolvimento.",
    tags: ["Arquitetura", "Clean Code"],
  },
  {
    titulo: "Git e GitHub",
    instituicao: "Alura",
    periodo: "2024",
    descricao: "Controle de versão, fluxo de trabalho e colaboração em equipe.",
    tags: ["Git", "Workflow"],
  },
  {
    titulo: "Java – Fundamentos e APIs REST",
    instituicao: "IFSulflix (Prof. Isidro)",
    periodo: "2023",
    descricao: "Orientação a objetos, collections e criação de serviços backend.",
    tags: ["Java", "Backend"],
  },
];

// Variants reutilizáveis
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Formacoes() {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="formacoes"
        className="w-full py-10 lg:ml-[288px] lg:w-[calc(100%-288px)]"
      >
        <div className="w-full px-4 md:pl-20 md:pr-10 max-w-[1440px]">

          {/* FORMAÇÃO */}
          <div className="mb-20">
            <HeaderSection title="Formação Acadêmica" subtitle="Educação" />

            <div className="space-y-6">
              {FORMACOES_DATA.map((formacao, index) => (
                <AcademicCard key={index} formacao={formacao} />
              ))}
            </div>
          </div>

          {/* CERTIFICAÇÕES */}
          <div className="mt-20">
            <HeaderSection title="Cursos & Certificações" subtitle="Especializações" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICACOES_DATA.map((cert, index) => (
                <CertificationCard key={index} cert={cert} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}

// -------- SUBCOMPONENTES --------

const HeaderSection = memo(function HeaderSection({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.35 }}
      viewport={{ once: true, margin: "-80px" }}
      className="mb-10"
    >
      <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-[#63DEF1] font-medium text-lg uppercase tracking-widest pl-1">
        {subtitle}
      </p>
    </motion.div>
  );
});

const AcademicCard = memo(function AcademicCard({ formacao }: { formacao: any }) {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: "-60px" }}
      className="group relative p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-transparent hover:border-[#63DEF1]/30 shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="mt-1 p-3 rounded-lg bg-[#63DEF1]/10 text-[#63DEF1]">
            <GraduationCap size={28} />
          </div>
          <div>
            <Badge className="mb-2 bg-[#63DEF1]/20 text-[#63DEF1] border-none text-[10px] uppercase font-bold">
              {formacao.status}
            </Badge>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#63DEF1] transition-colors">
              {formacao.titulo}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">
              {formacao.instituicao}
            </p>
          </div>
        </div>

        <div className="flex items-center text-sm font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 w-fit">
          <Calendar size={14} className="mr-2" />
          {formacao.periodo}
        </div>
      </div>

      <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl text-base">
        {formacao.descricao}
      </p>
    </motion.div>
  );
});

const CertificationCard = memo(function CertificationCard({ cert }: { cert: any }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.35 }}
      viewport={{ once: true, margin: "-60px" }}
      className="group p-6 rounded-xl bg-white dark:bg-slate-900/50 border border-transparent hover:border-[#63DEF1]/30 shadow-lg transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-[#63DEF1]/10 group-hover:text-[#63DEF1] transition-colors">
          <Award size={22} />
        </div>
        <span className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          {cert.periodo}
        </span>
      </div>

      <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1 group-hover:text-[#63DEF1] transition-colors leading-tight">
        {cert.titulo}
      </h4>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 font-medium">
        {cert.instituicao}
      </p>

      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 italic leading-relaxed">
        "{cert.descricao}"
      </p>

      <div className="flex flex-wrap gap-3 mt-auto">
        {cert.tags?.map((tag: string) => (
          <span
            key={tag}
            className="text-[10px] font-bold uppercase text-[#63DEF1] tracking-widest bg-[#63DEF1]/5 px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
});