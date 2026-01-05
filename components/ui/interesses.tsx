
type intesressesProps = {
 icon: React.ReactNode;
  title: string;
  interesse: string;
};

export default function intesresses({ title, interesse , icon}: intesressesProps) {
  return (
    <>
      <div className="  w-49 h-25 rounded-lg flex flex-col items-center  bg-[#EDFAFF] text-[#0891B2] p-4   hover:shadow-xl
  hover:scale-10
  transition-all
  duration-200">
        <div className="icon">{icon}</div>
        <div className="text-sm font-bold">{title}</div>
        <div className="text-sm text-center">  {interesse}</div>
      </div>
    </>
  );
}
