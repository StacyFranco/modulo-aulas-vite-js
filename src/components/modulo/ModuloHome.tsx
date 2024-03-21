import { useState } from "react";
import { RoomObjects } from "../room/RoomObjects";
import { ModuloList } from "./ModulotList";
import { ModulosHeader } from "./ModulosHeader";
import { useNavigate } from "react-router-dom";

export const ModuloHome = () => {

    const navigate = useNavigate();
    const [link, setLink] = useState('');

    const enterAula = () => {
        navigate('/aula/'+link);
    }

    return(
        <div className="container-principal">
            <div className="container-modulo">
                <ModulosHeader />
                <ModuloList setLink={setLink}/>
            </div>
            
        </div>
    );
}