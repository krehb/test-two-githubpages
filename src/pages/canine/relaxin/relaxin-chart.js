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
        width={'500px'}
        height={'300px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
            ['Weeks of Pregnancy', 'Relaxin (ng/ml)'],
            ['Day 1', 0],
            ['Day 2', 0],
            ['Day 3', 0],
            ['Day 4', 10],
            ['Day 5', 20],
            ['Day 6', 30],
            ['Day 7', 40],
            ['Day 8', 50],
            ['Day 9', 60],
        ]}
        options={{
            hAxis: {
            title: 'Relaxin (ng/ml)',
            },
            vAxis: {
            title: 'Weeks of Pregnancy',
            },
        }}
        // For tests
        rootProps={{ 'data-testid': '2' }}
        />

        
    </div>

  );
}

