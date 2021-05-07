import React, {useState, useEffect} from 'react';
import { Chart } from "react-google-charts";

import img1 from '../../../assets/img/equine/img1.jpg'
import img2 from '../../../assets/img/equine/img2.jpg'
import img3 from '../../../assets/img/equine/img3.jpg'
import img4 from '../../../assets/img/equine/img4.jpg'

export default function CycleChart(products) {

    const [data, setdata] = useState(2)
    const [data1, setdata1] = useState(1)
    const [data2, setdata2] = useState(1)
    const [data3, setdata3] = useState(1)
    const [data4, setdata4] = useState(1)

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

    setTimeout(() => {
        setdata(data + 1)
        if(data === 4){
            setdata(1)
        }

        if(data === 1){
            setdata1(2.2)
            setdata2(0)
            setdata3(0)
            setdata4(0)
        } else if (data === 2){
            setdata1(0)
            setdata2(6.9)
            setdata3(0)
            setdata4(0)
        } else if (data === 3){
            setdata1(0)
            setdata2(0)
            setdata3(3.6)
            setdata4(0)
        } else if (data === 4){
            setdata1(0)
            setdata2(0)
            setdata3(0)
            setdata4(2.2)
        }

    }, 2000);
    

  return (
    <div>


        

        <Chart 
            width={renderVideoWidth}
            height={'400px'}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={[
                [ 'day' , 'progesterone (ng/mL)', 'sd'],
                ['0',.2, 0],
                ['1',.9, 0],
                ['2',1.5, 0],
                ['3',2.2, data1],
                ['4',3.1, 0],
                ['5',5, 0],
                ['6',6.1, 0],
                ['7',6.5, 0],
                ['8',6.9, data2],
                ['9',6.5, 0],
                ['10', 6.6, 0],
                ['11', 6, 0],
                ['12', 4.9, 0],
                ['13', 4.7, 0],
                ['14', 3.6, data3],
                ['15', 2.4, 0],
                ['16', 1.1, 0],
                ['17', .5, 0],
                ['18', .2, 0],
                ['19', .1, 0],
                ['20', .1, data4],
            ]}
            options={{
                legend: {position: 'none'},
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

