import styles from "./Main.module.css";
import { Mail, phone, Instagram, Github, Linkedin } from "lucide-react";

function Main() {
  return (
    <div className={styles.fundo1} id="sobre">
      <h2 className={styles.titulo}>Sobre mim</h2>
      <div className={styles.alinhamento}>
       
          <div className={styles.minhahistoria}>
            <h2>Minha História</h2>
            <p>
              Olá! Sou Davi Dias, desenvolvedor front-end apaixonado por
              tecnologia. Atualmente curso Análise e Desenvolvimento de Sistemas
              e busco evoluir constantemente como profissional, com a meta de me
              tornar um desenvolvedor full stack. Acredito que a programação
              transforma ideias em soluções reais, e estou sempre em busca de
              novos desafios e aprendizado.
            </p>
             <br/>
            <p>
              Tenho experiência com HTML, CSS, JavaScript e Git, e estou
              expandindo meus conhecimentos em React, Node.js, PHP e bancos de
              dados. Meu objetivo é criar aplicações funcionais, eficientes e
              com design moderno, contribuindo para projetos que impactem
              positivamente as pessoas.
            </p>
          </div>

       
      </div>
    </div>
  );
}

export default Main;
