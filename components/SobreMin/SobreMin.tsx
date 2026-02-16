"use client";

import { memo } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import {
  Mail,
  MapPin,
  Code,
  Coffee,
  Music,
  Gamepad2
} from "lucide-react";

import Titulo from "../ui/titulo";
import Subtitulo from "../ui/subtitulo";
import Interesses from "../ui/interesses";
import InfoItem from "./info";

// Variants reutilizáveis (menos custo de render)
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

const HeaderSection = memo(function HeaderSection({
  title,
  subtitle
}: { title: string; subtitle: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
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

export default function SobreMin() {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="sobre"
        className="w-full py-10 lg:ml-[288px] lg:w-[calc(100%-288px)]"
      >
        <div className="w-full px-4 md:pl-20 md:pr-10 max-w-[1440px]">

          <div className="mb-9">
            <HeaderSection title="Sobre mim" subtitle="" />
          </div>

          <div className="flex flex-col xl:flex-row gap-8 items-stretch">

            {/* COLUNA ESQUERDA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="flex-1 p-8 md:p-10 rounded-2xl bg-white dark:bg-slate-900/50 border border-transparent hover:border-[#63DEF1]/30 shadow-xl transition-all duration-300 flex flex-col"
            >
              <Subtitulo subtitle="Minha História" />

              <div className="mt-6 space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                <p>
                  Sou Desenvolvedor Full Stack apaixonado por transformar ideias em soluções digitais de alto nível. Atualmente, curso{" "}
                  <span className="text-[#63DEF1] font-bold">Análise e Desenvolvimento de Sistemas</span>{" "}
                  e dedico meus dias a construir aplicações robustas utilizando{" "}
                  <span className="text-[#63DEF1] font-bold">JavaScript, TypeScript, React e Node.js.</span>
                </p>

                <p>
                  Meu foco está no desenvolvimento de ecossistemas completos, como o{" "}
                  <span className="text-slate-900 dark:text-white font-medium">PinkLife</span>{" "}
                  e plataformas de ensino como o{" "}
                  <span className="text-slate-900 dark:text-white font-medium">EMTI.dev</span>.
                </p>

                <p>
                  Além da técnica, priorizo{" "}
                  <span className="text-[#63DEF1] font-bold">Clean Code e Design Patterns</span>.
                </p>
              </div>
            </motion.div>

            {/* COLUNA DIREITA */}
            <div className="w-full xl:w-[450px] flex flex-col gap-6">

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-transparent hover:border-[#63DEF1]/30 shadow-lg transition-all duration-300"
              >
                <Subtitulo subtitle="Informações Pessoais" />
                <div className="space-y-4 mt-6">
                  <InfoItem icon={<Mail size={18} className="text-[#63DEF1]" />} text="Email" complemento="devdavidias@gmail.com" />
                  <InfoItem icon={<MapPin size={18} className="text-[#63DEF1]" />} text="Localização" complemento="Belo Horizonte, MG" />
                  <InfoItem icon={<Code size={18} className="text-[#63DEF1]" />} text="Experiência" complemento="1 ano" />
                  <InfoItem icon={<Coffee size={18} className="text-[#63DEF1]" />} text="Status" complemento="Focado em Projetos" />
                </div>
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-transparent hover:border-[#63DEF1]/30 shadow-lg transition-all duration-300 flex-1"
              >
                <Subtitulo subtitle="Interesses" />
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Interesses icon={<Code size={20} className="text-[#63DEF1]" />} title="Dev" interesse="Web Apps" />
                  <Interesses icon={<Gamepad2 size={20} className="text-[#63DEF1]" />} title="Games" interesse="RPG" />
                  <Interesses icon={<Music size={20} className="text-[#63DEF1]" />} title="Música" interesse="Lo-fi" />
                  <Interesses icon={<Coffee size={20} className="text-[#63DEF1]" />} title="Café" interesse="Especiais" />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}