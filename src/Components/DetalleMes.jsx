import react from "react";
import { render } from "react-dom";

import data from '../Data/BlackRockII.json';


const DetalleMes = () => {

    

    for (let i=0; i<9; i++){
        console.log(data[i].NIC)
    }
    


    return( 
    <h1>DetalleMes</h1>
    );
}

export default DetalleMes;