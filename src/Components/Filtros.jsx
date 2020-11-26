const Filtros = () => {

    return (
        <div>

            <select name="select1">
                <option value="value0" defaultValue>Tipo Alerta</option>
                <option value="value1">Depósito Rebasado</option>
                <option value="value2">Retiro Rebasado</option>
                <option value="value3">Monto Rebasado</option>
            </select>

            <select name="select2">
                <option value="value0" defaultValue>Status Alarma</option>
                <option value="value1">Alerta Real</option>
                <option value="value2">Falso Positivo</option>
                <option value="value3">No Investigado</option>
            </select>

            <select name="select3">
                <option value="value0" defaultValue>Mes</option>
                <option value="value1">Enero</option>
                <option value="value2">Febrero</option>
                <option value="value3">Marzo</option>
                <option value="value3">Abril</option>
                <option value="value3">Mayo</option>
                <option value="value3">Junio</option>
                <option value="value3">Julio</option>
                <option value="value3">Agosto</option>
                <option value="value3">Septiembre</option>
                <option value="value3">Octubre</option>
                <option value="value3">Noviembre</option>
                <option value="value3">Diciembre</option>
            </select>

            <select name="select4">
                <option value="value0" defaultValue>Año</option>
                <option value="value1">2019</option>
                <option value="value2">2020</option>
            </select>

            <select name="select5">
                <option value="value0" defaultValue>Objeto Cuenta</option>
                <option value="value1">Administración de Tesorería</option>
                <option value="value2">Caja de ahorro</option>
                <option value="value3">Diversificación de activos</option>
                <option value="value4">Fondo de ahorro</option>
                <option value="value5">Generar rendimientos</option>
                <option value="value6">Maximizar Ganancias</option>
                <option value="value7">Plan de pensiones</option>
            </select>

            <div>
                <input type="search" placeholder="Buscar por número de cuenta" />
            </div>
</div>

    );
}

export default Filtros;