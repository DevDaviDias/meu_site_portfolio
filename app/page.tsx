"use client";

import Header from "../components/Header";
import Main from "../components/Main";
import Section from "../components/Section3";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import MenuHamburguer from "../components/MenuHamberguer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <MenuHamburguer />
      <Header />
      <Main />
      <Section1 />
      <Section2 />
      <Section />
      <Footer />
    </div>
  );
}
