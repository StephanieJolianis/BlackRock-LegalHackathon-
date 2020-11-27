const ModalLimite = (props) => {
    let selectedLimit = 1;
    const DivModal = props.show && ( 
        <div className="overlay">
            <div className="popup">
            <button onClick={()=> props.close(false)}>x</button>
                <p>El limite del cliente identificado: </p>
                <p>será actualizado a:</p>
                <select name="selectLimite" onChange={(e)=> selectedLimit = e.target.value}>
                <option value="1"defaultValue>1x</option>
                <option value="2">2x</option> 
                <option value="3">3x</option>
                <option value="4">4x</option>
                <option value="5">5x</option>
                <option value="6">6x</option>
                <option value="7">7x</option>
                </select>
                <br/>
                    <button onClick={()=> {
                        props.setLimit(selectedLimit);
                        props.close(false);
                    }}>Aceptar</button>
                    
            </div>
        </div>);
    return(
    <div>
        {DivModal}
    </div>
    )}


export default ModalLimite;
