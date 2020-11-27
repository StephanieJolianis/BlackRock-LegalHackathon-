
import './modalAlerta.scss';

//inicio import material
import { makeStyles } from '@material-ui/core/styles';
//fin import material


const saveEvaluation = (evaluation)=>{
    let evaluaciones = JSON.parse(localStorage.getItem("evaluaciones"));
    if(!evaluaciones)
        evaluaciones = [];
    let actualiza = evaluaciones.filter(ev => ev.id != evaluation.id);
    actualiza.push({
        id : evaluation.id,
        limite : evaluation.limite,
        analisis : evaluation.analisis,
        evaluacion : evaluation.evaluacion,
        estado : evaluation.estado
    });

localStorage.setItem("evaluaciones", JSON.stringify(actualiza));
}



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
            <button className = 'closeButton' onClick={()=> props.close(false)}>x</button>
                <p className = 'modalText' >El status de la alerta: {props.idAlerta}</p>
                <p className = 'modalText' >será actualizado a:</p>
                <h1>{validateAlert(props)}</h1>
                    <button className = 'acceptButton' onClick={()=> {
                        props.setStatus(props.alert ? "evaluada" : "En investigacion");
                        saveEvaluation({
                            id : props.idAlerta,
                            limite : props.limit,
                            analisis : props.analisis,
                            evaluacion : props.alert ? "Alerta Real" : "Falso Positivo",
                            estado : "evaluada"
                        })
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