import React, {useState} from 'react';
import './pages.css'
import dogIcon from '../assets/img/home/dog-icon.png';
import horseIcon from '../assets/img/home/horse-icon.png'
import { Container, Image } from 'react-bootstrap';
import SideNav from '../components/side-nav-pages/sideNavPages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";

const Home = ({passingData}) => {
    let history = useHistory();

    const swichtHomeHandler =()=>{
        history.push('/parallax')
    }


    return (
        <div className='container-w-side-nav'>
        <SideNav passingData={passingData} className='side-nav'  />
        <div className='custom-container' >
                <div className='home' >
                    <div className='col-top' >
                        <div className='col-top-left' >
                            <div className='text' >
                                <span className='text-1' ><span onClick={swichtHomeHandler} className='switchStyle' ><FontAwesomeIcon icon={faAdjust} /></span> Caring For Your Animals</span>
                                <span className='text-2' >
                                    With Easy Tests
                                </span>
                            </div>
                            <div className='text-3' >
                                Advanced. Accurate. Simple.
                            </div>
                        </div>
                        <div className='col-top-right' ></div>
                    </div>
                    <div className='col-mid' >
                        <div className='mid-head' >Answers You Need, In Your Hands!</div>
                        {/* <div className='underline-bar' ></div> */}
                        <div className='mid-body' >
                            <p>Playing the guessing game is no fun when it comes to breeding, pregnancy, birth and infection detection.</p>
                            <p style={{fontWeight: 700, fontSize: '20px'}} >There is too much to lose.</p>
                            <span>Start your winning streak with a revolutionary, hand-held test giving you lab-quality data in minutes.</span>
                            <p className='mid-head' style={{fontSize: '22px', marginTop: '10px'}} > Know exactly. <span style={{marginRight: '20px', marginLeft: '20px'}} >Time perfectly.</span>  Respond early.</p>
                            <span style={{fontWeight: 700, fontSize: '18px'}}>You’ve got this.</span>
                        </div>
                    </div>
                    <div className='col-bottom' >
                        <div className='cols' >
                            <div  >
                                <img src={dogIcon} />
                            </div>
                            <div className='head' >Canine Tests</div>
                            <div className='product-link' >Target Progesterone (Visual)</div>
                            <div className='underline-bar' ></div>
                            <div className='product-link' >Quick P4 Progesterone + Cube (Quantitative Number Result)</div>
                            <div className='underline-bar' ></div>
                            <div className='product-link' >Relaxin - Pregnancy Testing</div>
                            {/* <button >Browse Canine Tests</button> */}
                        </div>
                        <div className='cols' >
                            <div  >
                                <img src={horseIcon} />
                            </div>
                            <div className='head' >Equine Tests</div>
                            <div className='product-link' >Quick P4 Progesterone + Cube – Mare Breeding & Pregnancy Monitoring</div>
                            <div className='underline-bar' ></div>
                            <div className='product-link' >Foal IgG – Immune Deficiency Testing</div>
                            <div className='underline-bar' ></div>
                            <div className='product-link' >SAA (Serum Amyloid A ) – Infection Detection</div>
                            {/* <button>Browse Equine Tests</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;