import dataBlackRock from "../Data/datablackrock.json";
import { Link } from "react-router-dom";
import dataAlerta from "../Data/alertas.json";
import { useParams } from "react-router-dom";

//inicio import material
import { makeStyles } from '@material-ui/core/styles';
//fin import material

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
            <tr key={idx}>
                <td>{item.fechaoperacion}</td>
                <td>{mayusculas(item.tipooperacion)}</td>
                <td> {formatCurrency(parseInt(item.monto))}</td>
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


    //------------------------------------------------------------------------------>

    //inicio objeto css
    const useStyle = makeStyles({
        headerDetailMonth: {
            background: "white",
            textAlign: "center",
            border: 0,
            borderRadius: 3,
            fontFamily: "Roboto",
            fontSize: "20px",
            color: "black",
            padding: "0 30px",
        },
        contentDetailMonth: {
            background: "#FFCE00",
            border: 0,
            borderRadius: 3,
            fontFamily: "Roboto",
            fontSize: "14px",
            color: "black",
            padding: "0 30px",
        },
        tableDetailMonth: {
            background: "white",
            textAlign: "justify",
            border: 0,
            borderRadius: 3,
            fontFamily: "Roboto",
            fontSize: "14px",
            color: "black",
            padding: "0 30px",
        },
    })
    //fin objeto css

    //inicio hooks de estilos
    const classes = useStyle();
    //fin hooks de estilos

    return( 
    <div>
        <div className={classes.headerDetailMonth}>
            <Link to= {"/alerta/"+id+"/detalle"}>
                <button>Regresar</button>
            </Link>
            <Link to= "/">
                <button>Logout</button>
            </Link>
        <h1>BlackRock</h1>
        </div>

        <div className={classes.contentDetailMonth}>
            <div><strong>NIC:</strong>{filtroAlerta[0].nic}</div>
            <div><h3>Cuenta: </h3><p> {filtroAlerta[0].cuenta}</p></div>
            <div><h3>Razón Social:</h3><p>xxxxxxxxxxxx</p></div>
            <div><h3>Objeto:</h3><p>{mayusculas(filtroAlerta[0].objetocuenta)}</p></div>
            <div><h3>Antigüedad:</h3><p>{filtroAlerta[0].antiguedad}</p></div>
            <div><h3>Monto Declarado:</h3><p> {formatCurrency(filtroAlerta[0].montodeclarado)}</p></div>
            <div><h3>Límite:</h3><p> {formatCurrency(filtroAlerta[0].limiteMonto__1)}</p></div>
        </div>

        <div className={classes.tableDetailMonth}>
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
        </div>
        <div>
            <p>Monto total depositos: {formatCurrency(resultDeposito(resultFilter))}</p>
            <p>Monto total Retiros: {formatCurrency(resultRetiro(resultFilter))}</p>
        </div>
    </div>
    );
}

export default DetalleMes;