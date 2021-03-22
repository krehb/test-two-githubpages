import React, {useRef, useState, useEffect} from 'react';
import { Container, Table, Jumbotron, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SideNav from '../../../components/side-nav-pages/sideNavPages';
import ReactPlayer from 'react-player/youtube'

import CubeOn from '../../../assets/img/equine/cube-on.png'
import Video from '../../../components/video/video';
import Logo from '../../../assets/img/equine/logo-small.png'
import snap1 from '../../../assets/img/equine/snap1.png'
import snap2 from '../../../assets/img/equine/snap2.png'
import target1 from '../../../assets/img/equine/target1.png'
import target2 from '../../../assets/img/equine/target2.png'
import step1 from '../../../assets/img/equine/step1.png'
import step2 from '../../../assets/img/equine/step2.png'
import step3 from '../../../assets/img/equine/step3.png'
import visual from '../../../assets/img/equine/visual.png'
import cube150 from '../../../assets/img/equine/cube-new-adadpter150-300x210.png'
import igg from '../../../assets/img/equine/Equichek-generic-1024x768.jpg'
import WhatYouSee from '../../../assets/img/equine/What-you-see.png'
import SaaUses from '../../../assets/img/equine/saa-uses.png'
import foalHorseImg from '../../../assets/img/equine/checking-horse-leg-injury-for-infection.jpg'


import Line from './line'
import Uses from './uses'
import Cases from './cases'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask, faHistory } from '@fortawesome/free-solid-svg-icons'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

export default function IgG({passingData}) {

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

      <h2 style={{color: '#317C97', fontWeight: '600', marginTop: '30px',marginBottom: '0px', letterSpacing: '-2px', textAlign: 'left'}} >Horse Infection Detection & Health Screening</h2>
      <h5 style={{color: '#317C97', fontWeight: '500', marginTop: '0px', letterSpacing: '-2px', textAlign: 'left', paddingLeft: '100px'}} >SAA</h5>

        <div className='col-top' >
            <div className='col-top-left top-left' >
                <img src={foalHorseImg} />
                <div className='text' >
                    <span className='text-1' >Minutes Matter.</span>
                </div>
                <div className='text-3' style={{fontSize: '16px'}} >
                Detect infection & inflammation earlier than other blood tests.
                </div>
            </div>
            <div className='col-top-right top-right' >
                <ReactPlayer  url='https://www.youtube.com/embed/Kk0XluyIxaY' width={renderVideoWidth} controls={true} playing={true} muted loop={true} />
            </div>
        </div>
        


        <div className='col-mid' >
        <Jumbotron ref={myRef1} className='igg-jumbo' fluid>
            <Container>
                <h3>Infection & Inflammation Detection</h3>
                <p>Don’t be left in the dark. Detect infection faster than other blood tests with SAA (Serum Amyloid A) testing. Inflammation won’t have time to hinder muscle regeneration or impact performance. Faster treatment. Less severe infection. Earlier recovery. In three simple steps and 10 min, you determine if your horse has an active inflammatory condition. EquiCheck Instructions</p>
            </Container>
        </Jumbotron>
            <div style={{display:'flex', marginBottom: '80px', flexWrap: 'wrap'}} >
                <div style={{ height: 400, width: 400 }}>
                    <Jumbotron ref={myRef1} style={{ height: 430, width: 400, backgroundColor: 'white' }}  fluid>
                        <Container>
                            <div style={{display:'flex', justifyContent: 'center', marginBottom: '30px'}} >
                                <span style={{fontSize: '18px', paddingRight: '5px'}}><span style={{fontWeight:600}}>Science</span> behind SAA in</span><span style={{fontSize: '18px', color: '#317C97', fontWeight: 600}} >EquiCheck™</span>
                                <img style={{width: '40px', height: '30px', paddingLeft: '10px'}} src={Logo} />
                            </div>
                            <p><span style={{fontSize: '16px', fontWeight: 600, paddingLeft: '10px'}} >Fibrinogen:</span>  is a glycoprotein complex, made in the liver, that circulates in the blood of all vertebrates.</p>
                            <p><span style={{fontSize: '16px',  fontWeight: 600, paddingLeft: '10px'}} >Serum amyloid A (SAA):</span> is a protein associated with high-density lipoprotein (HDL) in plasma</p>
                            <p>When a horse has an inflammation or infection, from a disease or someother reason, the horse' immune system tries to fight the disease.</p>
                            <p>From the chart on the right, you can see that SAA reacts much quicker and is easier to notice the spike. That is why EquiCheck™ use SAA to detect inflammation or infection.</p>
                        </Container>
                    </Jumbotron>
                </div>
                <div style={{ height: 400, width: 600 }}>
                    <h3 style={{marginTop: '30px'}} >SAA vs Fibrinogen</h3>
                    <Line />
                </div>
            </div>
            <div>
                <Cases/>
            </div>
            <Jumbotron className='igg-jumbo' fluid>
            <Container>
                <img src={SaaUses} width='500px' />
                <Uses/>
            </Container>
            </Jumbotron>
        </div>
        
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

        <div  className=' one-cube-three-test-container ' >
            <Container>
                <div style={{display:'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <h1 style={{paddingTop: '40px'}} ><span style={{fontWeight: 600}} >ONE</span> cube</h1>
                    <img src={CubeOn} style={{width: '150px'}} />
                </div>
                <div style={{display:'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '0px'}}>
                    <h1 style={{paddingRight:'100px'}} ><span style={{fontWeight: 600}} >THREE</span> tests</h1>
                </div>
                
                <p style={{marginTop: '10px'}} >
                <span style={{marginRight: '70px',}}  className=' one-cube-three-test ' >
                    <Link className=' one-cube-three-test ' to='/equine-igg' >
                    Immuno-Chek G Foal IgG Kit
                    </Link>
                </span>
                <span style={{marginRight: '70px',}} className=' one-cube-three-test ' >
                    <Link className=' one-cube-three-test ' to='/equine-quickp4' >
                    Quick P4 Progesterone Kit
                    </Link>
                </span>
                <span className=' one-cube-three-test ' >
                    <Link className=' one-cube-three-test ' to='/equine-saa' >
                    EquiChek™ SAA Kit
                    </Link>
                </span>
                </p>
            </Container>
            </div>

    </div>
    </div>
  </div>
  );
}

