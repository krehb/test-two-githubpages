import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../../components/side-nav-pages/sideNavPages'
import HorseAndFoal from '../../assets/img/equine/lady-with-horse.jpg'
import IgGPic from '../../assets/img/equine/igg.png'
import saa from '../../assets/img/equine/saa.jpg'
import quickp4 from '../../assets/img/equine/quickp4.jpg'
import ReactPlayer from 'react-player/youtube'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'


export default function Equine(products) {

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
        {/* <ul className="navbar-nav align-items-center">
            <li className="nav-item my-item">
                <a className="nav-link"  >
                <Link className='nav-link' to='/equine-quickp4' >
                    Equine Progesterone
                </Link>
                </a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >|</a>
            </li>
            <li className="nav-item my-item">
                <Link className='nav-link' to='/equine-igg' >
                    Cube Foal IgG
                </Link>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >|</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >Infection Detection (SAA)</a>
            </li>
        </ul> */}
      </div>
    </nav>
    <div className='container-w-side-nav'>
        <SideNav/>
      <div className='equine' style={{width: '1200px'}} >

        <h2 style={{color: '#317C97', fontWeight: '600', marginTop: '30px', letterSpacing: '-2px'}} >Equine Progesterone, IgG and SAA Testing</h2>

        <div className='col-top' >
            <div className='col-top-left' >
                <img src={HorseAndFoal} />
                <div className='text' >
                    <span className='text-1' >Stakes are high</span>
                </div>
                <div className='text-3' >
                Testing you can count on.
                </div>
            </div>
            <div className='col-top-right' >
                <ReactPlayer  url='https://www.youtube.com/embed/g8uU-ID7M8Y' controls={true} playing={true} loop={true} />
            </div>
        </div>
        
        <div className='col-mid' >
            <div className='mid-head' ></div>
            <div className='mid-body' >
                <p>Secure the foal you’ve been waiting for! Use progesterone to learn where the mare is in her cycle to know when to breed. Use a simple test after birth to protect your newborn foal by testing for passive transfer of IgG (needs adequate levels > 800 mg/dL), and maintain your horse’s health with early infection detection with SAA testing. The cube machine reader gives exact progesterone, IgG and SAA number results.</p>
                <p><span style={{paddingRight: '20px'}} >Improve your chances.</span><span>Test your horse.</span></p>
            </div>
        </div>


        <div style={{display: 'flex', justifyContent: 'center', color: '#317C97', backgroundColor: '#eafbffea', paddingTop: '30px'}} >
            <div>
                <h3 style={{fontWeight: '600', letterSpacing: '-1px'}} >Equine Progesterone Monitoring</h3>
                <h4 style={orangeText} >Quick P4 with Cube</h4>
                <img style={imgStyle} src={quickp4} />
                <p>Requines cube reader for number results</p>
                <div style={lineStyle} ></div>
                <p>Monitor exact progesterone level</p>
                <div style={lineStyle} ></div>
                <p>Reduce labor & regumate cost</p>
                <div style={lineStyle} ></div>
                <p>2yr+ Shelf Life &#9679; Room Temp Tests</p>
            </div>
            <div>
                <h3 style={{fontWeight: '600', letterSpacing: '-1px'}} >Foal IgG Monitoring</h3>
                <h4  style={orangeText} >Immuno-Chek G - IgG</h4>
                <img style={imgStyle} src={IgGPic} />
                <p>Accurately Monitor Foal IgG Levels</p>
                <div style={lineStyle} ></div>
                <p>Know if Colostrum Supplement is Needed</p>
                <div style={lineStyle} ></div>
                <p>2yr+ Shelf Life &#9679; Room Temp Tests</p>
                <div style={lineStyle} ></div>
                <p>Get number results with cube reader (optional)</p>
            </div>
            <div>
                <h3 style={{fontWeight: '600', letterSpacing: '-1px'}} >Horse Infection Detection - SAA</h3>
                <h4 style={orangeText} >EquiChek&trade; - SAA</h4>
                <img style={imgStyle} src={saa} />
                <p>Confirm Infection Levels</p>
                <div style={lineStyle} ></div>
                <p>Treat early & Avoid Serious Illnesses</p>
                <div style={lineStyle} ></div>
                <p>2yr+ Shelf Life &#9679; Room Temp Tests</p>
                <div style={lineStyle} ></div>  
                <p>Get number results with cube reader (optional)</p>
            </div>
        </div>

        <div style={{backgroundColor: '#317C97', color: 'white', padding: '50px 0px 30px 0px', marginTop: '30px'}} >
            <FontAwesomeIcon icon={faQuoteLeft} style={{marginRight: '10px'}} />TargetVet Equine test kits are easy to use, cost effective, and give results in 10 minutes instead of 24 hours for lab results.  These stall-side test kits save us thousands of dollars annually, enabling immediate treatment, saving lives & speeding recovery in our 100 horse facility.<FontAwesomeIcon style={{marginLeft: '10px'}} icon={faQuoteRight} />
            <p style={{fontStyle: 'italic', marginTop: '20px'}} >- Laura Young, CVT, C/O General Manager Southwind Farms</p>
        </div>
        
    </div>
  </div>
  </div>
  );
}

