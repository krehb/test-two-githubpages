import React, {useRef, useState, useEffect} from 'react';
import { Container, Table, Jumbotron, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import SideNav from '../../../components/side-nav-pages/sideNavPages';
import ReactPlayer from 'react-player/youtube'


import productPhoto from '../../../assets/img/canine/relaxin-product.jpg'

import DogPic from '../../../assets/img/canine/vets-use-relaxin-pro.jpg'
import graphic from '../../../assets/img/canine/relaxin-pro-diagram.jpg'

import Chart from './relaxin-chart'






const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

export default function Progesterone({passingData, setCategoryHandler, setGroup}) {

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

    let history = useHistory();
    const routeBuyHandler = () => {
        setCategoryHandler('Canine Pregnancy Relaxin')
        setGroup(3)
        history.push("/store");
        window.scroll(0,0)
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
                    <span className='text-1' style={{fontSize: '22px'}} >Puppies on the way?</span>
                </div>
                <div className='text-3' style={{fontSize: '16px'}} >
                Find out easily with Relaxin Pro.
                </div>
            </div>
            <div className='col-top-right top-right' >
                <ReactPlayer  url='https://www.youtube.com/embed/Kk0XluyIxaY' width={renderVideoWidth} controls={true} playing={true} muted loop={true} />
            </div>
        </div>
        


        <div className='col-mid' >
        <Jumbotron ref={myRef1} className='igg-jumbo' fluid>
            <Container style={{textAlign: 'left'}}>
                <h3 style={{textAlign: 'center', color: '#365F91', fontWeight: 600}} >Canine Pregnancy Testing with Relaxin Pro</h3>
                <p style={{textAlign: 'center'}} >Is your dog really pregnant? Know early.</p>
                <p style={{textAlign: 'center'}} >Discover underlying causes of a lost pregnancy.</p>
                <p style={{textAlign: 'center', color: '#365F91', fontWeight: 600}}> Save time. <span style={{marginLeft: '20px', marginRight: '20px'}} >Save money.</span> Use Relaxin Pro.</p>
                
                <div style={{display: 'flex'}} >
                    
                    <Chart/>
                    <div style={{marginTop: '30px', padding: '20px'}}>
                        <p>Relaxin is a hormone which is produced by the corpus luteum when the fertilized egg implants.</p>
                        <p>Relaxin Pro is a reliable and specific test for pregnancy diagnosis.</p>
                        <p>Test can be done ~ 21 days after breeding.</p>
                    </div>
                </div>
                

                <h3 style={{textAlign: 'center', marginTop: '50px'}} >How To Run a Relaxin Test</h3>
                <div style={{display: 'flex', backgroundColor: 'white', padding: '40px', flexWrap: 'wrap'}}> 
                    <div>
                        <h4>Steps</h4>
                        <p>Collect blood sample in a green top tube included in kit.  Follow instructions:</p>
                        <ol>
                            <li>Add 2 drops of plasma to cassette.</li>
                            <li>Add 2 drops of Wash Buffer.</li>
                            <li>Wait 10-15 minutes.</li>
                        </ol>
                        <p>Presence of 2 lines indicates pregnancy. Control line must always be present to indicate a valid test.</p>
                    </div>
                    <img src={graphic} style={{marginLeft: '20px'}} />
                </div>

            </Container>
        </Jumbotron>
        </div>





        <div ref={myRef3} className='benefites-container' >
            <br></br>
            <h1>Benefits</h1>
            <hr></hr>
            <div className='benefites' >
                <img className='table-logo' src={productPhoto} width='250px' height='200px' />
                <div>
                    <h4>Relaxin Pro – Visual Results</h4>
                    <ul>
                        <li>Detect dog pregnancy earlier</li>
                        <li>Accurate results in minutes</li>
                        <li>Reliable and specific</li>
                        <li>Cut your costs</li>
                        <li>Get a head start on nutritional supplements</li>
                        <li>Indicates loss in pregnancy</li>
                    </ul>
                </div>
            </div> 
            <div style={{marginBottom: '30px'}} >
                <Button onClick={routeBuyHandler} >Buy</Button>
            </div>          
        </div>



    </div>
    </div>
  </div>
  );
}


