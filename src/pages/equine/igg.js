import React, {useRef} from 'react';
import { Container, Table, Jumbotron } from 'react-bootstrap';

import Video from '../../components/video/video';
import Logo from '../../assets/img/equine/logo-small.png'
import snap1 from '../../assets/img/equine/snap1.png'
import snap2 from '../../assets/img/equine/snap2.png'
import target1 from '../../assets/img/equine/target1.png'
import target2 from '../../assets/img/equine/target2.png'
import step1 from '../../assets/img/equine/step1.png'
import step2 from '../../assets/img/equine/step2.png'
import step3 from '../../assets/img/equine/step3.png'
import visual from '../../assets/img/equine/visual.png'
import cube from '../../assets/img/equine/cube.png'
import igg from '../../assets/img/equine/igg.png'
import cube110 from '../../assets/img/equine/cube110.png'
import cube712 from '../../assets/img/equine/cube712.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask, faHistory } from '@fortawesome/free-solid-svg-icons'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

export default function IgG(products) {

    //scroll to section 1
    const myRef1 = useRef(null)
    const myRef2 = useRef(null)
    const myRef3 = useRef(null)
    const executeScroll = (e) => scrollToRef(e)



  return (
<div>
    <nav className="navbar canine-nav navbar-expand-lg navbar-light bg-light small-nav ">
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
    <Container>
      <div className='equine-igg' >
        <div className='col-top' >
            <div className='col-top-left' >
                <div className='text' >
                    <span className='text-1' ></span>
                    <span className='text-2' >
                    Healthy foals are priceless.
                    </span>
                </div>
                <div className='text-3' >
                Reduce the risk. Protect your foals.
                </div>
            </div>
            <div className='col-top-right' ><Video/></div>
        </div>
        


        <div className='col-mid' >
        <Jumbotron ref={myRef1} className='igg-jumbo' fluid>
            <Container>
                <h3>Comparison Foal IgG</h3>
                <h1><span className='targetvet' >Immuno-Chek G</span><img className='jumbo-logo' src={Logo} /> vs. SNAP</h1>
            </Container>
        </Jumbotron>
            <Table striped bordered hover>
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
                <Table striped bordered hover>
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


    </div>
  </Container>
  </div>
  );
}

