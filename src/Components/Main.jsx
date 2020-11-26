import Filtros from "./Filtros";
import TablaAlertas from "./TablaAlertas";
import Gráfica from "./Gráfica";
import { Link } from "react-router-dom";

const Main = () => {

    
    return (
        <div>
            <div className="headerMain">
                <h1>BlackRock</h1>
                    <Link to="/">
                        <button>
                        logout
                        </button>
                            </Link>
                    </div>
                    <div className="greet">
                            <h1>Bienvenid@ {localStorage.getItem("nombredeusuario")}</h1>
                    </div>
                <div>
                    <Filtros />
                    <TablaAlertas />
                    <Gráfica />
                </div>         
        </div>
    );
};

export default Main;