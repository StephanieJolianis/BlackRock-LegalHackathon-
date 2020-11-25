import react from "react";
import dataBlackRock from "../Data/datablackrock.json";
import { Link } from "react-router-dom";

const DetalleMes = () => {
    
    const data = dataBlackRock;
    const propscuenta = 305219;
    const propsfechaoperacion= "2019-10";


//-------------------FUNCIÓN MANEJO MAYÚSCULAS STRINGS--------------------------------->
    const mayusculas = (frase) => {
        let arr = frase.split(" ");
        let palabra = "";
        let fraseFinal="";
        for(let i=0; i<arr.length; i++){
            palabra = arr[i];
            fraseFinal= fraseFinal + " " + palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        }
        return fraseFinal;
    }
//--------------------FUNCIÓN FILTER (CUENTA-MES)-------------------------------------->
    const functionFilter = (month) => {
            let compare = false;
            if(month.cuenta == propscuenta){
                if(month.fechaoperacion.substring(0,7) == propsfechaoperacion){
                    compare = true;
                }
            }
            return compare;
    }

    //--------------------FILTRO (CUENTA-MES)------------------------------------------>
    const resultFilter = data.filter (detailMonth => functionFilter(detailMonth));

    //--------------------CREACIÓN TABLA DINÁMICA-------------------------------------->
    const dataTable = resultFilter.map((item, idx)=>{
        return(
            <tr key={idx}>
                <td>{item.fechaoperacion}</td>
                <td>{mayusculas(item.tipooperacion)}</td>
                <td> $ {item.monto}</td>
            </tr>
        )
    })

    //--------------------FUNCIÓN CÁLCULO ANTIGÚEDAD---------------------------------->
    const antiguedad = (algo) => {
        const fechaContrato = new Date (algo[0].fechafirmacontrato).getTime();
        const fechaActual = new Date (algo[0].fechaoperacion).getTime();
        const diff = fechaActual - fechaContrato;
        if(Math.trunc(diff/(1000*60*60*24*30)) <= 0){
            return 0;
        } else {
            return Math.trunc(diff/(1000*60*60*24*30));
        }
        
    }

    //------------------FUNCIÓN CÁLCULO TOTAL DEPÓSITOS-------------------------------->
    const resultDeposito = (algo) =>{
    let acumm = 0;
    for (let i = 0; i<algo.length; i++){
        if(algo[i].tipooperacion == "DEPOSITO"){
            acumm = acumm + parseInt(algo[i].monto);
        }
    
        }
        return acumm;
    }

    //-------------------FUNCIÓN CÁLCULO TOTAL RETIROS--------------------------------->
    const resultRetiro = (algo) =>{
        let acumm = 0;
        for (let i = 0; i<algo.length; i++){
            if(algo[i].tipooperacion == "Retiro"){
                acumm = acumm + parseInt(algo[i].monto);
            }
            }
            return acumm;
        }
    
        
        //------------------------------------------------------------------------------>
    return( <div>
        <div>
            <Link to= "/detallealerta">
                <button>Regresar</button>
            </Link>
    <h1>BlackRock</h1>
    </div>
    <div className="contentDetailMonth">
        <div><h3>NIC:</h3><p>{resultFilter[0].nic}</p></div>
        <div><h3>Cuenta:</h3> <p>{resultFilter[0].cuenta}</p></div>
        <div><h3>Razón Social:</h3><p>xxxxxxxxxxxx</p></div>
        <div><h3>Objeto:</h3><p>{mayusculas(resultFilter[0].objetocuenta)}</p></div>
        <div><h3>Antigüedad:</h3><p>{antiguedad(resultFilter)}</p></div>
        <div><h3>Monto Declarado:</h3><p>$ {resultFilter[0].montodeclarado}</p></div>
        <div><h3>Límite:</h3></div>
    </div>
        <h2>Historial</h2>
        <table className="history">
            <thead>
            <tr>
                <th>Fecha</th>
                <th>Operación</th>
                <th>Monto</th>
            </tr>
            </thead>
            <tbody>
            {dataTable}
            </tbody>
        </table>
    <div><p>Monto total depositos: $ {resultDeposito(resultFilter)}</p>
        <p>Monto total Retiros: $ {resultRetiro(resultFilter)}</p>
        </div>
    </div>
    );
}

export default DetalleMes;