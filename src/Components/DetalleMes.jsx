import dataBlackRock from "../Data/datablackrock.json";
import { Link } from "react-router-dom";

//inicio import material
import { makeStyles } from '@material-ui/core/styles';
//fin import material

const DetalleMes = () => {

    const data = dataBlackRock;

    const propscuenta = 305235;
    const propsfechaoperacion= "2020-10";



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
                <td> $ {item.monto}</td>
            </tr>
        )
    })

    //--------------------FUNCIÓN CÁLCULO ANTIGÚEDAD---------------------------------->
    const antiguedad = (algo) => {
        const fechaContrato = new Date(algo[0].fechafirmacontrato).getTime();
        const fechaActual = new Date(algo[0].fechaoperacion).getTime();
        const diff = fechaActual - fechaContrato;
        if (Math.trunc(diff / (1000 * 60 * 60 * 24 * 30)) <= 0) {
            return 0;
        } else {
            return Math.trunc(diff / (1000 * 60 * 60 * 24 * 30));
        }

    }

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
            <Link to= "/detallealerta">
                <button>Regresar</button>
            </Link>
            <Link to= "/">
                <button>Logout</button>
            </Link>
        <h1>BlackRock</h1>
        </div>

        <div className={classes.contentDetailMonth}>
            <div><strong>NIC:</strong>{resultFilter[0].nic}</div>
            <div><h3>Cuenta: </h3><p> {resultFilter[0].cuenta}</p></div>
            <div><h3>Razón Social:</h3><p>xxxxxxxxxxxx</p></div>
            <div><h3>Objeto:</h3><p>{mayusculas(resultFilter[0].objetocuenta)}</p></div>
            <div><h3>Antigüedad:</h3><p>{antiguedad(resultFilter)}</p></div>
            <div><h3>Monto Declarado:</h3><p>$ {resultFilter[0].montodeclarado}</p></div>
            <div><h3>Límite:</h3></div>
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
        <p>Monto total depositos: $ {resultDeposito(resultFilter)}</p>
            <Link to= "/">
                <button>Logout</button>
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