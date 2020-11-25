import react from "react";
import { render } from "react-dom";
import dataBlackRock from "../Data/datablackrock.json"

import data from '../Data/BlackRockII.json';


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


    return( <div>
        <div>
    <button>Regresar</button>
    <h1>BlackRock</h1>
    </div>
    <div className="contentDetailMonth">
        <h3>NIC:</h3> 
        <h3>Cuenta:</h3>
        <h3>Razón Social:</h3>
        <h3>Objeto:</h3>
        <h3>Antigüedad:</h3>
        <h3>Monto Declarado:</h3>
        <h3>Límite:</h3>
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
    <div><p>Monto total depositos:</p>
        <p>Monto total Retiros:</p>
        </div>
    </div>
    );
}

export default DetalleMes;