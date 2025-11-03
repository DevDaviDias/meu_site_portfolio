import styles from "../styles/Main.module.css";

function Main() {
  return (
    <div className={styles.fundo1} id="sobre">
      <h2 className={styles.titulo}>Sobre mim</h2>
      <div className={styles.alinhamento}>
        <div className={styles.conteudoMain1}>
          <div className={styles.minhahistoria}>
            <h2>Minha História</h2>
            <p>
              Sou Davi Dias, apaixonado por tecnologia e desenvolvimento web.
              Atualmente curso Análise e Desenvolvimento de Sistemas, buscando
              evoluir diariamente como desenvolvedor front-end, com o objetivo
              de me tornar full stack. Acredito que a programação é uma
              ferramenta poderosa para transformar ideias em soluções reais, e
              estou sempre em busca de novos desafios e aprendizado.
            </p>
          </div>
        </div>

        <div className={styles.alinhamento2}>
          <div className={styles.infopessoal}>
            <h2>Informações Pessoais</h2>
            <p>Localização</p>
            <p>São Paulo, SP - Brasil</p>
            <p>Idade</p>
            <p>25 anos</p>
            <p>Experiência</p>
            <p>5+ anos</p>
            <p>Cafés por dia</p>
            <p>∞</p>
          </div>

          <div className={styles.interesses}>
            <h2>Interesses</h2>
            <p>Programação</p>
            <p>Desenvolvimento web e mobile</p>

            <p>Música</p>
            <p>Rock, eletrônica e lo-fi</p>

            <p>Games</p>
            <p>RPG e estratégia</p>

            <p>Café</p>
            <p>Especialidade em grãos especiais</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
