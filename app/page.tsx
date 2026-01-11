"use client";

import { useState } from "react";

import Header from "@/components/Header/Header";
import SobreMin from "@/components/SobreMin/SobreMin.js";
import MenuHamburguer from "@/components/MenuHamberguer/MenuHamberguer";
import MinhasSkills from "@/components/MinhasSkills/MinhasSkill";
import Progetos from "@/components/Projetos/Projetos";
import Formacoes from "@/components/Formacoes/Formacoes"


export default function Home() {
 const [sessao , setSessao] = useState("progets");

 function headleSessao(sessaoEscolhida: string){
    setSessao(sessaoEscolhida);
 }

  return (
    <div>
      <Header />
      <MenuHamburguer onChangeSessao={headleSessao} />
  
     {sessao === "sobre" &&<SobreMin />}
     {sessao === "formacoes" && <Formacoes />}
     {sessao === "skills" && <MinhasSkills />}
     {sessao === "progets" && <Progetos />}
     
    </div>
    
  );
}
