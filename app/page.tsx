"use client";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

import MenuHamburguer from "../components/MenuHamberguer/MenuHamberguer";
import Footer from "../components/Footer/Footer.js";

export default function Home() {
  return (
    <div>
      <MenuHamburguer />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
