import { Link } from "react-router-dom";
import dataAlert from "../Data/alertas.json";
import falsoPositivo from "../img/falsopositivo.png";
import alertaReal from "../img/alertareal.png";
import sinEvaluar from "../img/sinevaluar.png";
import imgMas from "../img/mas.png"


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


    let alertMap = <tr><td colSpan="5" className="noCoincidencias">Coincidencias de busqueda no encontradas</td></tr>

    const estiloAlertaEvaluada = (item) =>{
        let estilo = <img src ={sinEvaluar} alt=""/>
        if(item.toLowerCase() === "falso positivo"){
            estilo = <img src ={falsoPositivo} alt=""/>
        }
        if (item.toLowerCase() === "alerta real" ){
            estilo = <img src ={alertaReal} alt=""/>
        }
        return estilo;
    }
    
    if(filtradoAlertas.length > 0){
        alertMap = filtradoAlertas.map((item, idx)=>{
            return (
                <tr className="tr" key={idx}>
                    <td className="td">{estiloAlertaEvaluada(item.evaluacion)}</td>
                    <td className="td">{item.idalerta}</td>
                    <td className="td">{item.cuenta}</td>
                    <td className="td">{item.descripcionAlerta}</td>
                    <td className="td"><Link to= {"/alerta/"+ item.idalerta +"/detalle"}>
                    <img src ={imgMas} alt=""/>
                        </Link></td>
                </tr>
            )
        });
    }
    

    return( 
        <div>
        <h2 className="historialmes">Alertas</h2>
        <table className="historyAlert">
            <thead>
            <tr className="tr">
                <th className="th">Status</th>
                <th className="th">ID Alerta</th>
                <th className="th">Cuenta</th>
                <th className="th">Descripción</th>
                <th className="th">...</th>
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
