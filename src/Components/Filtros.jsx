const Filtros = (props) => {
    return( 
        <div>

            <select onChange={(e)=> props.cambioFiltros({value:e.target.value, name:e.target.name})} name="descripcionAlerta">
            <option value="value0"defaultValue>Tipo Alerta</option>
            <option value="1">Monto Depósito Rebasado</option> 
            <option value="2">Monto Retiro Rebasado</option>
            </select>

            <select onChange={(e)=> props.cambioFiltros({value:e.target.value, name:e.target.name})} name="evaluacion">
            <option value="value0"defaultValue>Status Alarma</option>
            <option value="2">Alerta Real</option> 
            <option value="1">Falso Positivo</option>
            <option value="0">No Investigado</option>
            </select>

            <select onChange={(e)=> props.cambioFiltros({value:e.target.value, name:e.target.name})} name="mesoperacion">
            <option value="value0"defaultValue>Mes</option>
            <option value="01">Enero</option> 
            <option value="02">Febrero</option>
            <option value="03">Marzo</option>
            <option value="04">Abril</option>
            <option value="05">Mayo</option>
            <option value="06">Junio</option>
            <option value="07">Julio</option>
            <option value="08">Agosto</option>
            <option value="09">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
            </select>

            <select onChange={(e)=> props.cambioFiltros({value:e.target.value, name:e.target.name})} name="aniooperacion">
            <option value="value0"defaultValue>Año</option>
            <option value="2019">2019</option> 
            <option value="2020">2020</option>
            </select>

            <select onChange={(e)=> props.cambioFiltros({value:e.target.value, name:e.target.name})} name="objetocuenta">
            <option value="value0"defaultValue>Objeto Cuenta</option>
            <option value="1">Administración de Tesorería</option> 
            <option value="2">Caja de ahorro</option>
            <option value="3">Diversificación de activos</option>
            <option value="4">Fondo de ahorro</option>
            <option value="5">Generar rendimientos</option>
            <option value="6">Maximizar Ganancias</option>
            <option value="7">Plan de pensiones</option>
        </select>

        <div><input name="cuenta" type="search" placeholder="Buscar por número de cuenta" onChange={(e)=> props.cambioFiltros({value:e.target.value, name:e.target.name})}/></div>
            </div>
</div>

    );
}

export default Filtros;