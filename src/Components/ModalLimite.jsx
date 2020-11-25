const ModalLimite = (props) => {
const DivModal = props.show && ( 
    <div className="overlay">
        <div className="popup">
        <button onClick={()=> props.close(false)}>x</button>
            <p>El limite del cliente identificado: </p>
            <p>será actualizado a:</p>
            <select name="select4">
            <option value="value1"defaultValue>1x</option>
            <option value="value2">2x</option> 
            <option value="value3">3x</option>
            <option value="value4">4x</option>
            <option value="value5">5x</option>
            <option value="value6">6x</option>
            <option value="value7">7x</option>
            </select>
            <br/>
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


export default ModalLimite;
