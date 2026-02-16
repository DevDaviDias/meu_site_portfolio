"use client";

import { useEffect, useState, memo } from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const fullText = "Full Stack ";

export default function Header() {
  return (
    <LazyMotion features={domAnimation}>
      <HeaderContent />
    </LazyMotion>
  );
}

const HeaderContent = memo(function HeaderContent() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval>;

    interval = setInterval(() => {
      setText((prev) => {
        if (!deleting) {
          const next = fullText.slice(0, prev.length + 1);
          if (next === fullText) setDeleting(true);
          return next;
        } else {
          const next = fullText.slice(0, prev.length - 1);
          if (next === "") setDeleting(false);
          return next;
        }
      });
    }, deleting ? 90 : 160);

    return () => clearInterval(interval);
  }, [deleting]);

  return (
    <header
      className="w-full h-[25dvh] min-h-[180px] flex items-center
        bg-gradient-to-tr from-[#07B7D5] via-[#1BCBE7] to-[#0CBDDA]
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
        border-b border-white/10"
    >
      <div className="px-8 md:px-16 lg:ml-[288px] w-full flex flex-col justify-center">
        <motion.h1
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.35 }}
          className="text-[#f8f8ff] font-sans text-[2.4em] lg:text-[3.5em] font-bold leading-tight tracking-tight"
        >
          Davi Dias
        </motion.h1>

        <motion.h2
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.35, delay: 0.1 }}
          className="text-[#f0f6fc] font-sans text-[1.2em] lg:text-[1.8em] mt-1 flex items-center"
        >
          Developer{" "}
          <span className="relative inline-block font-light italic ml-2 text-[#a2def0]">
            {text}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#a2def0] shadow-[0_0_10px_#a2def0] animate-pulse" />
          </span>

          {/* Cursor piscando com CSS (menos custo que motion) */}
          <span className="inline-block ml-1 font-normal text-[#a2def0] animate-pulse">
            |
          </span>
        </motion.h2>
      </div>
    </header>
  );
});