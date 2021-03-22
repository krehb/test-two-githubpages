import React, {useEffect, useState} from 'react';
import {useSpring, animated} from 'react-spring'

import img1 from '../../../assets/img/equine/img1.jpg'
import img2 from '../../../assets/img/equine/img2.jpg'
import img3 from '../../../assets/img/equine/img3.jpg'
import img4 from '../../../assets/img/equine/img4.jpg'

export default function ImgChart() {
    const [imgOpacity, setOpacity] = useState(1)

    let renderOpacity1 = 0.5
    let renderOpacity2 = 0.5
    let renderOpacity3 = 0.5
    let renderOpacity4 = 0.5

    

    useEffect(() => {
        setTimeout(function(){ 
            if(imgOpacity === 4){
                setOpacity(1)
            } else {
                setOpacity(imgOpacity + 1)
            }
        }, 2000);
    });


    if(imgOpacity === 1){
        renderOpacity1 = 1
        renderOpacity2 = 0.5
        renderOpacity3 = 0.5
        renderOpacity4 = 0.5
    } else if (imgOpacity === 2){
        renderOpacity1 = .5
        renderOpacity2 = 1
        renderOpacity3 = 0.5
        renderOpacity4 = 0.5
    } else if (imgOpacity === 3){
        renderOpacity1 = 0.5
        renderOpacity2 = 0.5
        renderOpacity3 = 1
        renderOpacity4 = 0.5
    } else if (imgOpacity === 4){
        renderOpacity1 = 0.5
        renderOpacity2 = 0.5
        renderOpacity3 = 0.5
        renderOpacity4 = 1
    }

    

  return (
    <div>

        <div style={{textAlign: 'left', display: 'flex', justifyContent: 'center', flexWrap:'wrap' }} >
            <div>
                <img  src={img1} style={{opacity: renderOpacity1}} />
                <div style={{ display: 'flex'}} >
                    <div style={{ width: '80px'}}>
                        Growing Follicles
                    </div>
                    <div style={{paddingLeft: '0px', width: '100px'}}>
                        Corpus Luteum (CL) producing progesterone
                    </div>
                </div>
            </div>
            <div style={{paddingLeft: '50px'}}>
                <img  src={img2} style={{opacity: renderOpacity2}} />
                <div style={{ display: 'flex'}}  >
                    <div style={{ width: '80px'}}>
                        Larger Follicles
                    </div>
                    <div style={{paddingLeft: '0px', width: '100px'}}>
                        CL Regressing
                    </div>
                </div>
            </div>
            <div style={{paddingLeft: '50px'}}>
                <img  src={img3} style={{opacity: renderOpacity3}} />
                <div style={{ display: 'flex'}}  >
                    <div style={{ width: '80px'}}>
                        Big Follicle Ready to Ovulate
                    </div>
                    <div style={{paddingLeft: '10px', width: '100px'}}>
                        CL Regressed
                    </div>
                </div>
            </div>
            <div style={{paddingLeft: '50px'}}>
                <img  src={img4} style={{opacity: renderOpacity4}} />
                <div  >
                    <div style={{paddingLeft: '5px'}}>
                        Follicle Ovulate
                    </div>
                </div>
            </div>
        </div>


    </div>

  );
}

