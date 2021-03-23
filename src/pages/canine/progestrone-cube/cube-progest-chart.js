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
        renderVideoWidth = '400px'
    } else  {
        renderVideoWidth = '400px'
    }
    

  return (
    <div>


        

        <Chart 
            width={renderVideoWidth}
            height={'400px'}
            chartType="ScatterChart"
            loader={<div>Loading Chart</div>}
            data={[
                [ 'Cube Line Intensity' , 'progesterone (ng/mL)'],
                [.2,.2],
                [.5,.5],
                [1.2,2.3],
                [1.7,6],
                [1.8,6],
                [2.2,7.5],
                [2.3,13],
                [2.7,15],
                [3,6.17],
                [3.1,18],
                [3.2, 20],
                [3.3, 32],
            ]}
            options={{
                hAxis: {
                title: 'Progesterone (ng/mL)',
                logScale: true
                },
                vAxis: {
                title: 'Cube Line Intensity',
                },
                trendlines: {
                    0: {type: 'exponential', color: '#333', opacity: 1},
                    1: {type: 'linear', color: '#111', opacity: .3}
                },
                curveType: 'function' ,
                animation: {
                    startup: true,
                    easing: 'inAndOut',
                    duration: 1500,
                },
                enableInteractivity: false,
            }}
            rootProps={{ 'data-testid': '1' }}
        />

        
    </div>

  );
}

