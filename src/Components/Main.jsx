import Filtros from "./Filtros";
import TablaAlertas from "./TablaAlertas";
import Gráfica from "./Gráfica";
import { Link } from "react-router-dom";
import { useReducer, useEffect, useState } from "react";
// import logoApp from '../img/alerta.png';


function reducer(state, action) {
    const filtroValor = action.value;
    const nombreFiltro = action.name;

    switch (nombreFiltro) {
        case "descripcionAlerta":
            state.descripcionAlerta = filtroValor;
            break;
        case "evaluacion":
            state.evaluacion = filtroValor;
            break;
        case "mesoperacion":
            state.mesoperacion = filtroValor;
            break;
        case "aniooperacion":
            state.aniooperacion = filtroValor;
            break;
        case "objetocuenta":
            state.objetocuenta = filtroValor;
            break;
        case "cuenta":
            state.cuenta = filtroValor;
            break;
        default:
            break;
    }
    console.log("el hpta estado ahora si cambia",state);
    return {
        descripcionAlerta: state.descripcionAlerta,
        evaluacion: state.evaluacion,
        mesoperacion: state.mesoperacion,
        aniooperacion: state.aniooperacion,
        objetocuenta: state.objetocuenta,
        cuenta:state.cuenta
    };
}


const Main = () => {

    const initialState = {
        descripcionAlerta: "value0",
        evaluacion: "value0",
        mesoperacion: "value0",
        aniooperacion:"value0",
        objetocuenta:"value0",
        cuenta:"value0"
    };

    //const [filtros, setFiltros]= useState({});
    const [filtros, setFiltros] = useReducer(reducer, initialState);
    return( 
        <div>
            <div>
            <Link to= "/">
                <button>Logout</button>
            </Link>
            <div className="logoBlackrock">
            {/* <img src ={logoApp} alt="30" height="57"/> */}
            <h1>BlackRock </h1>
            </div>
        </div>
            <p>Bienvenid@ {localStorage.getItem("nombredeusuario")}</p>
            <Filtros  cambioFiltros={setFiltros} />
            <TablaAlertas filtros={filtros}/>
            <Gráfica/>
            </div>
    );
}

export default Main;