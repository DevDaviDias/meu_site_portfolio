"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const fullText = "Full Stack ";

  useEffect(() => {
    // Tipagem do timer para evitar conflitos entre Node e Browser
    let timeout: ReturnType<typeof setTimeout>;

    const updateText = () => {
      setText((prev) => {
        let nextText;
        if (!deleting) {
          nextText = fullText.slice(0, prev.length + 1);
          if (nextText === fullText) {
            // Pausa quando termina de escrever
            timeout = setTimeout(updateText, 1500);
            setDeleting(true); // Começa a deletar após a pausa
            return prev;
          }
        } else {
          nextText = fullText.slice(0, prev.length - 1);
          if (nextText === "") {
            setDeleting(false);
          }
        }
        return nextText;
      });

      const speed = deleting ? 100 : 250;
      timeout = setTimeout(updateText, speed);
    };

    timeout = setTimeout(updateText, 250);
    return () => clearTimeout(timeout);
  }, [deleting]);

  return (
    <header 
      className="w-full h-[25dvh] min-h-[180px] flex items-center transition-all duration-500
        bg-gradient-to-tr from-[#07B7D5] via-[#1BCBE7] to-[#0CBDDA]
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
        border-b border-white/10"
    >
      {/* Ajustado lg:ml para 288px para alinhar com sua Sidebar */}
      <div className="px-8 md:px-16 lg:ml-[288px] w-full flex flex-col justify-center">
        
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[#f8f8ff] font-sans text-[2.4em] lg:text-[3.5em] font-bold leading-tight tracking-tight"
        >
          Davi Dias
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#f0f6fc] font-sans text-[1.2em] lg:text-[1.8em] mt-1 flex items-center"
        >
          Developer{" "}
          <span className="relative inline-block font-light italic ml-2 text-[#a2def0]">
            {text}
            {/* Efeito Typing Underline */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#a2def0] shadow-[0_0_10px_#a2def0] animate-pulse" />
          </span>

          {/* Cursor Piscante */}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
            className="inline-block ml-1 font-normal text-[#a2def0]"
          >
            |
          </motion.span>
        </motion.h2>

      </div>
    </header>
  );
}