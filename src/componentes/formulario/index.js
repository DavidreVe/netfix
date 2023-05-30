import CampoTexto from "../campoTexto"
import "./formulario.css"

const Formulario =()=>{
    return <section className="formulario">
        <form>
            <h2>subir video</h2>
            <CampoTexto title="Nombre" placeholder="ingrese nombre"/>
            <CampoTexto title="link" placeholder="ingrese link"/>
            <CampoTexto title="foto" placeholder="ingrese foto"/>
        </form>
    </section>
}

export default Formulario