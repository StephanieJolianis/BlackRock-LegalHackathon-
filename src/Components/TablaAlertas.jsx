import { Link } from "react-router-dom";
import dataAlert from "../Data/alertas.json";


const TablaAlertas = (props) => {

    const funcionFiltros = (detalleAlerta) => {
        //console.log(detalleAlerta);
        //console.log("filtro individual", props.filtros.descripcionAlerta);
        let booleano = true;
        if(props.filtros.descripcionAlerta && props.filtros.descripcionAlerta !== "value0"){
            if (detalleAlerta.iddescripcion === parseInt(props.filtros.descripcionAlerta)) {
                console.log("si pasa filtro");
                booleano = booleano && true;
            }else{
                booleano = false
            }
        }
    
        if(props.filtros.evaluacion && props.filtros.evaluacion !== "value0"){
            if (detalleAlerta.idevaluacion === parseInt(props.filtros.evaluacion)) {
                booleano = booleano && true;
            }else{
                booleano = false
            }
        }
    
        if(props.filtros.mesoperacion && props.filtros.mesoperacion !== "value0"){
            if (detalleAlerta.mesoperacion.toString() === props.filtros.mesoperacion) {
                booleano = booleano && true;
            }else{
                booleano = false
            }
        }
    
        if(props.filtros.aniooperacion && props.filtros.aniooperacion !== "value0"){
            if (detalleAlerta.aniooperacion === parseInt(props.filtros.aniooperacion)) {
                booleano = booleano && true;
            }else{
                booleano = false
            }
        }
            
        if(props.filtros.objetocuenta && props.filtros.objetocuenta !== "value0"){
            if (detalleAlerta.idobjetocuenta === parseInt(props.filtros.objetocuenta)) {
                booleano = booleano && true;
            }else{
                booleano = false
            }
        }
            
        if(props.filtros.cuenta && props.filtros.cuenta !== "value0"){
            if (detalleAlerta.cuenta === parseInt(props.filtros.cuenta)) {
                booleano = booleano && true;
            }else{
                booleano = false
            }
        }

    return booleano;
    }
        
    const filtradoAlertas = dataAlert.filter(detalleAlerta => funcionFiltros(detalleAlerta));


    let alertMap = <tr><td colSpan="4">Coincidencias de busqueda no encontradas</td></tr>
    
    if(filtradoAlertas.length > 0){
        alertMap = filtradoAlertas.map((item, idx)=>{
            return (
                <tr key={idx}>
                    <td>{item.evaluacion}</td>
                    <td>{item.idalerta}</td>
                    <td>{item.cuenta}</td>
                    <td>{item.descripcionAlerta}</td>
                    <td><Link to= {"/alerta/"+ item.idalerta +"/detalle"}>
                    <button>+</button>
                        </Link></td>
                </tr>
            )
        });
    }
    

    return( 
        <div>
        <h2>Alertas</h2>
        <table className="historyAlert">
            <thead>
            <tr>
                <th>Status</th>
                <th>ID Alerta</th>
                <th>Cuenta</th>
                <th>Descripción</th>
                <th>...</th>
            </tr>
            </thead>
            <tbody>
            {alertMap}
            </tbody>
        </table>
            </div>
    );
}

export default TablaAlertas;
