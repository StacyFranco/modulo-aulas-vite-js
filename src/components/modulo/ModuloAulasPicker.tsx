
import { useEffect, useState } from 'react';
import { AulaServices } from '../../services/AulaServices';
import downIcon from '../../assets/images/arrow_down_object.svg';
import rightIcon from '../../assets/images/arrow_right_object.svg';

const aulaServices = new AulaServices();

type ModuloAulasPickerType = {
    moduloName: string,
    moduloId: string,
    selected: string,
    setAula(s:any): void,
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

export const ModuloAulasPicker: React.FC<ModuloAulasPickerType> = ({  moduloName: moduloName, moduloId: moduloId, selected, setAula}) => {

    const [show, setShow] = useState(false);
    const [aulas, setAulas] = useState([]);

    const getAulas = async () => {
        try {
            const result = await aulaServices.getAulas(moduloId);
            if (result?.data) {
                result.data.sort(sortFunction)
                setAulas(result.data);
            }
        } catch (e) {
            console.log('Ocorreu erro ao listar as aulas', e);
        }
    }

    useEffect(() => {
        getAulas();
        console.log(aulas)
    }, []);

    const selectAula = (a: {
        data: string;
        conteudo: string; 
        nome: string; 
}) =>{
        const aula = {
            nome: a.nome,
            conteudo: a.conteudo,
            data: a.data,
        }
                
        setAula(aula);
    } 

    return (
        <div className="container-aula-picker">
            <div className="action" onClick={() => setShow(!show)}>
                
                <span>{moduloName}</span>
                {!show 
                    ? <img src={downIcon} /> 
                    : <img src={rightIcon} />
                }
                <span>{`N° Aulas ${aulas.length}`}</span>
            </div>
            {show && <div className='meet'>
                {aulas.map((a: any) =>
                    <div key={a}  className={a === selected ? 'selected' : ''} onClick={() => selectAula(a)}>
                        <span>{a.nome}</span>    
                    </div>
                )}
            </div>}
        </div>
    )
}