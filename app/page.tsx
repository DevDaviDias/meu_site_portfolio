"use client";

import Header from "@/components/Header/Header";
import SobreMin from "@/components/SobreMin/SobreMin.js";
import MenuHamburguer from "@/components/MenuHamberguer/MenuHamberguer";
import MinhasSkills from "@/components/MinhasSkills/MinhasSkill";
import Progetos from "@/components/Projetos/Projetos";
import Footer from "@/components/Footer/Footer";
import Formacoes from "@/components/Formacoes/Formacoes";

export default function Home() {
  return (
    <div>
      <MenuHamburguer />
      <Header />
    
      <SobreMin />
     
      <MinhasSkills />

      <Progetos />
      <Footer />
    </div>
  );
}
