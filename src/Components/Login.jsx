import { Link } from "react-router-dom";
//inicio import material
import { Box, Button, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//fin import material

const Login = () => {

    const handleInputChange = (e) => {
        localStorage.setItem("nombredeusuario", e.target.value);
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
                    <form className={classes.bodyLogin} noValidate autoComplete="off">
                        <Box p={3}>
                            <TextField size="medium" name="mail" type="email" placeholder="Nombre Usuario" onChange={handleInputChange} required />
                        </Box>
                        <Box p={3}>
                            <TextField size="medium" name="password" placeholder="Password" type="password" required />
                        </Box>
                        <Box p={3}>
                            <div>
                                <Link to="/main">
                                    <Button className={classes.newcolor} float = "right">
                                        Iniciar Sesión
                                </Button>
                                </Link>
                            </div>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;