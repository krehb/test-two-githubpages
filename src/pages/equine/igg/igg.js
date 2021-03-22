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
import cube from '../../../assets/img/equine/cube.png'
import igg from '../../../assets/img/equine/igg.png'
import cube110 from '../../../assets/img/equine/cube110.png'
import cube712 from '../../../assets/img/equine/cube712.png'
import foalHorseImg from '../../../assets/img/equine/horse-and-foal.jpg'


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
    <nav  className="navbar canine-nav navbar-expand-lg navbar-light bg-light small-nav " style={renderNavClass} >
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav align-items-center">
            <li className="nav-item my-item">
                <a className="nav-link" onClick={() => executeScroll(myRef1)} >Immuno-Chek G vs SNAP</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >|</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" onClick={() => executeScroll(myRef2)} >How to Run Test</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >|</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" onClick={() => executeScroll(myRef3)} >Benefits</a>
            </li>
        </ul>
      </div>
    </nav>
    <div className='container-w-side-nav' >
        <SideNav passingData={passingData}/>


      <div className='custom-container equine-igg'  >
      <h2 style={{color: '#317C97', fontWeight: '600', marginTop: '30px',marginBottom: '0px', letterSpacing: '-2px', textAlign: 'left'}} >Quick Identify Immuno-Deficient Foals</h2>
      <h5 style={{color: '#317C97', fontWeight: '500', marginTop: '0px', letterSpacing: '-2px', textAlign: 'left', paddingLeft: '100px'}} >IgG Testing</h5>


        <div className='col-top' >
            <div className='col-top-left top-left' >
                <img src={foalHorseImg} />
                <div className='text' >
                    <span className='text-1' >Healthy foals are priceless.</span>
                </div>
                <div className='text-3' style={{fontSize: '25px'}} >
                Reduce the risk. Protect your foals.
                </div>
            </div>
            <div className='col-top-right top-right' >
                <ReactPlayer  url='https://www.youtube.com/embed/Kk0XluyIxaY' width={renderVideoWidth} controls={true} playing={true} muted loop={true} />
            </div>
        </div>
        


        <div className='col-mid' >
        <Jumbotron ref={myRef1} className='igg-jumbo' fluid>
            <Container>
                <h3>Comparison Foal IgG</h3>
                <h1><span className='targetvet' >Immuno-Chek G</span><img className='jumbo-logo' src={Logo} /> vs. SNAP</h1>
            </Container>
        </Jumbotron>
            <Table className='igg-table' striped bordered hover>
                <thead>
                    <tr>
                    <th>Foal ID</th>
                    <th>
                    <div className='table-head' >
                        <div className='table-text' >Cube <span className='small-text' >Immuno-Chek G Lateral Flow</span></div>
                        <img className='table-logo' src={Logo} />
                    </div>
                    </th>
                    <th>
                    <div className='table-head' >
                        <div className='table-text' >Visual <span className='small-text' >Immuno-Chek G Lateral Flow</span></div>
                        <img className='table-logo' src={Logo} />
                    </div>
                    </th>
                    <th>SNAP Elisa</th>
                    <th>Laboratory Densimeter Turbidimetric <FontAwesomeIcon icon={faFlask} /></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>M20</td>
                        <td>1003</td>
                        <td>&lt; 800</td>
                        <td> 800</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Std 400</td>
                        <td>404</td>
                        <td>400</td>
                        <td>&lt;400</td>
                        <td>400</td>
                    </tr>
                    <tr>
                        <td>Std 200</td>
                        <td >219</td>
                        <td>200</td>
                        <td>&lt;400</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>Std 500</td>
                        <td >506</td>
                        <td>400</td>
                        <td>&lt;400</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>Std 700</td>
                        <td >712</td>
                        <td>400-800</td>
                        <td>&lt;800</td>
                        <td>700</td>
                    </tr>
                    <tr>
                        <td>S48</td>
                        <td>110</td>
                        <td>200</td>
                        <td>&lt;400</td>
                        <td>150</td>
                    </tr>
                    
                </tbody>
            </Table>
            <ul className='results-list' >
                <li>Immuno-Chek G has better sensitivity than SNAP & Lab</li>
                <li>SNAP does not give accurate results on samples between 400-800 mg/dl.</li>
                <li>SNAP results are difficult to read</li>
            </ul>
            <Jumbotron className='igg-jumbo' fluid>
            <Container>
                <h3>Examples of Visual Results</h3>
                <Table className='igg-table-2' striped bordered hover>
                <thead>
                    <tr>
                    <th>Foal ID</th>
                    <th colSpan="2" >
                    <div className='table-head-results' >
                        <div className='table-text-results' >Immuno-Chek G Lateral Flow</div>
                        <img className='table-logo-results' src={Logo} />
                    </div>
                    </th>
                    <th>SNAP Elisa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>S48</td>
                        <td>         
                        <div className='example-target' >
                            Cube 110
                            <div>
                                <img className='table-logo'  src={cube110} />
                            </div>
                        </div>
                        </td>
                        <td>         
                        <div className='example-target' >
                            Visual 200
                            <div>
                                <img className='table-logo'  src={target1} />
                            </div>
                        </div>
                        </td>
                        <td>         
                        <div>
                            <div> &lt; 400</div>
                            <div><img className='table-logo' src={snap1} /></div>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Std 700</td>
                        <td>
                        <div className='example-target' >
                            Cube 712
                            <div>
                                <img className='table-logo'  src={cube712} />
                            </div>
                        </div>
                        </td>
                        <td>         
                        <div className='example-target' >
                            Visual &gt; 400
                            <div>
                                <img className='table-logo'  src={target2} />
                            </div>
                        </div>
                        </td>
                        <td>         
                        <div>
                            <div> &gt; 800</div>
                            <div><img className='table-logo' src={snap2} /></div>
                        </div>
                        </td>
                    </tr>          
                </tbody>
            </Table>
            </Container>
            </Jumbotron>
        </div>
        
        <Jumbotron ref={myRef2} fluid className='how-it-works' >
        <Container>
            <h1>How To Run Test</h1>
            <div className='steps' >
            <table >
            <tr>
                <td><img className='table-logo' src={step1} /></td>
                <td>1. Add 10 µL whole blood (or 5µL Sera) to a Diluent Bottle and Mix.</td>
            </tr>
            <tr>
                <td><img className='table-logo' src={step2} /></td>
                <td>2. With new tip add 10 µL from the diluted sample in Dilution bottle to the Cassette.</td>
            </tr>
            <tr>
                <td><img className='table-logo' src={step3} /></td>
                <td>3. Add 3 drops from Buffer B bottle.</td>
            </tr>
            </table>
            </div>
            <h3 className='ten-min-head' >Read In 10 min <FontAwesomeIcon icon={faHistory} /></h3>
            <div className='ten-min' >
                <div className='item' >
                    <div>
                        visual
                    </div>
                    <div>
                        <img className='table-logo' src={visual} />
                    </div>
                </div>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    Or
                </div>
                <div className='item'>
                    <div>
                        cube
                    </div>
                    <div>
                        <img className='table-logo' src={cube} />
                    </div>
                    <div className='video' >(video demo above)</div>
                </div>
            </div>
        </Container>
        </Jumbotron>

        <div ref={myRef3} className='benefites-container' >
            <br></br>
            <h1>Benefits</h1>
            <hr></hr>
            <div className='benefites' >
                <img className='table-logo' src={igg} />
                <div>
                    <h4>Foal IgG Kit - Visual or Cube Reader</h4>
                    <ul>
                        <li>On-site, 10-minute results</li>
                        <li>Easy to use and interpret</li>
                        <li>Test & Treat immediately</li>
                        <li>No refrigeration required</li>
                        <li>Accurate & Reliable over Long shelf life (2+ years)</li>
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

