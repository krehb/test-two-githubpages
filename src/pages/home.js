import React from 'react';
import './pages.css'
import dogIcon from '../assets/img/home/dog-icon.png';
import horseIcon from '../assets/img/home/horse-icon.png'
import { Image } from 'react-bootstrap';


const Home = () => {
    return (
        <div className='home' >
            <div className='col-top' >
                <div className='col-top-left' >
                    <div className='text' >
                        <span className='text-1' >Caring For Your Animals</span>
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
                <div className='underline-bar' ></div>
                <div className='mid-body' >
                    <p>Playing the guessing game is no fun when it comes to breeding, pregnancy, birth and infection detection. There is too much to lose.</p>
                    <p>Start your winning streak with a revolutionary, hand-held test giving you lab-quality data in minutes. Know exactly. Time perfectly. Respond early. You’ve got this.</p>
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
                    <button >Browse Canine Tests</button>
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
                    <button>Browse Equine Tests</button>
                </div>
            </div>
        </div>
    )
}

export default Home;