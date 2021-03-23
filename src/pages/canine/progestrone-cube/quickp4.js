import React, {useRef, useState, useEffect} from 'react';
import { Container, Table, Jumbotron, Navbar } from 'react-bootstrap';

import SideNav from '../../../components/side-nav-pages/sideNavPages';
import ReactPlayer from 'react-player/youtube'


import productPhoto from '../../../assets/img/canine/box-cube.jpg'

import DogPic from '../../../assets/img/canine/dogs.jpg'
import graphic from '../../../assets/img/canine/WEB-Canine-Optical-new-cube.png'


import Chart from './cube-progest-chart'



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
                    <span className='text-1' style={{fontSize: '22px'}} >Quantitative Number Results in Minutes</span>
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
            <Container style={{textAlign: 'left'}}>
                <h3 style={{textAlign: 'center'}} >Keeping your Dogs Safe</h3>
                <p>Keep the danger at bay. Monitor your dog’s progesterone levels to determine the proper C-section timing. You want healthy puppies! Be safe. Be secure.</p>
                With one easy, on-site test, detect progesterone
                <ol>
                    <li>to accurately predict ovulation and target optimal breeding dates</li>
                    <li>to accurately time C-section when progesterone drops before whelping</li>
                </ol>
                <div style={{textAlign: 'center', marginBottom: '30px'}} >
                    <img src={graphic} />
                </div>
                <h3 style={{textAlign: 'center'}} >Canine Birth and C-Section Timing</h3>
                <p>Predicting Ovulation is done by accurately detecting the initial rise in progesterone. Ovulation usually occurs 2 days after the initial rise in progesterone. The most fertile time to breed is 2 to 4 days after ovulation.</p>
                <p>To time c-section or whelping, test progesterone starting 58 – 60 days after first breeding (average gestation 63 days). A drop in progesterone to &lt; 2 ng/mL indicates whelping will occur within 24 – 36 hours.</p>
                <h3 style={{textAlign: 'center'}} >Why C-Section Timing is Important</h3>
                <p>Determination of progesterone is very important in the Canine reproductive cycle in deciding when to breed or when to do a C-section.</p>
                <p>Canine cycles are variable, progesterone can rise slowly or very quickly (weekends & holidays included). Progesterone often varies from one cycle to the next and physical signs can be misleading.</p>
                <p>Because of the importance of knowing and planning action based on progesterone level information, the delay in getting laboratory results is best avoided. Also, doing some testing at home is less stressful to the animal and its owner.</p>
           

            </Container>
        </Jumbotron>
        </div>



        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px', marginBottom: '40px'}}>
            <div style={{width: '400px'}}>
                <h3 style={{textAlign: 'center'}} >The Science</h3>
                <p>The concentration of progesterone in the fresh sample is related to the color intensity of the Test Line. All the reagents are immobilized on the cassette and only Sample is added to get the result.</p>
                <p>Because progesterone concentration is very low (parts per billion) (ng/ml), an optical Reader is required to convert the line intensities to concentration numbers.</p>
                <p>The Cube Reader digitizes the line intensities and accurately calculates the progesterone concentration based on a standard curve programmed for the Lot. For every production Lot of test cassettes, multiple samples are tested and a standard curve is determined and stored on a Memory card.</p>

            </div>
            <Chart/>
        </div>



        <div ref={myRef3} className='benefites-container' >
            <br></br>
            <h1>Benefits</h1>
            <hr></hr>
            <div className='benefites' >
                <img className='table-logo' src={productPhoto} width='250px' height='200px' />
                <div>
                    <h4>Quick P4 Canine Test – Quantitative Readings</h4>
                    <ul>
                        <li>10 minute number results with optical cube reader</li>
                        <li>On-site testing</li>
                        <li>Visual not fluorescence technology</li>
                        <li>Result lines are visible to the eye</li>
                        <li>Room temperature stable</li>
                        <li>Long shelf life stability</li>
                    </ul>
                </div>
                <div>
                    <h4>Videos</h4>
                    <ul>
                        <li><a href='https://youtu.be/HutIA9p7XTg' target='blank'>Chopping</a></li>
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


