import "./header.css"


const Header =() =>{

    const manejarEnvio=()=>{
        console.log("manejandoenvio")
    }

    return <section >
        <div className="contenedorheader">
            <img src="./public/img/LOGO.png" alt="logo"/>
            <button onClick={manejarEnvio}>subir video</button>
            
        </div>
    </section>
}

export default Header