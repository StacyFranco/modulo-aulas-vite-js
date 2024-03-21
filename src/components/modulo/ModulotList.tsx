import { useEffect, useState } from "react";
import emptyIcon from '../../assets/images/empty_list.svg';
import { ModuloServices } from "../../services/ModuloServices";
import { ModuloAulasPicker } from "./ModuloAulasPicker";


const moduloServices = new ModuloServices();

type ModuloListProps = {
    setLink(s: string): void
}

const sortFunction: any = ((a: any, b:any) => {
    const nameA = a.nome.toUpperCase(); // ignore upper and lowercase
    const nameB = b.nome.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

export const ModuloList: React.FC<ModuloListProps> = ({ setLink }) => {

    const [modulos, setModulos] = useState([]);


    const [selected, setSelected] = useState<string | null>(null);

    const getModulos = async () => {
        try {
            const result = await moduloServices.getModulos();
            if (result?.data) {
                result.data.sort(sortFunction)
                setModulos(result.data);
            }
        } catch (e) {
            console.log('Ocorreu erro ao listar os módulos', e);
        }
    }

    useEffect(() => {
        getModulos();
        console.log(modulos)
    }, []);


    return (

        <div className="container-modulo-list">
            {modulos && modulos.length > 0
                ?

                modulos.map((modulo: any) => <ModuloAulasPicker moduloName={modulo.nome} moduloId={modulo._id} selected={selected || ''} setAula={function (s: any): void {
                    throw new Error("Function not implemented.");
                } } />)

                :
                <div className="empty">
                    <img src={emptyIcon} />
                    <p>Você ainda não possui Modulos criados </p>
                </div>
            }
        </div>


    );
}