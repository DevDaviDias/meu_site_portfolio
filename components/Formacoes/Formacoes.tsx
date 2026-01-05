import Titulo from "../ui/titulo";
import Cardeducação from "../ui/Cardeducaçao";
import CardCertificacoes from "../ui/CardCertificacoes";
import { Icon } from "lucide-react";


export default function Formacoes() {
  return (
    <>
      <Titulo texto="Formações" id="formacoes"></Titulo>
      
      <h2 className="md:ml-[17.4em] mb-[1em] text-[1.4rem] text-slate-600 ">
        
        Educação normal</h2> 
      <Cardeducação
        titulo="Análise e desenvolvimento de sistemas"
        instituicao="Unopar"
        anoDeInicio="2024"
        anoConclusao="2026"
        descricao="Formação em análise e desenvolvimento de sistemas, com foco em programação e desenvolvimento web."
      ></Cardeducação>

      <Cardeducação
        titulo="Análise e desenvolvimento de sistemas"
        instituicao="IFSP"
        anoDeInicio="2021"
        anoConclusao="2024"
        descricao="Formação em análise e desenvolvimento de sistemas, com foco em programação e desenvolvimento web."
      ></Cardeducação>

      <Titulo texto="Cursos & Certificações" id="formacoes"></Titulo>
      
      <div className="flex alingn-center justify-start md:ml-[23.5em] gap-4 ">
        <CardCertificacoes
          titulo="Desenvolvedor Front-End"
          instituicao="IGTI"
          anoDeInicio="2023"
          anoConclusao="2024"
          descricao=""
        ></CardCertificacoes>
        <CardCertificacoes
          titulo="Desenvolvedor Web"
          instituicao="Udemy"
          anoDeInicio="2022"
          anoConclusao="2023"
          descricao=""
        ></CardCertificacoes>
      </div>
      <div className="flex alingn-center justify-start md:ml-[23.5em] gap-4 ">
      
        <CardCertificacoes
          titulo="Desenvolvedor Front-End"
          instituicao="IGTI"
          anoDeInicio="2023"
          anoConclusao="2024"
          descricao=""
        ></CardCertificacoes>
        <CardCertificacoes
          titulo="Desenvolvedor Web"
          instituicao="Udemy"
          anoDeInicio="2022"
          anoConclusao="2023"
          descricao=""
        ></CardCertificacoes>
      </div>
    </>
  );
}
