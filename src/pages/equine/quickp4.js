import React, {useRef, useState} from 'react';
import { Button, Jumbotron, Container } from 'react-bootstrap';

import SideNav from '../../components/side-nav-pages/sideNavPages';
import ReactPlayer from 'react-player/youtube'

import Cube from '../../assets/img/equine/cube.jpg'
import Test from '../../assets/img/equine/test.jpg'
import InterImg from '../../assets/img/equine/equine-progesterone-levels.png'
import ImgProduct from '../../assets/img/equine/quickp4-product.jpg'
import Logo from '../../assets/img/equine/logo-small.png'

import QuickP4EquineTable from './quickp4Table';
import CycleChart from './cyclechart';
import ImgCycle from './cycleimg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faArrowAltCircleDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

export default function QuickP4Equine(products) {

    //scroll to section 1
    const myRef1 = useRef(null)
    const myRef2 = useRef(null)
    const myRef3 = useRef(null)
    const myRef4 = useRef(null)
    const executeScroll = (e) => scrollToRef(e)

    

  return (
<div>
    <nav className="navbar canine-nav navbar-expand-lg navbar-light bg-light small-nav ">
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav align-items-center">
            <li className="nav-item my-item">
                <a className="nav-link" onClick={() => executeScroll(myRef1)} >Progesterone Cycle</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >|</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" onClick={() => executeScroll(myRef2)} >Quick P4 vs Lab</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >|</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" onClick={() => executeScroll(myRef3)} >Why Progesterone</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >|</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" onClick={() => executeScroll(myRef4)} >Benefits</a>
            </li>
        </ul>
      </div>
    </nav>
    <div className='container-w-side-nav' >
        <SideNav/>
        <div className='equine-quickp4' >
            <div className='col-top-p4' >
                <div className='col-top-left' >
                    <div className='text' >
                        <span className='text-2' >
                        On-site progesterone number in minutes.
                        </span>
                    </div>
                    <div className='text-3' >
                    Know when the CL is active.
                    </div>
                </div>
                <div className='col-top-right' >
                    <ReactPlayer className='q4-vid' url='https://www.youtube.com/embed/IETL5ldRWFk' controls={true} playing={true} muted loop={true} />
                </div>
            </div>
            
            <div className='text-under' >
                <p>Don’t lose that foal! Learn about the mare and her cycle with an economical, easy-to-use progesterone test. Unsuccessful breeding? Rebreed sooner with early pregnancy detection. Discover if costly regumate therapy is necessary.</p>
            </div>


            <div ref={myRef1} >
                <h3>Equine Progesterone Cycle</h3>
                <CycleChart/>
                <ImgCycle />
            </div>

            <div className='cube-test' >
                <Jumbotron fluid>
                    <Container className='head' >
                        <h1>Number Results</h1>
                        <h1 className='target' >
                        Quick P4 Equine Progesterone<img src={Logo}  />
                        </h1>
                    </Container>
                </Jumbotron>
                <img src={Cube} width='300px' />
                <img src={Test} width='300px' />
            </div>

            <div ref={myRef2} >
                <QuickP4EquineTable />
            </div>

            <div ref={myRef3} className='why' style={{textAlign: 'left', paddingLeft: '50px', paddingTop: '50px'}} >
                <h1 >Why Progesterone</h1>
                <p>Determination of progesterone is very important in many aspects of a mare’s reproductive cycle – in maintaining pregnancy, determining where the mare is in the cycle, embryo viability … and more.</p>
                <p>Because of the delay and difficulty in getting accurate progesterone results from a laboratory, equine practitioners have used extensive progesterone supplementation rather than planning actions based on knowledge of actual progesterone levels present.</p>
                <ul>
                    <li>Progesterone Number Result developed for fresh Equine sera</li>
                    <li>Avoid Excess Regumate Supplementation</li>
                    <li>Supplement Regumate based on Knowing Progesterone Present</li>
                </ul>

                <div style={{textAlign: 'center' }} >
                    <h3>Interpretation and Accuracy with Cube Reader</h3>
                    <img src={InterImg} width='700px' />
                    <div>
                        <ul  style={{textAlign: 'left', paddingLeft: '150px', paddingTop: '20px'}} >
                            <li>Calculation is the result of multiple photos (data points).</li>
                            <li>Both Test and Control Lines are used in the interpolation of the stored Standard Curve.</li>
                            <li>The darkest part of Test & Control Lines are used in Calculation with background correction.</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div ref={myRef4} className='benefites-container' >
                <h3   >Benefits</h3>
                <div style={{display: 'flex', paddingLeft: '50px'}} >
                    <div style={{paddingLeft: '20px'}}>
                        <img src={ImgProduct} />
                    </div>
                    <div style={{textAlign: 'left', paddingLeft: '20px'}}>
                        <h5>Quick P4 Progesterone Kit – Quantitative Results with Cube Reader</h5>
                        <ul>
                            <li>Cube Reader can be used with the Immuno-Chek G and Equichek-SAA kits to get a number result!</li>
                            <li>10-minute number results with optical cube reader</li>
                            <li>On-site testing</li>
                            <li>Visual, not fluorescence technology</li>
                            <li>Result lines are visible to the eye for easy checking</li>
                            <li>Room temperature stable</li>
                            <li>Long shelf life stability</li>
                        </ul>
                    </div>
                    
                </div>
                <Button style={{marginLeft: '50px'}}>Buy</Button>
            </div>



            </div>
        </div>
    </div>
  );
}

