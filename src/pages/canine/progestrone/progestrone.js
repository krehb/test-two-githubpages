import React, {useRef, useState, useEffect} from 'react';
import { Container, Table, Jumbotron, Navbar } from 'react-bootstrap';

import SideNav from '../../../components/side-nav-pages/sideNavPages';
import ReactPlayer from 'react-player/youtube'


import productPhoto from '../../../assets/img/canine/cup-target.jpg'

import DogPic from '../../../assets/img/canine/dog-with-puppy.jpg'
import Diagram from '../../../assets/img/canine/progesterone-c-diagram.png'
import CubeTest from '../../../assets/img/canine/targetvet-cup-gif.gif'

import Interpretation from './interpretation'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask, faHistory } from '@fortawesome/free-solid-svg-icons'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

export default function Progesterone({passingData}) {

    const [sticky, setSticky] = useState(false);

    //scroll to section 1
    const myRef1 = useRef(null)
    const myRef2 = useRef(null)
    const myRef3 = useRef(null)
    const executeScroll = (e) => scrollToRef(e)

    window.onscroll = () => {
        if(window.pageYOffset >= 130){
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    let renderNavClass = ''
    if(sticky){
        renderNavClass = {position: 'fixed', top: 0}
    } else {
        renderNavClass = {}
    }


    const [videoWidth, setVideoWidth] = useState(false)
    useEffect(() => {
        if(window.innerWidth >= 480){
            setVideoWidth(false)
        } else {
            
            setVideoWidth(true)
            console.log(window.innerWidth)
        } 
    },[]);

    let renderVideoWidth = null
    if(videoWidth){
        renderVideoWidth = '100%'
    } else  {
        renderVideoWidth = null
    }


  return (
<div>

    <div className='container-w-side-nav' >
        <SideNav passingData={passingData}/>
      <div className='custom-container equine-igg'  >
        <div className='col-top' >
            <div className='col-top-left top-left' >
                <img src={DogPic} />
                <div className='text' >
                    <span className='text-1' style={{fontSize: '22px'}} >Accurate Visual Results in Minutes</span>
                </div>
                <div className='text-3' style={{fontSize: '16px'}} >
                Breed with confidence.
                </div>
            </div>
            <div className='col-top-right top-right' >
                <ReactPlayer  url='https://www.youtube.com/embed/Kk0XluyIxaY' width={renderVideoWidth} controls={true} playing={true} muted loop={true} />
            </div>
        </div>
        


        <div className='col-mid' >
        <Jumbotron ref={myRef1} className='igg-jumbo' fluid>
            <Container>
                <h3>One easy, On-site Test, Detect Progesterone</h3>
                <p>Something about why progesterone and what is the purpose</p>
                {/* <ol style={{textAlign: 'left', marginLeft: '60px'}}>
                    <li>to accurately predict ovulation and target optimal breeding dates</li>
                    <li>to accurately time C-section when progesterone drops before whelping</li>
                </ol> */}
            </Container>
        </Jumbotron>
        </div>
        <div>
                <br></br>
                <h3>Science Behind Progesterone</h3>
                <br></br>

                <div>
                    <img src={Diagram} />
                </div>
                <br></br>
                <p>Predicting Ovulation is done by accurately detecting the initial rise in progesterone (from C1 to C2). Ovulation usually occurs 2 days after the initial rise in progesterone (from C2 to C3). The most fertile time to breed is 2 to 4 days after ovulation (C4).</p>
                <p>To time C-section or whelping, test progesterone starting 58 – 60 days after first breeding (average gestation 63 days). A drop in progesterone to &lt; 2 ng/mL (from C4 to dark C2 or C1) indicates whelping will occur within 24 – 36 hours.</p>
        </div>
        <Jumbotron ref={myRef1} className='igg-jumbo' fluid>
            <Container>
                
                <Interpretation/>
                
            </Container>
        </Jumbotron>

        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px'}}>
            <div>
                <img src={CubeTest} style={{width: '200px'}} />
            </div>
            <div style={{width: '500px', marginTop: '60px'}} >
                <h3>Technology in Target Test Cup</h3>
                <p>Target vertical filter design allows efficient washing of all unwanted blood components. Color produced is accurately related only to the Progesterone in the serum sample.</p>
            </div>
        </div>



        <div ref={myRef3} className='benefites-container' >
            <br></br>
            <h1>Benefits</h1>
            <hr></hr>
            <div className='benefites' >
                <img className='table-logo' src={productPhoto} width='250px' height='200px' />
                <div>
                    <h4>Target Test – Visual Readings</h4>
                    <ul>
                        <li>9 minute results</li>
                        <li>On-site testing</li>
                        <li>One Year shelf-life</li>
                        <li>Cut your costs</li>
                        <li>Filter format</li>
                    </ul>
                </div>
                <div>
                    <h4>Videos</h4>
                    <ul>
                        <li><a href='https://youtu.be/HutIA9p7XTg' target='blank'>How to Run a Target test</a></li>
                        <li><a href='https://youtu.be/Vx02EIU_Y4c' target='blank' >How to Draw Blood</a></li>
                    </ul>
                </div>
            </div>           
        </div>



    </div>
    </div>
  </div>
  );
}


