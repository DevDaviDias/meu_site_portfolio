"use client";

import { useState } from "react";

import Header from "@/components/Header/Header";
import SobreMin from "@/components/SobreMin/SobreMin";
import MenuHamburguer from "@/components/MenuHamburguer/MenuHamburguer"; 
import MinhasSkills from "@/components/MinhasSkills/MinhasSkill";
import Projetos from "@/components/Projetos/Projetos";
import Formacoes from "@/components/Formacoes/Formacoes";

export default function Home() {
  const [sessao, setSessao] = useState("projetos");

  function handleSessao(sessaoEscolhida: string) {
    setSessao(sessaoEscolhida);
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <MenuHamburguer onChangeSessao={handleSessao} />

      {/* Container Principal */}
      <main className="flex flex-col w-full">
        <Header />
        
        
        <section className="flex-1">
          {sessao === "sobre" && <SobreMin />}
          {sessao === "formacoes" && <Formacoes />}
          {sessao === "skills" && <MinhasSkills />}
          {sessao === "projetos" && <Projetos />}
        </section>
      </main>
    </div>
  );
}