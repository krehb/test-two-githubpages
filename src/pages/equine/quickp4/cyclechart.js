import React, {useState, useEffect} from 'react';
import { Chart } from "react-google-charts";

import img1 from '../../../assets/img/equine/img1.jpg'
import img2 from '../../../assets/img/equine/img2.jpg'
import img3 from '../../../assets/img/equine/img3.jpg'
import img4 from '../../../assets/img/equine/img4.jpg'

export default function CycleChart(products) {


    const [videoWidth, setVideoWidth] = useState(false)
    useEffect(() => {
        if(window.innerWidth >= 950){
            setVideoWidth(false)
            // console.log(window.innerWidth)
        } else {
            
            setVideoWidth(true)
            // console.log(window.innerWidth)
        } 
    },[]);

    let renderVideoWidth = null
    if(videoWidth){
        renderVideoWidth = '100%'
    } else  {
        renderVideoWidth = '950px'
    }
    

  return (
    <div>


        

        <Chart 
            width={renderVideoWidth}
            height={'400px'}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={[
                [ 'day' , 'progesterone (ng/mL)'],
                ['0',.2],
                ['1',.9],
                ['2',1.5],
                ['3',2.2],
                ['4',3.1],
                ['5',5],
                ['6',6.1],
                ['7',6.5],
                ['8',6.9],
                ['9',6.5],
                ['10', 6.6],
                ['11', 6],
                ['12', 4.9],
                ['13', 4.7],
                ['14', 3.6],
                ['15', 2.4],
                ['16', 1.1],
                ['17', .5],
                ['18', .2],
                ['19', .1],
                ['20', .1],
            ]}
            options={{
                hAxis: {
                title: 'Days of the Cycle',
                },
                vAxis: {
                title: 'Progesterone (ng/mL)',
                },
                curveType: 'function' ,
                animation: {
                    startup: true,
                    easing: 'inAndOut',
                    duration: 1500,
                },
                enableInteractivity: true,
            }}
            rootProps={{ 'data-testid': '1' }}
        />

        
    </div>

  );
}

