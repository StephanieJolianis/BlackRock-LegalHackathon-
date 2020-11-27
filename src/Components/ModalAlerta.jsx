import './modalAlerta.scss';

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
            <button className = 'closeButton'
            onClick={()=> props.close(false)}>x</button>
                <p className = 'modalText' >El status de la alerta: </p>
                <p className = 'modalText' >será actualizado a:</p>
                <h1>{validateAlert(props)}</h1>
                    <button className = 'acceptButton'
                    onClick={()=> {
                        // props.setLimit(order);
                        props.close(false);
                    }}>Aceptar</button>
                    
            </div>
        </div>);
    
        return(
        <div>
            {DivModal}
        </div>
    )}
    
    
    export default ModalAlerta;