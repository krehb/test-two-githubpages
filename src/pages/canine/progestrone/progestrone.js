import React, {useRef, useState, useEffect} from 'react';
import { Container, Table, Jumbotron, Navbar } from 'react-bootstrap';

import SideNav from '../../../components/side-nav-pages/sideNavPages';
import ReactPlayer from 'react-player/youtube'


import Logo from '../../../assets/img/equine/logo-small.png'
import cube150 from '../../../assets/img/equine/cube-new-adadpter150-300x210.png'
import igg from '../../../assets/img/equine/Equichek-generic-1024x768.jpg'
import WhatYouSee from '../../../assets/img/equine/What-you-see.png'
import SaaUses from '../../../assets/img/equine/saa-uses.png'
import foalHorseImg from '../../../assets/img/equine/checking-horse-leg-injury-for-infection.jpg'

import DogPic from '../../../assets/img/canine/dog-with-puppy.jpg'
import Diagram from '../../../assets/img/canine/progesterone-c-diagram.png'

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
                <iframe src="https://giphy.com/embed/0ld9SaDL41JvZjlEt7" width="414" height="480" ></iframe>
            </Container>
        </Jumbotron>
        <Jumbotron ref={myRef2} fluid className='how-it-works' >
        <Container>
            <h1>Results In 10 min <FontAwesomeIcon icon={faHistory} /></h1>
            <div className='steps' >
            
            </div>
            <div className='ten-min' style={{fontSize: '14px', fontWeight: 500, textTransform: 'none', color: '#595959'}} >
                <div style={{backgroundColor: 'white', margin: '5px', padding: '5px', width: '400px', boxShadow: '1px 3px 3px #888888',}} >
                    <p style={{textAlign: 'left', paddingLeft: '20px'}} ><span style={{fontWeight: 600}} >Equichek™ - SAA Visual</span>, or</p>
                    <img src={WhatYouSee} />
                    <p style={{textAlign: 'left', paddingLeft: '20px'}}>Conc Range 0-200 ug/ml</p>
                </div>
                <div style={{backgroundColor: 'white', margin: '5px', padding: '5px', width: '400px', boxShadow: '1px 3px 3px #888888',}}>
                    <p style={{textAlign: 'left', paddingLeft: '20px'}} ><span style={{fontWeight: 600}}>EquiChek™-SAA Quantitative</span> with Cube to get a number</p>
                    <img src={cube150} />
                </div>
            </div>
        </Container>
        </Jumbotron>

        <div ref={myRef3} className='benefites-container' >
            <br></br>
            <h1>Benefits</h1>
            <hr></hr>
            <div className='benefites' >
                <img className='table-logo' src={igg} width='250px' height='200px' />
                <div>
                    <h4>EquiChek™ SAA kit benefits</h4>
                    <ul>
                        <li>10 minute number results with optional optical Cube reader</li>
                        <li>On-site testing</li>
                        <li>Result lines are visible to the eye</li>
                        <li>Room temperature stable</li>
                        <li>Long shelf life stability</li>
                    </ul>
                </div>
            </div>           
        </div>

        <div>
            <p>Note: The same Cube Reader can be used with the Immuno-Chek G and Quick P4 kits to get a number result!</p>
        </div>

    </div>
    </div>
  </div>
  );
}


