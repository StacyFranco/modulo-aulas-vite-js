
type ModulosHeaderProps = {
    isLink?:boolean
}

export const ModulosHeader : React.FC<ModulosHeaderProps> = () => {

    return (
        <div className="container-modulos-header">
            
            <div>
                <p>Olá! Esses são nossos Módulos para estudo:</p>
                
            </div>
        </div>
    )
}