"use client";

import Header from "@/components/Header/Header";

import SobreMin from "@/components/SobreMin/SobreMin.js";
import MenuHamburguer from "@/components/MenuHamberguer/MenuHamberguer";
import Footer from "@/components/Footer/Footer.js";

export default function Home() {
  return (
    <div>
      <MenuHamburguer />
      <Header />
    
      <SobreMin />
      
      <Footer />
    </div>
  );
}
