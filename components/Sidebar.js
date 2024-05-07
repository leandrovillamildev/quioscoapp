import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useQuiosco();

  return (
    <>
    
    <div className="py-12">
      <Image
        width={350}
        height={204}
        priority={true}
        src="/assets/img/logo.svg"
        alt="imagen logotipo"
      />
    </div>

      <nav className="mt-1/2">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
