//inicio import material
import { makeStyles } from '@material-ui/core/styles';
//fin import material

const ModalAlerta = (props) => {

    const validateAlert = (algo) => {
        let result = ""
        if(algo.alert === true){
            result= "Alerta Real"
        } else {
            result = "Falso Positivo"
        }
        return result;
    }

    const DivModal = props.show && ( 
        <div className="overlay">
            <div className="popup">
            <button onClick={()=> props.close(false)}>x</button>
                <p>El status de la alerta: </p>
                <p>será actualizado a:</p>
                <h1>{validateAlert(props)}</h1>
                    <button onClick={()=> {
                        // props.setLimit(order);
                        props.close(false);
                    }}>Aceptar</button>
                    
            </div>
        </div>);

//inicio objeto css
const useStyle = makeStyles({
    alertModal: {
        fontFamily:"Roboto",
    },
})
//fin objeto css

//inicio hooks de estilos
const classes = useStyle();
//fin hooks de estilos

        return(
            <div className={classes.alertModal}>
                {DivModal}
            </div>
    )}
    
    export default ModalAlerta;