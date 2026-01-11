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
import { motion } from "framer-motion";

function Main() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.fundo1} id="sobre">
          <h2 className={styles.titulo}>Sobre mim</h2>
          <div className={styles.alinhamento}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className={styles.conteudoMain1}>
                <div className={styles.minhahistoria}>
                  <Subtitulo subtitle="Minha História"></Subtitulo>
                  <p>
                    Sou Desenvolvedor de Software, com foco em desenvolvimento
                    web utilizando JavaScript, TypeScript, React.js e Node.js.
                    Atuo na criação de aplicações, sites e automações, aplicando
                    boas práticas de código, organização de projetos e
                    versionamento com Git.
                  </p>
                  <br />
                  <p>
                    Possuo experiência no desenvolvimento de soluções web
                    modernas, consumo de APIs REST, componentes reutilizáveis e
                    integração entre frontend e backend. Estou em constante
                    evolução técnica, com foco na entrega de soluções
                    eficientes, escaláveis e de fácil manutenção.
                  </p>
                  <br />
                  <p>
                    Busco oportunidades para atuar em ambientes colaborativos,
                    onde seja possível aplicar meus conhecimentos, aprender
                    continuamente e contribuir para o desenvolvimento de
                    produtos de alto impacto, alinhados às necessidades do
                    negócio e à melhor experiência do usuário.
                  </p>
                  
                </div>
              </div>
            </motion.div>

            <div className={styles.alinhamento2}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
              >
                <div className={styles.interesses}>
                  <Subtitulo subtitle="Interesses"></Subtitulo>
                  <div className="flex gap-4 ">
                    <div className="flex gap-4 flex-col">
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
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Main;
