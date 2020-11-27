import React, { useEffect, useState, Fragment } from 'react';
import { Line } from 'react-chartjs-2';







const ChartRock = () => {  
    
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: ['mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre'],
            datasets : [
                {
                    label : 'número de alertas',
                    data: [ 14, 10, 12, 23, 22, 36],
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
        <Fragment>

            <div style =  {{height : '350px', width : '340px' }} >
        
        
            <Line data = {chartData} options= {{
                title : {text: 'Número de alertas mensuales (últimos seis meses) ', display : true},
                responsive : true,
                maintainAspectRatio: false,                
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }}],
                        
                        xAxes: [{
                            ticks: {
                                autoSkip: false,
                                maxRotation: 180,
                                minRotation: 90
                            },
                            position: 'left'
                        }]
                            }
            }}  />
            </div>
            
            </Fragment>
        
    );
}

export default ChartRock;