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
            <br/>

            <p>
              Além do desenvolvimento, leciono programação e robótica, o que
              fortalece minhas habilidades de comunicação, didática e trabalho
              em equipe. Estou aberto a oportunidades que me permitam aplicar
              meus conhecimentos, aprender e crescer como desenvolvedor.
            </p>
          </div>
        </div>

        <div className={styles.alinhamento2}>
          <div className={styles.infopessoal}>
            <h2>Informações Pessoais</h2>
            <p>Localização</p>
            <p>belo Horizonte, MG - Brasil</p>
            <p>Idade</p>
            <p>27 anos</p>
            <p>Experiência</p>
            <p>2 anos</p>
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
