import React, { useEffect, useState } from 'react';
import dataalertas from '../Data/data.json';
import { Line } from 'react-chartjs-2';







const ChartRock = () => {   

    const chart = () => {
        setChartData({
            labels: ['mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre'],
            datasets : [
                {
                    label : 'número de alertas',
                    data: [ 1, 2, 3, 4, 2, 6],
                    backgroundColor : [
                        '#FC9BB3'
                    ],
                    borderWidth: 5
                }
            ]
        })
    }

    useEffect(()=>{
        chart()
    }, [])





    return( 
        <div className= 'chart'>
            <Line data = {chartData} options= {{
                title : {text: 'Número de alertas mensuales (últimos seis meses) ', display : true},
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }}  />
        </div>
    );
}

export default ChartRock;