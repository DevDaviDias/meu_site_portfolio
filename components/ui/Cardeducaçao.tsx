import { Icon } from "lucide-react";

type Porps = {
    titulo: string;
    instituicao: string;
    anoDeInicio: string;
    anoConclusao: string;
    descricao: string;
    destaques?: string[];
    icon?: React.ReactNode;
    icon2?: React.ReactNode;
}

export default function Cardeducação({titulo, instituicao,icon, anoConclusao, descricao, destaques, anoDeInicio}:Porps) {
    return(
        <div className="bg-[#F8FEFF] w-[72em] md:ml-[23.5em] rounded-lg p-4 mb-4 shadow-md hover:shadow-lg transition-shadow duration-300 ">
         <h2 className="">{titulo}</h2>
            <h3  className="">{instituicao}</h3>
            <h3  className="">{icon} {anoDeInicio } -{anoConclusao}</h3>
            <p  className="">{descricao}</p>
            { destaques && (
                <ul>
                    {destaques.map((destaque, index) => (
                        <li key={index}>{destaque}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}   