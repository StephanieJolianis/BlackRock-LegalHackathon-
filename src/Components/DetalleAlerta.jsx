import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import dataAlerta from "../Data/alertas.json";
import ModalLimite from "./ModalLimite";
import ModalAlerta from "./ModalAlerta";

const calcularDias = (algo) => {
    let anio = algo.aniooperacion;
    let mes = parseInt(algo.mesoperacion);
    let dia = 1;
    if(mes === 12){
        mes = 0;
        anio = anio + 1;
    }
    const fechaAlerta= new Date(anio,mes,dia);
    fechaAlerta.setDate(fechaAlerta.getDate() + 60);
    const fechaAlertaMiliseg = fechaAlerta.getTime();
    const fechaActual = Date.now();
    const diff =  fechaAlertaMiliseg - fechaActual;
    const result = Math.round(diff/(1000 * 60 * 60 * 24 ));
    if(result > 0){
        return (<div>
            <h3>Esta alerta expira en:</h3>
        <h1>{result} días</h1>
        </div>)
    }else{
        return (
            <div>
            <h2>Estudio de alerta finalizado</h2>
        </div>)
    }
}

//-------------------FUNCIÓN FORMATO DE MONEDA EN PESOS MEXICANOS--------------------------------->
const formatCurrency = (number) =>{
    return number.toLocaleString('es-MX', {currency: 'MXN', style: 'currency'});
}



const alertaValida = (alerta) =>{
    return (alerta.statusAlerta && alerta.statusAlerta == "evaluada");
}

const updateFromStorage = (alerta) =>{
    let evaluaciones = JSON.parse(localStorage.getItem("evaluaciones"));
    let storage = evaluaciones.filter(ev => ev.id == alerta.idalerta);
    console.log("localstorage",storage);
    if(storage.length > 0){
        alerta.limiteMonto = storage[0].limite;
        alerta.evaluacion = storage[0].evaluacion;
        alerta.statusAlerta = storage[0].estado;
    }
    return alerta;
}


const DetalleAlerta = () => {
    const [showLimit, setShowLimit] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alert, setAlert] = useState(false);
    const [statusAlert, setStatusAlert] = useState("En investigacion");
    const [analisis, setAnalisis] = useState("");

    const { id } = useParams();
    const filtroAlerta = dataAlerta.filter(item => item.idalerta == id);
    const objAlerta = updateFromStorage(filtroAlerta[0]);
    console.log(objAlerta);
    const [limit, setLimit] = useState(filtroAlerta[0].limiteMonto);
    //setLimit(filtroAlerta[0].limiteMonto);
    
    return( 
    <div>
        <div className="alertDetailHeader">
            <Link to= "/main">
                <button>Regresar</button>
            </Link>
            <Link to= "/">
                <button>Logout</button>
            </Link>
    <h1>BlackRock</h1>
    </div>
    <div className="contentDetailAlert">
        <div><h3>ID Alerta:</h3><p>{id}</p></div>
        <div><h3>NIC</h3> <p>{filtroAlerta[0].nic}</p></div>
        <div><h3>Razón Social:</h3><p>xxxxxxxxxxxx</p></div>
        <div><h3>Descripción:</h3><p>{filtroAlerta[0].descripcionAlerta}</p></div>
    </div>
            {calcularDias(filtroAlerta[0])}
        <table className="detailAlert">
            <tbody>
                <tr>
                    <th>Status</th>
                    <td>{filtroAlerta[0].evaluacion}</td>
                </tr>
                <tr>
                    <th>Objeto</th>
                    <td>{filtroAlerta[0].objetocuenta}</td>
                </tr>
                <tr>
                    <th>Tipo Persona</th>
                    <td>{filtroAlerta[0].tipopersona}</td>
                </tr>
                <tr>
                    <th>Antigüedad</th>
                    <td>{filtroAlerta[0].antiguedad} Meses</td>
                </tr>
                <tr>
                    <th>Mes/Año</th>
                    <td>{filtroAlerta[0].mesoperacion} / {filtroAlerta[0].aniooperacion}</td>
                    <td><Link to= {"/alerta/" + id + "/detallemes"}>
                <button>+</button>
                    </Link></td>
                </tr>
                <tr>
                    <th>Monto Declarado</th>
                    <td>{formatCurrency(filtroAlerta[0].montodeclarado)}</td>
                </tr>
                <tr>
                    <th>Monto Operado</th>
                    <td>{formatCurrency(parseInt(filtroAlerta[0].montoOperadoTotal))}</td>
                </tr>
                <tr>
                    <th>Límite</th>
                    <td>{formatCurrency(filtroAlerta[0].limiteMonto__1)}</td>
                    <td>{limit > 0 ? limit : filtroAlerta[0].limiteMonto}x</td>
                    {alertaValida(filtroAlerta[0]) ? <td></td> : <td><button onClick={() => setShowLimit(true)}>Editar</button></td>}
                </tr>
            </tbody>
        </table>
        {!alertaValida(filtroAlerta[0]) && (       
        <div> 
        <input type="search" placeholder="Indica el análisis de la alerta" onChange={(e)=> setAnalisis(e.target.value)}/>
        <button onClick={() =>{setShowAlert(true); setAlert(true);}}>Alerta Real</button>
        <button onClick={() =>{setShowAlert(true); setAlert(false);}}>Falso Positivo</button>
        </div>
        )}

        <ModalAlerta idAlerta={id} limit={limit} analisis={analisis} show={showAlert} close={setShowAlert} alert={alert} setStatus={setStatusAlert}/>
        <ModalLimite show={showLimit} close={setShowLimit} setLimit={setLimit}/>
    </div>
    );
}

export default DetalleAlerta;