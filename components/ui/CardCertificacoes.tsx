import { div } from "framer-motion/client";

type Porps = {
  titulo: string;
  instituicao: string;
  anoDeInicio: string;
  anoConclusao: string;
  descricao: string;
};

export default function CardCertificacoes({
  titulo,
  instituicao,
  anoConclusao,
  anoDeInicio,
}: Porps) {
  return (
    
      <div className="bg-[#F8FEFF] w-[35em] rounded-lg p-4 mb-4 shadow-md hover:shadow-lg transition-shadow duration-300 ">
        <h2 className="">{titulo}</h2>
        <h3 className="">{instituicao}</h3>
        <h3 className="">
          {anoDeInicio} -{anoConclusao}
        </h3>
      </div>
    
  );
}
