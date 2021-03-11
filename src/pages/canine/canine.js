import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../../components/side-nav-pages/sideNavPages'
import pugs from '../../assets/img/canine/pug-with-puppies.jpg'
import relaxin from '../../assets/img/canine/c-Relaxin-Pro.jpg'
import target from '../../assets/img/canine/target.jpg'
import quickp4 from '../../assets/img/canine/quickp4.jpg'
import ReactPlayer from 'react-player/youtube'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'


export default function Canine({passingData}) {

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

    const imgStyle = {
        width: '130px',
        marginBottom: '20px'
    }

    const orangeText = {
        color: '#D16000',
        fontWeight: '600'
    }

    const lineStyle = {
        backgroundColor: '#317C97',
        width: '100px',
        height: '2px',
        marginLeft: '38%',
        marginBottom: '10px'
    }

  return (
<div>
    <nav className="navbar canine-nav navbar-expand-lg navbar-light bg-light small-nav ">
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

      </div>
    </nav>
    <div className='container-w-side-nav'>
        <SideNav passingData={passingData} />
      <div className='custom-container'  >

        <h2 style={{color: '#317C97', fontWeight: '600', marginTop: '30px', letterSpacing: '-2px'}} >Canine Progesterone & Relaxin Testing</h2>

        <div className='col-top' >
            <div className='col-top-left top-left' >
                <img src={pugs} />
                <div className='text' >
                    <span className='text-1' >Timing is everything</span>
                </div>
                <div className='text-3' style={{letterSpacing: '-1px', fontSize: '26px'}} >
                Improve success from breeding to birth
                </div>
            </div>
            <div className='col-top-right top-right' >
                <ReactPlayer  url='https://www.youtube.com/embed/g8uU-ID7M8Y' width={renderVideoWidth} controls={true} playing={true} loop={true} />
            </div>
        </div>
        
        <div className='col-mid' >
            <div className='mid-head' ></div>
            <div className='mid-body' >
                <p>Accurately predict ovulation. Detect pregnancy early. Know exactly when to time a C-section for the healthiest puppies. Worry less. Achieve more.</p>
            </div>
        </div>


        <div style={{display: 'flex', justifyContent: 'center', flexWrap:'wrap', color: '#317C97', backgroundColor: '#eafbffea', padding: '30px'}} >
            <div style={{width: '300px'}} >
                <h3 style={{fontWeight: '600', letterSpacing: '-1px'}} >Breeding & C-Section Timing - Visual Results</h3>
                <h4 style={orangeText} >Target</h4>
                <img style={imgStyle} src={target} />
                <p>Easily readable visual results</p>
                <div style={lineStyle} ></div>
                <p>No reader required</p>
                <div style={lineStyle} ></div>
                <p>Detect Earliest Signs of Ovulation</p>
                <div style={lineStyle} ></div>
                <p>Accurately time C-Section</p>
            </div>
            <div style={{width: '300px'}} >
                <h3 style={{fontWeight: '600', letterSpacing: '-1px'}} >Breeding & C-Section Timing - Number Results</h3>
                <h4  style={orangeText} >Quick P4 with Cube</h4>
                <img style={imgStyle} src={quickp4} />
                <p>Requines Cube Reader for Number Results</p>
                <div style={lineStyle} ></div>
                <p>Detect Earliest Signs of Ovulations</p>
                <div style={lineStyle} ></div>
                <p>Accurately Time C-Section</p>
                <div style={lineStyle} ></div>
                <p>2yr+ Shelf Life &#9679; Room Temp Tests</p>
            </div>
            <div style={{width: '300px'}} >
                <h3 style={{fontWeight: '600', letterSpacing: '-1px'}} >Pregnancy Testing</h3>
                <h4 style={orangeText} >Relaxin Pro</h4>
                <img style={imgStyle} src={relaxin} />
                <p>Determine Pregnancy at ~23 days</p>
                <div style={lineStyle} ></div>
                <p>Accurate Results in Minutes</p>
                <div style={lineStyle} ></div>
                <p>2yr+ Shelf Life</p>
                <div style={lineStyle} ></div>  
                <p>Room Temp Tests</p>
            </div>
        </div>

        <div style={{backgroundColor: '#317C97', color: 'white', padding: '50px 10px 30px 10px', marginTop: '30px'}} >
            <FontAwesomeIcon icon={faQuoteLeft} style={{marginRight: '10px'}} />I bought a Target Canine Ovulation kit after being unsuccessful at breeding my labrador for 2 years. Before trying this kit, I spent all sorts of money on alternatives. The Target test indicated to breed on day 22. She was willing to be bred by the stud dog and as a result I had a litter of 11 puppies!<FontAwesomeIcon style={{marginLeft: '10px'}} icon={faQuoteRight} />
            <p style={{fontStyle: 'italic', marginTop: '20px'}} >- Eric Taylor, PA</p>
        </div>
        
    </div>
  </div>
  </div>
  );
}


