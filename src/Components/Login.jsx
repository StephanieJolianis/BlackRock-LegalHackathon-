import { Link } from "react-router-dom";

const Login = () => {

    const handleInputChange = (e) => {
        localStorage.setItem("nombredeusuario", e.target.value);
    }

    return( 
    <div>
        <h1>BlackRock</h1>
            <form className="form-group" >
                <label>Usuario</label>
                <input name="mail" type="email" placeholder="Nombre Usuario" onChange={handleInputChange} required />
                <label>Password</label>
                <input name="password" placeholder="password" type="password" required />
                <Link to= "/main">
                <button type="submit">Iniciar Sesión</button>
            </Link>
            </form>
    </div>
    );
}

export default Login;