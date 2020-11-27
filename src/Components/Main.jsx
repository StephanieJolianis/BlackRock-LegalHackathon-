import Filtros from "./Filtros";
import TablaAlertas from "./TablaAlertas";
import ChartRock from "./ChartRock";
import { Link } from "react-router-dom";
import { useReducer, useEffect, useState } from "react";
// import logoApp from '../img/alerta.png';
import alertaLogo from '../img/alerta.png'
import salir from '../img/salir.png'
import atras from '../img/atras.png'

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
        mesoperacion: "10",
        aniooperacion:"2020",
        objetocuenta:"value0",
        cuenta:"value0"
    };

    const [filtros, setFiltros] = useReducer(reducer, initialState);
    return( 
        <div>
            <div className="alertDetailHeader">
            <div className = 'headerButtons' >
            <Link to= "/main">
                <img src= {atras} ></img>
            </Link>
            <Link to= "/">
                <img src = {salir}  ></img>
            </Link>
            </div>
            <div className = 'blackrockLogo'>
                <img className = 'alarmaIMG' src = {alertaLogo}></img>
                <h1>BlackRock</h1>
            </div>
        </div>
            <p className="bienvenida">Bienvenid@ {localStorage.getItem("nombredeusuario")}</p>
            <Filtros  cambioFiltros={setFiltros} />
            <TablaAlertas filtros={filtros}/>
            <ChartRock/>
            </div>
    );
};

export default Main;