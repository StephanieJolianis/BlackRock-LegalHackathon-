import react from "react";
import { render } from "react-dom";
import dataBlackRock from "../Data/datablackrock.json"

const DetalleMes = () => {
    
    const data = dataBlackRock;
    const propscuenta = 305219;
    const propsfechaoperacion= "2019-10";

    const functionFilter = (month) => {
            let compare = false;
            if(month.cuenta == propscuenta){
                if(month.fechaoperacion.substring(0,7) == propsfechaoperacion){
                    compare = true;
                }
            }
            return compare;
    }

    const resultFilter = data.filter (detailMonth => functionFilter(detailMonth));
    console.log(resultFilter);

    const dataTable = resultFilter.map((item, idx)=>{
        return(
            <tr key={idx}>
                <td>{item.fechaoperacion}</td>
                <td>{item.tipooperacion}</td>
                <td> $ {item.monto}</td>
            </tr>
        )
    })

    const antiguedad = (algo) => {
        const fechaContrato = new Date (algo[0].fechafirmacontrato).getTime();
        console.log("fecha contrato" ,fechaContrato)
        const fechaActual = new Date (algo[0].fechaoperacion).getTime();
        console.log("fecha actual" ,fechaActual);
        const diff = fechaActual - fechaContrato;

        return diff/(1000*60*60*24*30);
    }

    const resultDeposito = (algo) =>{
    let acumm = 0;
    for (let i = 0; i<algo.length; i++){
        if(algo[i].tipooperacion == "DEPOSITO"){
            acumm = acumm + parseInt(algo[i].monto);
        }
    
        }
        return acumm;
    }


    return( <div>
        <div>
    <button>Regresar</button>
    <h1>BlackRock</h1>
    </div>
    <div className="contentDetailMonth">
        <div><h3>NIC:</h3><p>{resultFilter[0].nic}</p></div>
        <div><h3>Cuenta:</h3> <p>{resultFilter[0].cuenta}</p></div>
        <div><h3>Razón Social:</h3><p>xxxxxxxxxxxx</p></div>
        <div><h3>Objeto:</h3><p>{resultFilter[0].objetocuenta}</p></div>
        <div><h3>Antigüedad:</h3><p>{antiguedad(resultFilter)}</p></div>
        <div><h3>Monto Declarado:</h3><p>{resultFilter[0].montodeclarado}</p></div>
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
        <p>Monto total Retiros:</p>
        </div>
    </div>
    );
}

export default DetalleMes;