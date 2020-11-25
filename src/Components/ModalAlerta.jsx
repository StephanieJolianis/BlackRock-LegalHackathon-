const ModalAlerta = (props) => {

    const validateAlert = (algo) => {
        let result = ""
        if(algo.alert == true){
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
    
        return(
        <div>
            {DivModal}
        </div>
    )}
    
    
    export default ModalAlerta;