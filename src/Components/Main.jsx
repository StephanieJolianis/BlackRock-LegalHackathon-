import Filtros from "./Filtros";
import TablaAlertas from "./TablaAlertas";
import Gráfica from "./Gráfica";
import { Link } from "react-router-dom";
const Main = () => {
    return( 
        <div>
            <div>
            <Link to= "/">
                <button>Logout</button>
            </Link>
            <h1>BlackRock</h1>
        </div>
            <p>Bienvenid@ {localStorage.getItem("nombredeusuario")}</p>
            <Filtros/>
            <TablaAlertas/>
            <Gráfica/>
            </div>
    );
}

export default Main;