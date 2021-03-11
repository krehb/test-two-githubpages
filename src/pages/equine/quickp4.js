import React, {useRef, useState, useEffect} from 'react';
import { Button, Jumbotron, Container } from 'react-bootstrap';

import SideNav from '../../components/side-nav-pages/sideNavPages';
import ReactPlayer from 'react-player/youtube'
import { Link} from 'react-router-dom';

import Cube from '../../assets/img/equine/cube.jpg'
import Test from '../../assets/img/equine/test.jpg'
import InterImg from '../../assets/img/equine/equine-progesterone-levels.png'
import ImgProduct from '../../assets/img/equine/quickp4-product.jpg'
import Logo from '../../assets/img/equine/logo-small.png'
import twoLadiesWithHorse from '../../assets/img/equine/two-ladies-with-horse.jpg'

import QuickP4EquineTable from './quickp4Table';
import CycleChart from './cyclechart';
import ImgCycle from './cycleimg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faArrowAltCircleDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

export default function QuickP4Equine({passingData}) {

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


    //scroll to section 1
    const myRef1 = useRef(null)
    const myRef2 = useRef(null)
    const myRef3 = useRef(null)
    const myRef4 = useRef(null)
    const executeScroll = (e) => scrollToRef(e)

    const [sticky, setSticky] = useState(false);

    window.onscroll = () => {
        if(window.pageYOffset >= 130){
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    let renderNavClass = ''
    if(sticky){
        renderNavClass = {position: 'fixed', top: 0, zIndex: 2}
    } else {
        renderNavClass = {}
    }

  return (
<div>
    <nav className="navbar canine-nav navbar-expand-lg navbar-light bg-light small-nav " style={renderNavClass} >
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
        <SideNav passingData={passingData} />
        <div className='custom-container equine-quickp4' >


            <div className='col-top' >
            <div className='col-top-left top-left' >
                <img src={twoLadiesWithHorse} />
                <div className='text' >
                    <span className='text-1' style={{fontSize: '22px'}} >On-site progesterone number in minutes.</span>
                </div>
                <div className='text-3' style={{fontSize: '25px'}} >
                Know when the CL is active.
                </div>
            </div>
                <div className='col-top-right top-right' >
                    <ReactPlayer  url='https://www.youtube.com/embed/IETL5ldRWFk' width={renderVideoWidth} controls={true} playing={true} muted loop={true} />
                </div>
            </div>
            
            <div className='text-under' >
                <p>Don’t lose that foal! Learn about the mare and her cycle with an economical, easy-to-use progesterone test. Unsuccessful breeding? Rebreed sooner with early pregnancy detection. Discover if costly regumate therapy is necessary.</p>
            </div>


            <div ref={myRef1} >
                <h3>Equine Progesterone Cycle</h3>
                <CycleChart  />
                <ImgCycle  />
            </div>

            <div className='cube-test'  >
                <Jumbotron fluid>
                    <Container className='head' >
                        <h1>Number Results</h1>
                        <h1 className='target' >
                        Quick P4 Equine Progesterone<img src={Logo}  />
                        </h1>
                    </Container>
                </Jumbotron>
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <div>
                        <img src={Cube} width='300px' />
                        <h6>Cube Reader</h6>
                    </div>
                    <div>
                        <img src={Test} width='300px' style={{marginTop: '100px', marginBottom: '30px'}} />
                        <h6>Get number results in 10 minutes​ using the Cube reader.</h6>
                    </div>
                </div>
            </div>

            <div ref={myRef2} >
                <QuickP4EquineTable   />
            </div>

            <div ref={myRef3} className='why' style={{textAlign: 'left',  paddingTop: '50px'}} >
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
                    <img src={InterImg}  />
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
                <div style={{display: 'flex', justifyContent: 'center',  flexWrap: 'wrap', }} >
                    <div style={{paddingLeft: '20px',}}>
                        <img src={ImgProduct} />
                    </div>
                    <div style={{textAlign: 'left', paddingLeft: '20px', width: '300px'}}>
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

            <Jumbotron fluid>
            <Container>
                <h1>one cube three tests</h1>
                <p style={{marginTop: '20px'}} >
                <span style={{marginRight: '70px',}} >
                    
                    <Link className='side-nav-link canine ' to='/equine-igg' >
                    Equine Immuno-Chek G Foal IgG Kit
                    </Link>
                </span>
                <span style={{marginRight: '70px',}}>
                    
                    <Link className='side-nav-link canine ' to='/equine-quickp4' >
                    Quick P4 Progesterone Kit
                    </Link>
                </span>
                <span>
                    
                    <Link className='side-nav-link canine ' to='/equine-saa' >
                    EquiChek™ SAA Kit
                    </Link>
                </span>
                </p>
            </Container>
            </Jumbotron>

            </div>
        </div>
    </div>
  );
}

