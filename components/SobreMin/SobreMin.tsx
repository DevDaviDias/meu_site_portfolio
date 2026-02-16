"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Code,
  Coffee,
  Music,
  Gamepad2
} from "lucide-react";

// Importando seus componentes de UI
import Titulo from "../ui/titulo";
import Subtitulo from "../ui/subtitulo";
import Interesses from "../ui/interesses";
import InfoItem from "./info";

function HeaderSection({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
}

export default function SobreMin() {
  return (
    <section id="sobre" className="w-full py-10 lg:ml-[288px] lg:w-[calc(100%-288px)] transition-all duration-300">

      {/* Alinhamento padronizado com o restante do site */}
      <div className="w-full px-4 md:pl-20 md:pr-10 max-w-[1440px]">

        {/* Cabeçalho da Seção */}
        <div className="mb-9">
          <HeaderSection title="Sobre mim" subtitle="" />
        </div>

        {/* Layout em Flex/Grid */}
        <div className="flex flex-col xl:flex-row gap-8 items-stretch">

          {/* COLUNA ESQUERDA: Minha História */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 p-8 md:p-10 rounded-2xl bg-white dark:bg-slate-900/50 border border-transparent hover:border-[#63DEF1]/30 shadow-xl transition-all duration-300 flex flex-col"
          >
            <Subtitulo subtitle="Minha História" />

            <div className="mt-6 space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
              <p>
                Sou Desenvolvedor Full Stack apaixonado por transformar ideias em soluções digitais de alto nível. Atualmente, curso <span className="text-[#63DEF1] font-bold">Análise e Desenvolvimento de Sistemas</span> e dedico meus dias a construir aplicações robustas utilizando <span className="text-[#63DEF1] font-bold">JavaScript, TypeScript, React e Node.js.</span>
              </p>

              <p>
                Meu foco está no desenvolvimento de ecossistemas completos, como o <span className="text-slate-900 dark:text-white font-medium">PinkLife</span> (SaaS de organização pessoal) e plataformas de ensino como o <span className="text-slate-900 dark:text-white font-medium">EMTI.dev</span>. Tenho experiência prática na integração de sistemas de pagamento com Stripe, bancos de dados SQL/NoSQL e na criação de interfaces que unem estética e performance.
              </p>

              <p>
                Além da técnica, priorizo <span className="text-[#63DEF1] font-bold">Clean Code e Design Patterns</span>, conceitos que aprimoro constantemente através de especializações avançadas. Meu objetivo é entregar softwares que não apenas funcionem perfeitamente, mas que gerem valor real para quem os utiliza.
              </p>
            </div>
          </motion.div>

          {/* COLUNA DIREITA: Info + Interesses */}
          <div className="w-full xl:w-[450px] flex flex-col gap-6">

            {/* Bloco: Informações Pessoais */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
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

            {/* Bloco: Interesses */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
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
  );
}