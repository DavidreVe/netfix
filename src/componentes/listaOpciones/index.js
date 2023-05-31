import "./listaOpsciones.css"

const ListaOpciones=()=>{

    const equipos = [
        "Terror",
        "Animacion",
        "Ficcion",
        "Romance"
    ]

     return <div className="lista-opciones">
        <label>equipos</label>
        <select>
           {  equipos.map((equipo,index)=> <option key={index}>{equipo}</option>)  }
        </select>
     </div>
}

export default ListaOpciones