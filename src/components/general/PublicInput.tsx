
import { useState } from "react"

type PublicInputType = {
    icon: string,
    alt?: string,
    nome: string,
    type: string,
    modelValue: string,
    setValue(s: string): void
}

export const PublicInput: React.FC<PublicInputType> = ({
    icon,
    alt,
    nome,
    type,
    modelValue,
    setValue
}) => {
    const [focus, setFocus] = useState(false);

    return (
        <div className={"input " + (focus ? 'focus' : '')}>
            <img src={icon} alt={alt} />
            <input type={type} placeholder={nome} 
                nome={nome}
                value={modelValue}
                onChange={e => setValue(e.target.value)} 
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                />
        </div>
    )
}