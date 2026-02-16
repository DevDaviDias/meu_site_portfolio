"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Github, Linkedin, Code, Gamepad2, Music, Book  } from "lucide-react";
import Titulo from "@/components/Titulo/Titulo";
import Subtitulo from "@/components/Subtitulo/Subtitulo";
import Interesses from "@/components/Interesses/Interesses";

export default function SobreMim() {
  const meusInteresses = [
    { icon: <Code size={24} />, title: "Tecnologia", desc: "Sempre estudando novas stacks" },
    { icon: <Gamepad2 size={24} />, title: "Games", desc: "RPGs e estratégia" },
    { icon: <Music size={24} />, title: "Música", desc: "Lofi para concentrar" },
    { icon: <Book size={24} />, title: "Leitura", desc: "Livros de ficção e tech" },
  ];

  return (
    <section id="sobre" className="w-full py-12 transition-colors duration-300">
      {/* Título Principal */}
      <Titulo texto="Sobre mim" />

      <div className="container mx-auto px-4 lg:ml-[288px] lg:w-[calc(100%-288px)]">
        <div className="flex flex-col xl:flex-row gap-8">
          
          {/* Coluna da História */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-card text-card-foreground p-8 rounded-2xl shadow-lg border border-border"
          >
            <Subtitulo subtitle="Minha História" />
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Olá! Sou <span className="text-cyan-500 font-bold">Davi Dias</span>, desenvolvedor front-end apaixonado por
                tecnologia. Atualmente curso Análise e Desenvolvimento de Sistemas
                e busco evoluir constantemente como profissional, com a meta de me
                tornar um desenvolvedor full stack.
              </p>
              <p>
                Acredito que a programação transforma ideias em soluções reais, e estou sempre em busca de
                novos desafios e aprendizado. Tenho experiência com HTML, CSS, JavaScript e Git, e estou
                expandindo meus conhecimentos em React, Node.js, PHP e bancos de dados.
              </p>
              <p>
                Meu objetivo é criar aplicações funcionais, eficientes e
                com design moderno, contribuindo para projetos que impactem
                positivamente as pessoas.
              </p>
            </div>
          </motion.div>

          {/* Coluna de Contato e Interesses */}
          <div className="flex flex-col gap-6 w-full xl:w-[400px]">
            
            {/* Box de Contatos */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card text-card-foreground p-6 rounded-2xl shadow-md border border-border"
            >
              <Subtitulo subtitle="Informações de Contato" />
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 hover:text-cyan-500 transition-colors">
                  <Mail size={20} className="text-cyan-500" />
                  <span className="text-sm">davi.dias@email.com</span>
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-cyan-500 transition-colors">
                  <Github size={20} className="text-cyan-500" />
                  <span className="text-sm">github.com/davidias</span>
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-cyan-500 transition-colors">
                  <Linkedin size={20} className="text-cyan-500" />
                  <span className="text-sm">linkedin.com/in/davidias</span>
                </a>
              </div>
            </motion.div>

            {/* Grid de Interesses */}
            <div className="grid grid-cols-2 gap-4">
              {meusInteresses.map((item, index) => (
                <Interesses 
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  interesse={item.desc}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}