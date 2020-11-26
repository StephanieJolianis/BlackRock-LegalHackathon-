import { Link } from "react-router-dom";
import { useState } from "react";
import ModalLimite from "./ModalLimite";
import ModalAlerta from "./ModalAlerta";

const DetalleAlerta = () => {
    const [showLimit, setShowLimit] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alert, setAlert] = useState(false);

    return( 
    <div>
        <div>
            <Link to= "/main">
                <button>Regresar</button>
            </Link>
            <Link to= "/">
                <button>Logout</button>
            </Link>
    <h1>BlackRock</h1>
    </div>
    <div className="contentDetailAlert">
        <div><h3>ID Alerta:</h3><p>55198</p></div>
        <div><h3>NIC</h3> <p>5454554</p></div>
        <div><h3>Razón Social:</h3><p>xxxxxxxxxxxx</p></div>
        <div><h3>Descripción:</h3><p>Monto Rebasado</p></div>
    </div>
        <h3>Esta alerta expira en</h3>
        <h1>26 días</h1>
        <table className="detailAlert">
            <tbody>
                <tr>
                    <th>Status</th>
                    <td>Generada</td>
                </tr>
                <tr>
                    <th>Objeto</th>
                    <td>Fondo de ahorro</td>
                </tr>
                <tr>
                    <th>Tipo Persona</th>
                    <td>Física</td>
                </tr>
                <tr>
                    <th>Antigüedad</th>
                    <td>6 Meses</td>
                </tr>
                <tr>
                    <th>Mes/Año</th>
                    <td>Octubre 2020</td>
                    <td><Link to= "/detallemes">
                <button>+</button>
                    </Link></td>
                </tr>
                <tr>
                    <th>Monto Declarado</th>
                    <td>$100000</td>
                </tr>
                <tr>
                    <th>Monto Operado</th>
                    <td>$100000</td>
                </tr>
                <tr>
                    <th>Límite</th>
                    <td>$200000</td>
                    <td>2x</td>
                    <td><button onClick={() => setShowLimit(true)}>Editar</button></td>
                </tr>
            </tbody>
        </table>
    <div>
        <input type="search" placeholder="Indica el análisis de la alerta"/>
        <button onClick={() =>{setShowAlert(true); setAlert(true);}}>Alerta Real</button>
        <button onClick={() =>{setShowAlert(true); setAlert(false);}}>Falso Positivo</button>
        </div>
        <ModalAlerta show={showAlert} close={setShowAlert} alert={alert}/>
        <ModalLimite show={showLimit} close={setShowLimit}/>
    </div>
    );
}

export default DetalleAlerta;