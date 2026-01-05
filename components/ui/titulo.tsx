type TituloProps = {
    texto: string;
};

export default function Titulo({ texto  }: TituloProps) {
    return (
    <h2 className="text-3xl font-normal text-slate-800 mb-6 pt-4 pl-4 lg:pl-[13em]">{texto}</h2>)
}