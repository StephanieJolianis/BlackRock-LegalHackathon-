import { Link } from "react-router-dom";

const TablaAlertas = () => {
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
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Falso Positivo</td>
                <td>55198</td>
                <td>358347</td>
                <td>Monto Rebasado</td>
                <td><Link to= "/detallealerta">
                <button>+</button>
                    </Link></td>
            </tr>
            <tr>
                <td>Alerta Real</td>
                <td>55203</td>
                <td>375672</td>
                <td>Monto Rebasado</td>
                <td><Link to= "/detallealerta">
                <button>+</button>
                    </Link></td>
            </tr>
            </tbody>
        </table>
            </div>
    );
}

export default TablaAlertas;