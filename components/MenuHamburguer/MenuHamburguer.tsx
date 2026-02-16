"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sun,
  Moon,
  X,
  Menu,
  User,
  GraduationCap,
  Code,
  FolderOpen,
  Instagram,
  Github,
  Linkedin,
  Mail
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuHamburguerProps {
  onChangeSessao: (id: string) => void;
}

export default function MenuHamburguer({ onChangeSessao }: MenuHamburguerProps) {
  const [aberto, setAberto] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // 🔹 Tema inicial (sem bug de hidratação)
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = theme === "dark" || (!theme && prefersDark);

    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  // 🔹 Toggle do tema (estável)
  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  // 🔹 Detecta desktop e controla abertura
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      setAberto(desktop); // desktop sempre aberto
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarVariants = {
    aberto: { x: 0, opacity: 1 },
    fechado: { x: "-100%", opacity: 0 },
  };

  return (
    <>
      {/* BOTÃO MOBILE */}
      {!isDesktop && (
        <button
          onClick={() => setAberto((v) => !v)}
          className={`fixed top-4 z-[100] p-3 transition-all duration-500 rounded-lg shadow-lg
            ${aberto 
              ? "left-[calc(80%+1rem)] sm:left-[320px] bg-slate-800 dark:bg-white text-white dark:text-slate-900" 
              : "right-4 bg-[#63DEF1] text-slate-900" 
            }`}
        >
          {aberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* MOBILE */}
      <AnimatePresence>
        {!isDesktop && aberto && (
          <>
            <motion.div
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-10%" }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => setAberto(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
            />

            <motion.aside
              initial="fechado"
              animate="aberto"
              exit="fechado"
              variants={sidebarVariants}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 left-0 h-[100dvh] w-[80%] max-w-[300px] z-[90] shadow-2xl border-r
                bg-gradient-to-b from-[#1ecfea] via-[#16c6e3] to-[#09b9d6] 
                dark:from-slate-950 dark:via-slate-950 dark:to-slate-950
                border-white/20 dark:border-white/10"
            >
              <SidebarContent
                isDark={isDark}
                toggleTheme={toggleTheme}
                onChangeSessao={onChangeSessao}
                setAberto={setAberto}
                isDesktop={isDesktop}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* DESKTOP FIXO */}
      {isDesktop && (
        <aside
          className="fixed top-0 left-0 h-[100dvh] w-72 z-[90] shadow-2xl border-r
            bg-gradient-to-b from-[#1ecfea] via-[#16c6e3] to-[#09b9d6] 
            dark:from-slate-950 dark:via-slate-950 dark:to-slate-950
            border-white/20 dark:border-white/10"
        >
          <SidebarContent
            isDark={isDark}
            toggleTheme={toggleTheme}
            onChangeSessao={onChangeSessao}
            setAberto={setAberto}
            isDesktop={isDesktop}
          />
        </aside>
      )}
    </>
  );
}

// 🔽 Conteúdo interno
function SidebarContent({ isDark, toggleTheme, onChangeSessao, setAberto, isDesktop }: any) {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="flex flex-col items-center pt-12 pb-4 px-4 text-center">
        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-[#63DEF1] animate-pulse"></div>
          <Image src="/img.davi.jpg" alt="Davi Dias" fill className="rounded-full object-cover p-1" priority />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Davi Dias</h2>
      </div>

      <div className="flex justify-center gap-5 pb-8">
        <a href="https://www.linkedin.com/in/devdavidias/" className="text-white hover:text-pink-500 transition-all transform hover:scale-110"><Instagram size={22} /></a>
        <a href="https://github.com/DevDaviDias" className="text-white hover:text-slate-900 dark:hover:text-[#63DEF1] transition-all transform hover:scale-110"><Github size={22} /></a>
        <a href="https://www.instagram.com/codecooperx" className="text-white hover:text-blue-700 transition-all transform hover:scale-110"><Linkedin size={22} /></a>
        <a href="mailto:devdavidias@gmail.com" className="text-white hover:text-red-500 transition-all transform hover:scale-110"><Mail size={22} /></a>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {[
          { id: "sobre", label: "Sobre mim", icon: User },
          { id: "formacoes", label: "Formações", icon: GraduationCap },
          { id: "skills", label: "Minhas Skills", icon: Code },
          { id: "projetos", label: "Meus Projetos", icon: FolderOpen },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => { onChangeSessao(item.id); if (!isDesktop) setAberto(false); }}
            className="flex items-center gap-4 w-full px-4 py-3 text-white/90 hover:bg-white/20 dark:hover:bg-white/5 rounded-xl transition-all group text-left"
          >
            <item.icon size={20} className="group-hover:scale-110 transition-transform" />
            <span className="font-medium text-lg">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 mt-auto bg-black/10 dark:bg-black/40 border-t border-white/10">
        <button onClick={toggleTheme} className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all mb-4 border border-white/20">
          {isDark ? <><Sun size={18} className="text-yellow-400" /> Modo Claro</> : <><Moon size={18} className="text-blue-300" /> Modo Escuro</>}
        </button>
        <p className="text-[10px] text-center text-white/40 uppercase tracking-widest font-bold">
          © 2026 Davi Dias
        </p>
      </div>
    </div>
  );
}