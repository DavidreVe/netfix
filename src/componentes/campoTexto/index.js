import "./campotexto.css"


const CampoTexto = (props)=>{
    return <div className="campo-texto">
        <label>{props.title}</label>
        <input placeholder={props.placeholder}/>
    </div>
}

export default CampoTexto