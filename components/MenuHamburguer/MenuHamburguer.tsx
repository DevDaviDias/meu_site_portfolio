"use client";

import { useState, useEffect, useCallback } from "react";
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

  // 🔹 Carrega tema inicial corretamente
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (theme === "dark" || (!theme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // 🔹 Toggle do tema sem bugar
  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;

      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return next;
    });
  }, []);

  // 🔹 Detecta desktop sem travar render
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      setAberto(desktop);
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
      {!isDesktop && (
        <button
          onClick={() => setAberto(!aberto)}
          className={`fixed top-4 z-[100] p-3 rounded-lg shadow-lg transition-all duration-300
            ${aberto
              ? "left-[calc(80%+1rem)] sm:left-[320px] bg-slate-800 dark:bg-white text-white dark:text-slate-900"
              : "right-4 bg-[#63DEF1] text-slate-900"
            }`}
        >
          {aberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      <AnimatePresence>
        {!isDesktop && aberto && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setAberto(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
            />

            <motion.aside
              initial="fechado"
              animate="aberto"
              exit="fechado"
              variants={sidebarVariants}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 z-[90] w-[80%] max-w-[300px] shadow-2xl border-r
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

      {isDesktop && (
        <aside className="fixed inset-y-0 left-0  w-72 shadow-2xl border-r
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

function SidebarContent({ isDark, toggleTheme, onChangeSessao, setAberto, isDesktop }: any) {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="flex flex-col items-center pt-12 pb-4 px-4 text-center">
        <div className="relative w-24 h-24 mb-4">
          <Image src="/img.davi.jpg" alt="Davi Dias" fill className="rounded-full object-cover p-1" priority />
        </div>
        <h2 className="text-xl font-bold text-white">Davi Dias</h2>
      </div>

      <div className="flex justify-center gap-5 pb-8">
        <a href="https://www.instagram.com/codecooperx" className="text-white hover:text-pink-500"><Instagram size={22} /></a>
        <a href="https://github.com/DevDaviDias" className="text-white hover:text-slate-900 dark:hover:text-[#63DEF1]"><Github size={22} /></a>
        <a href="https://www.linkedin.com/in/devdavidias/" className="text-white hover:text-blue-700"><Linkedin size={22} /></a>
        <a href="mailto:devdavidias@gmail.com" className="text-white hover:text-red-500"><Mail size={22} /></a>
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
            className="flex items-center gap-4 w-full px-4 py-3 text-white/90 hover:bg-white/20 rounded-xl transition-all"
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 mt-auto bg-black/10 border-t border-white/10">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all mb-4"
        >
          {isDark ? <><Sun size={18} /> Modo Claro</> : <><Moon size={18} /> Modo Escuro</>}
        </button>
        <p className="text-[10px] text-center text-white/40 uppercase tracking-widest font-bold">
          © 2026 Davi Dias
        </p>
      </div>
    </div>
  );
}