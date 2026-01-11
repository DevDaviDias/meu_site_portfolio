import Titulo from "../ui/titulo";
import Cardeducação from "../ui/Cardeducaçao";
import CardCertificacoes from "../ui/CardCertificacoes";
import {motion} from "framer-motion"; 

const formações = [
  {
    titulo: "Análise e desenvolvimento de sistemas",
    instituicao: "Unopar",
    anoDeInicio: "2024",
    anoConclusao: "2026",
    descricao:
      "Formação em análise e desenvolvimento de sistemas, com foco em programação e desenvolvimento web.",
  }
];
const certificacoes = [
  {
    titulo: "JavaScript e TypeScript – Full Stack",
    instituicao: "Udemy (Luiz Otávio Miranda)",
    anoDeInicio: "2023",
    anoConclusao: "2024",
    descricao:
      "JavaScript e TypeScript no frontend e backend com Node.js, Express, APIs REST, React, Hooks, Redux e Design Patterns.",
  },
  {
    titulo: "Desenvolvimento Web Avançado",
    instituicao: "Felipe Deschamps",
    anoDeInicio: "2025",
    anoConclusao: "Em andamento",
    descricao:
      "Boas práticas, arquitetura e visão profissional de desenvolvimento web.",
  },
  {
    titulo: "Git e GitHub: Compartilhando e colaborando em projetos",
    instituicao: "Alura",
    anoDeInicio: "2024",
    anoConclusao: "2024",
    descricao:
      "Controle de versão, fluxo de trabalho e colaboração com Git e GitHub.",
  },
  {
    titulo: "Java – Fundamentos, POO, Collections e APIs REST",
    instituicao: "IFSulflix (Prof. Isidro)",
    anoDeInicio: "2023",
    anoConclusao: "2023",
    descricao:
      "Fundamentos de Java, orientação a objetos, collections e criação de APIs REST.",
  },
];

export default function Formacoes() {
  return (
    <>
    <motion.div
        initial={{ opacity: 0, y:20 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 0.6 }}
      >
      <h2 id="formacoes" className=" md:mt-[1em]"></h2>
      <Titulo texto="Formações"></Titulo>

      <h2 className="ml-[1em] md:ml-[17.4em] mb-[1em] text-[1.4rem] text-slate-600 ">
        Educação normal
      </h2>{formações.map((formação,index) => (
      <Cardeducação
        key={index}
        titulo={formação.titulo}
        instituicao={formação.instituicao}
        anoDeInicio={formação.anoDeInicio}
        anoConclusao={formação.anoConclusao}
        descricao={formação.descricao}
      />))}
</motion.div>

 <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
      <Titulo texto="Cursos & Certificações"></Titulo>

      <div className="flex flex-wrap items-center justify-start ml-[2em] md:ml-[23.5em] gap-4">
        {certificacoes.map((cert, index) => (
          <CardCertificacoes
            key={index}
            titulo={cert.titulo}
            instituicao={cert.instituicao}
            anoDeInicio={cert.anoDeInicio}
            anoConclusao={cert.anoConclusao}
            descricao={cert.descricao}
          />
        ))}
      </div>
      </motion.div>
    </>
  );
}
