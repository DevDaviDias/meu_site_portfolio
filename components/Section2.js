import React from "react";
import styles from "../styles/Section2.module.css";

const cursos = [
  {
    id: 1,
    image: "/img/html-css.jpg",
    title: "HTML e CSS: Responsividade com Mobile First",
    description: "Curso completo de responsividade na Alura.",
    link: "https://cursos.alura.com.br",
  },
  {
    id: 2,
    image: "/img/js.jpg",
    title: "JavaScript e HTML: Desenvolva um jogo",
    description: "Aprenda lógica de programação com JS e HTML.",
    link: "https://cursos.alura.com.br",
  },
];

export default function Section2() {
  return (
    <div className={styles.fundo2} id="cursos">
      <div className={styles.conteudoSection2}>

        <h2 className={styles.titulo}>Meus Cursos e Certificados</h2>
        <div className={styles.grid}>
          {cursos.map(({ id, image, title, description, link }) => (
            <div key={id} className={styles.card}>
              <img src={image} alt={title} className={styles.imagem} />
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={link} target="_blank" rel="noreferrer">
                Ver Curso/Certificado
              </a>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
