import "./campotexto.css"


const CampoTexto = (props)=>{
    return <div className="campo-texto">
        <label>{props.title}</label>
        <input placeholder={props.placeholder} required/>
    </div>
}

export default CampoTexto