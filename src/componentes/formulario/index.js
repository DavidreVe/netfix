import ListaOpciones from "../listaOpciones"
import CampoTexto from "../campoTexto"
import Boton from "../boton"
import "./formulario.css"

const Formulario =()=>{

    const manejarEnvio = (e)=>{
        e.preventDefault()
        console.log("manejar el envio",e)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>subir video</h2>
            <CampoTexto title="Nombre" placeholder="ingrese nombre"/>
            <CampoTexto title="link" placeholder="ingrese link"/>
            <CampoTexto title="foto" placeholder="ingrese foto"/>
            <ListaOpciones/>
            <Boton texto="crear"/>
            
        </form>
    </section>
}

export default Formulario