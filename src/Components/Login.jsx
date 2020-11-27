import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";


//inicio import material
import { Box, Button, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//fin import material



const Login = () => {

    let history = useHistory();
    const [statusForm, setstatusForm] = useState(true);

    const handleInputChange = (e) => {
        localStorage.setItem("nombredeusuario", e.target.value);
    }

    const sendUser = (e) =>{
        e.preventDefault();
        let password = e.target.elements['password'].value;
        if(password === "blackrock2020"){
            history.push("/main");
            return true;
        }
        setstatusForm(false);
        return false;
    }

    //inicio objeto css
    const useStyle = makeStyles({
        headerLogin: {
            background: "black",
            color: "white",
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: "1rem",
        },
        textLogin: {
            background: "white",
            color: "black",
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: "1.5rem",
        },
        bodyLogin: {
            background: "white",
            color: "black",
            textAlign: "center",
        },
        newcolor: {
            background: "#FF4713",
            border: "0",
            borderRadius: "0",
            color: "white",
            heigth: "48",
            float: "right",
        },
    })
    //fin objeto css

    //inicio hooks de estilos
    const classes = useStyle();
    //fin hooks de estilos

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <div className={classes.headerLogin}>
                        <Box p={6}>
                            BlackRock
                        </Box>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.textLogin}>
                        <Box pt={12} pb={5}>
                            Iniciar Sesión
                        </Box>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <form className={classes.bodyLogin} autoComplete="off" onSubmit={(e)=>sendUser(e)}>
                        <Box p={3}>
                            <TextField size="medium" name="mail" type="text" placeholder="Nombre Usuario" onChange={handleInputChange} required />
                        </Box>
                        <Box p={3}>
                            <TextField size="medium" name="password" placeholder="Password" type="password" required />
                        </Box>
                        <Box p={3}>
                            <div>
                                    <Button type="submit" className={classes.newcolor} float = "right">
                                        Iniciar Sesión
                                </Button>
                            </div>
                        </Box>
                    </form>
                </Grid>
            </Grid>
            {!statusForm && (<div><p className="pAlertaLogin">Credenciales invalidas por favor verifique</p></div>)}
        </div>
    );
};

export default Login;