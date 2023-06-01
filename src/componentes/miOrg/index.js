import { useState } from "react"
import "./miOrg.css"

const  MiOrg =()=>{

    console.log()
    const [nombre, actualizarNombre]= useState("")
    const [mostrar, actualizarMostrar] = useState(true)

    const manejarClick=()=>{
        console.log("mostrar ocultar", !mostrar)
        actualizarMostrar(!mostrar)
    }

    return <section className="orgSection">
        <h3 className="title">mi organizacion{nombre}</h3>
        <img src="/img/add.png" alt="add" onClick={manejarClick}/>
    </section>
}

export default MiOrg