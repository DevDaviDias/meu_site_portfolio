import styles from "../styles/Section3.module.css";

function Section() {
  const Projetos = [
    {
      id: 1,
      titulo: "Verifica Boletos",
      descricao: "Plataforma feita com Next, React e Postgres.",
      link: "https://github.com/DevDaviDias",
      imagem: "/img/projeto1.png"
    },
    {
      id: 2,
      titulo: "Site de Adoção",
      descricao: "Plataforma para adoção de pets com  JS, php e mysql.",
      link: "https://bit.ly/DevDaviDias",
      imagem: "/img/projeto2.png"
    }
   ,{
      id: 3,
      titulo: "Projeto com Bootstrap",
      descricao: "Meu primeiro projeto usando Bootstrap.",
      link: "https://github.com/DevDaviDias",
      imagem: "/img/projeto3.png"
    }  ,{
      id: 3,
      titulo: "Projeto com Bootstrap",
      descricao: "Meu primeiro projeto usando Bootstrap.",
      link: "https://github.com/DevDaviDias",
      imagem: "/img/projeto3.png"
    }
  ];

  return (
    <div className={styles.fundo3} id="projetos">
      <h2 className={styles.titulo3}>Meus Projetos</h2>

      <div className={styles.grid}>
        {Projetos.map((projeto) => (
          <div key={projeto.id} className={styles.card}>
            <img src={projeto.imagem} alt={projeto.titulo} className={styles.imagem} />
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noreferrer">
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
