import dataBlackRock from "../Data/datablackrock.json";
import { Link } from "react-router-dom";
import dataAlerta from "../Data/alertas.json";
import { useParams } from "react-router-dom";

//import data from '../Data/data.json';


const DetalleMes = () => {
    const { id } = useParams();
    const data = dataBlackRock;
    const filtroAlerta = dataAlerta.filter(item => item.idalerta == id)
    const propscuenta = filtroAlerta[0].cuenta; // 305235;

    const propsfechaoperacion= filtroAlerta[0].aniooperacion.toString() +"-"+ filtroAlerta[0].mesoperacion.toString(); //"2020-10";



    //-------------------FUNCIÓN MANEJO MAYÚSCULAS STRINGS--------------------------------->
    const mayusculas = (frase) => {
        let arr = frase.split(" ");
        let palabra = "";
        let fraseFinal = "";
        for (let i = 0; i < arr.length; i++) {
            palabra = arr[i];
            fraseFinal = fraseFinal + " " + palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        }
        return fraseFinal;
    }
    //-------------------FUNCIÓN FORMATO DE MONEDA EN PESOS MEXICANOS--------------------------------->
    const formatCurrency = (number) =>{
        return number.toLocaleString('es-MX', {currency: 'MXN', style: 'currency'});
    }


    //--------------------FUNCIÓN FILTER (CUENTA-MES)-------------------------------------->
    const functionFilter = (month) => {
        let compare = false;
        if (month.cuenta === propscuenta) {
            if (month.fechaoperacion.substring(0, 7) === propsfechaoperacion) {
                compare = true;
            }
        }
        return compare;
    }

    //--------------------FILTRO (CUENTA-MES)------------------------------------------>
    const resultFilter = data.filter(detailMonth => functionFilter(detailMonth));

    //--------------------CREACIÓN TABLA DINÁMICA-------------------------------------->
    const dataTable = resultFilter.map((item, idx) => {
        return (
            <tr className="tr" key={idx}>
                <td className="td">{item.fechaoperacion}</td>
                <td className="td">{mayusculas(item.tipooperacion)}</td>
                <td className="tdValor"> {formatCurrency(parseInt(item.monto))}</td>
            </tr>
        )
    })

    //------------------FUNCIÓN CÁLCULO TOTAL DEPÓSITOS-------------------------------->
    const resultDeposito = (algo) => {
        let acumm = 0;
        for (let i = 0; i < algo.length; i++) {
            if (algo[i].tipooperacion === "DEPOSITO") {
                acumm = acumm + parseInt(algo[i].monto);
            }

        }
        return acumm;
    }

    //-------------------FUNCIÓN CÁLCULO TOTAL RETIROS--------------------------------->
    const resultRetiro = (algo) => {
        let acumm = 0;
        for (let i = 0; i < algo.length; i++) {
            if (algo[i].tipooperacion === "Retiro") {
                acumm = acumm + parseInt(algo[i].monto);
            }
        }
        return acumm;
    }

    return( 
    <div>
        <div className="headerDetailMonth">
            <Link to= {"/alerta/"+id+"/detalle"}>
                <button>Regresar</button>
            </Link>
            <Link to= "/">
                <button>Logout</button>
            </Link>
        <h1>BlackRock</h1>
        </div>

        <div className="contentDetailMonth">
            <div><h3>NIC:</h3><p className="divp">{filtroAlerta[0].nic}</p></div>
            <div><h3>Cuenta: </h3><p className="divp"> {filtroAlerta[0].cuenta}</p></div>
            <div><h3>Razón Social:</h3><p className="divp">xxxxxxxxxxxx</p></div>
            <div><h3>Objeto:</h3><p className="divp">{mayusculas(filtroAlerta[0].objetocuenta)}</p></div>
            <div><h3>Antigüedad:</h3><p className="divp">{filtroAlerta[0].antiguedad} Meses</p></div>
            <div><h3>Monto Declarado:</h3><p className="divp"> {formatCurrency(filtroAlerta[0].montodeclarado)}</p></div>
            <div><h3>Límite:</h3><p className="divp"> {formatCurrency(filtroAlerta[0].limiteMonto__1)}</p></div>
        </div>

        <div className="tableDetailMonth">
            <h2 className="historialmes">Historial</h2>
            <table className="history">
                <thead>
                    <tr className="tr">
                        <th className="th">Fecha</th>
                        <th className="th">Operación</th>
                        <th className="th">Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTable}
                </tbody>
            </table>
        </div>
        <div className="detallemontomes">
            <p className="pdetallemontomes">Monto total depositos: {formatCurrency(resultDeposito(resultFilter))}</p>
            <p className="pdetallemontomes">Monto total Retiros: {formatCurrency(resultRetiro(resultFilter))}</p>
        </div>
    </div>
    );
}

export default DetalleMes;