import styles from "./SobreMin.module.css";
import {
  Mail,
  phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Coffee,
  Music,
  Gamepad2,
} from "lucide-react";
import Info from "./info";
import Subtitulo from "../ui/subtitulo";
import Intesresses from "../ui/interesses";
import Titulo from "../ui/titulo";

function Main() {
  return (
    <div className={styles.fundo1} id="sobre">
      <h2 className={styles.titulo}>Sobre mim</h2>
      <div className={styles.alinhamento}>
        <div className={styles.conteudoMain1}>
          <div className={styles.minhahistoria}>
            <Subtitulo subtitle="Minha História"></Subtitulo>
            <p>
              Olá! Sou Davi Dias, desenvolvedor front-end apaixonado por
              tecnologia. Atualmente curso Análise e Desenvolvimento de Sistemas
              e busco evoluir constantemente como profissional, com a meta de me
              tornar um desenvolvedor full stack. Acredito que a programação
              transforma ideias em soluções reais, e estou sempre em busca de
              novos desafios e aprendizado.
            </p>
            <br />
            <p>
              Tenho experiência com HTML, CSS, JavaScript e Git, e estou
              expandindo meus conhecimentos em React, Node.js, PHP e bancos de
              dados. Meu objetivo é criar aplicações funcionais, eficientes e
              com design moderno, contribuindo para projetos que impactem
              positivamente as pessoas.
            </p>
            <br />

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
            <Subtitulo subtitle="Informações Pessoais"></Subtitulo>
            <Info
              icon={<Mail />}
              text="Email"
              complemento="devdavidias@gmail.com"
            ></Info>
            <Info
              icon={<MapPin />}
              text="Localização"
              complemento="belo Horizonte, MG - Brasil"
            ></Info>
            <Info icon={<Code />} text="Experiência" complemento="1 ano">
              {" "}
            </Info>
            <Info
              icon={<Coffee />}
              text="Cafés por dia"
              complemento="infinite"
            ></Info>
          </div>

          <div className={styles.interesses}>
            <Subtitulo subtitle="Interesses"></Subtitulo>
            <div className="flex gap-4 ">
              <div className="flex gap-4 flex-col" >
                <Intesresses
                icon={<Code />}
                  title="Programação"
                  interesse="Desenvolvimento web e mobile"
                ></Intesresses>
                <Intesresses
                icon={<Music />}
                  title="Música"
                  interesse="Rock, eletrônica e lo-fi"
                ></Intesresses>
              </div>
              <div className="flex gap-4 flex-col ">
                <Intesresses
                icon={<Gamepad2 />}
                  title="Games"
                  interesse="RPG e estratégia"
                ></Intesresses>
                <Intesresses
                icon={<Coffee />}
                  title="Programação"
                  interesse="Especialidade em grãos especiais"
                ></Intesresses>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
