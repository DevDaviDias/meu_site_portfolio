"use client";

import { memo } from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// 1. DEFINIÇÃO DOS DADOS
const SKILLS_DATA = [
  {
    titulo: "Frontend",
    habilidades: [
      { name: "React", level: 95, color: "from-blue-600 to-blue-400" },
      { name: "TypeScript", level: 88, color: "from-slate-700 to-slate-500" },
      { name: "Next.js", level: 92, color: "from-cyan-500 to-teal-500" },
      { name: "Tailwind CSS", level: 80, color: "from-green-500 to-emerald-500" },
    ],
  },
  {
    titulo: "Backend",
    habilidades: [
      { name: "Node.js", level: 90, color: "from-green-600 to-green-400" },
      { name: "Java", level: 85, color: "from-orange-700 to-yellow-600" },
      { name: "PostgreSQL", level: 82, color: "from-blue-700 to-blue-500" },
      { name: "MongoDB", level: 88, color: "from-emerald-700 to-emerald-500" },
    ],
  },
  {
    titulo: "DevOps e Ferramentas",
    habilidades: [
      { name: "Git", level: 85, color: "from-orange-600 to-orange-400" },
      { name: "Docker", level: 80, color: "from-blue-500 to-blue-400" },
      { name: "Linux", level: 75, color: "from-slate-800 to-slate-600" },
      { name: "CI/CD", level: 80, color: "from-purple-600 to-purple-400" },
    ],
  },
];

const CERTIFICACOES = [
  "Curso em andamento com Felipe Deschamps",
  "Lógica Moderna & Boas Práticas",
  "Padrões de Projeto (Design Patterns)",
  "Conceitos de Engenharia de Software",
];

// Variants reutilizáveis
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const barGrow = {
  hidden: { width: 0 },
  visible: (w: number) => ({ width: `${w}%` }),
};

export default function Skills() {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="skill"
        className="w-full py-10 lg:ml-[288px] lg:w-[calc(100%-288px)]"
      >
        <div className="w-full px-4 md:pl-20 md:pr-10 max-w-[1440px]">

          {/* Cabeçalho */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
              Minhas Skills
            </h2>
            <p className="text-[#63DEF1] font-medium text-lg uppercase tracking-widest pl-1">
              Stack Tecnológica
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {SKILLS_DATA.map((category) => (
              <SkillCategoryCard key={category.titulo} category={category} />
            ))}
          </div>

          <CertificationsSection certificates={CERTIFICACOES} />
        </div>
      </section>
    </LazyMotion>
  );
}

// ---------- SUBCOMPONENTES OTIMIZADOS ----------

const SkillCategoryCard = memo(function SkillCategoryCard({ category }: { category: any }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <Card className="bg-white dark:bg-slate-900/50 backdrop-blur-md border-none shadow-xl h-full hover:shadow-2xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-slate-800 dark:text-white border-b border-slate-100 dark:border-white/5 pb-2">
            {category.titulo}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 pt-4">
          {category.habilidades.map((skill: any) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {skill.name}
                </span>
                <span className="text-xs font-bold text-[#63DEF1]">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                <motion.div
                  variants={barGrow}
                  custom={skill.level}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
});

const CertificationsSection = memo(function CertificationsSection({ certificates }: { certificates: string[] }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <Card className="bg-white dark:bg-slate-900/50 backdrop-blur-md border-none shadow-xl overflow-hidden">
        <div className="bg-[#63DEF1]/10 px-6 py-4 border-l-4 border-[#63DEF1]">
          <CardTitle className="text-xl text-slate-800 dark:text-white">
            Certificações & Cursos
          </CardTitle>
        </div>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-3">
            {certificates.map((cert, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-none px-4 py-2 text-sm hover:bg-[#63DEF1] hover:text-slate-900 transition-all duration-300 cursor-default"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
});