import { PublicInput } from "../general/PublicInput";
import { ModulosHeader } from "../modulo/ModulosHeader";

import chainIcon from '../../assets/images/chain.svg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RoomLink = () => {

    const navigate = useNavigate();
    const [link, setLink] = useState('');
    const [error, setError] = useState('');

    const navigateToRoom = () =>{
        setError('');
        if(link && link.length >= 8){
            return navigate('/room/'+link);
        }
        setError('Link inválido, por favor verifique!');
    }

    return (
        <div className="container-principal">
            <div className="container-meet link">
                <ModulosHeader isLink={true}/>
                {error && <p className="error">{error}</p>}
                <PublicInput icon={chainIcon}
                    type="text" alt="Link" nome="Informe o link da reunião para entrar"
                    modelValue={link} setValue={setLink}
                    />
                <button onClick={navigateToRoom}>Entrar</button>
            </div>
        </div>
    );
}