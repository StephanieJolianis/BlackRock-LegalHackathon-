import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import dataAlerta from "../Data/alertas.json";
import ModalLimite from "./ModalLimite";
import ModalAlerta from "./ModalAlerta";
import './detalleAlerta.scss';
import alertaLogo from '../img/alerta.png'
import atras from '../img/atras.png'
import salir from '../img/salir.png'



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
    if(result > 0 && algo.evaluacion===''){ 
        return (<div className='regresiveCount' style={ result>5 ? { backgroundColor: "#05B135" } : { backgroundColor: "#F20606" } }>
            <h3>Esta alerta expira en:</h3> 
            <h1>{result} días</h1> </div>) }else{ 
                return ( <div className='alertaFinalizada'> 
                <h2>Estudio de alerta finalizado</h2> </div>) } 
}

let mensajeUsuario = "";

//-------------------FUNCIÓN FORMATO DE MONEDA EN PESOS MEXICANOS--------------------------------->
const formatCurrency = (number) =>{
    return number.toLocaleString('es-MX', {currency: 'MXN', style: 'currency'});
}

const alertaValida = (alerta) =>{
    return (alerta.statusAlerta && alerta.statusAlerta == "evaluada");
}

const updateFromStorage = (alerta) =>{
    mensajeUsuario = "";
    let evaluaciones = JSON.parse(localStorage.getItem("evaluaciones"));
    if(!evaluaciones)
        evaluaciones = [];
    let storage = evaluaciones.filter(ev => ev.id == alerta.idalerta);
    if(storage.length > 0){
        alerta.limiteMonto = storage[0].limite;
        alerta.evaluacion = storage[0].evaluacion;
        alerta.statusAlerta = storage[0].estado;

        mensajeUsuario = "Analizada por " + localStorage.getItem("nombredeusuario") + " : " + storage[0].analisis;
    }
    if(alerta.evaluacion.toLowerCase() === "alerta real")
    mensajeUsuario = mensajeUsuario + " ENVIADO A MINDS"
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
    const [limit, setLimit] = useState(filtroAlerta[0].limiteMonto);
    //setLimit(filtroAlerta[0].limiteMonto);
    
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
        <div className="contentDetailAlert">
            <div className="contentDetailAlert">
                <div className = 'textLine' ><h3>ID Alerta:</h3><p>{id}</p></div>
                <div className = 'textLine' ><h3>NIC</h3> <p>{filtroAlerta[0].nic}</p></div>
                <div className = 'textLine' ><h3>Razón Social:</h3><p>xxxxxxxxxxxx</p></div>
                <div className = 'textLine' ><h3>Descripción:</h3><p>{filtroAlerta[0].descripcionAlerta}</p></div>
            </div>
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
                            <td className = 'fila'> <p> {filtroAlerta[0].mesoperacion} / {filtroAlerta[0].aniooperacion}</p>
                            <Link to= {"/alerta/" + id + "/detallemes"}>
                                <button className = 'buttonDetails'>+</button>
                            </Link>
                            </td>
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
                            <td className = 'fila' > 
                                <p>{formatCurrency(filtroAlerta[0].limiteMonto__1)}</p>
                                <p>{limit > 0 ? limit : filtroAlerta[0].limiteMonto}x</p>
                                {/* <button className = 'buttonLimite' onClick={() => setShowLimit(true)}>Editar</button> */}
                                {!alertaValida(filtroAlerta[0]) && (<button className = 'buttonLimite' onClick={() => setShowLimit(true)}>Editar</button>)}
                            </td>
                                
                            
                        </tr>
                    </tbody>
                </table>
        <div className = 'evaluationContainer' >
        {/* <input type="search" placeholder="Indica el análisis de la alerta"/>
        <div className = 'evaluationButtons' >
            <button className = 'alertaReal'  onClick={() =>{setShowAlert(true); setAlert(true);}}>Alerta Real</button>
            <button className = 'falsoPositivo' onClick={() =>{setShowAlert(true); setAlert(false);}}>Falso Positivo</button>
        </div> */}
                    {/* <td>{formatCurrency(filtroAlerta[0].limiteMonto__1)}</td>
                    <td>{limit > 0 ? limit : filtroAlerta[0].limiteMonto}x</td> */}
    {!alertaValida(filtroAlerta[0]) && (<input type="search" placeholder="Indica el análisis de la alerta" onChange={(e)=> setAnalisis(e.target.value)}/>)}
    {alertaValida(filtroAlerta[0]) ? <div><p>{mensajeUsuario}</p></div> : (       
        <div className = 'evaluationButtons'>
        <button className = 'alertaReal' onClick={() =>{setShowAlert(true); setAlert(true);}}>Alerta Real</button>
        <button className = 'falsoPositivo' onClick={() =>{setShowAlert(true); setAlert(false);}}>Falso Positivo</button>
        </div>
        )}

        <ModalAlerta idAlerta={id} limit={limit} analisis={analisis} show={showAlert} close={setShowAlert} alert={alert} setStatus={setStatusAlert}/>
        <ModalLimite show={showLimit} close={setShowLimit} setLimit={setLimit}/>
    </div>
    </div>
    );
}

export default DetalleAlerta;