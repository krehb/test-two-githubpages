import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

import Video from '../components/video/video';

import dogIcon from '../assets/img/home/dog-icon.png';
import horseIcon from '../assets/img/home/horse-icon.png'


export default function Equine(products) {






  return (
<div>
    <nav className="navbar canine-nav navbar-expand-lg navbar-light bg-light small-nav ">
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav align-items-center">
            <li className="nav-item my-item">
                <a className="nav-link"  >Equine Progesterone</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >|</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >Cube Foal IgG</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >|</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >Infection Detection (SAA)</a>
            </li>
        </ul>
      </div>
    </nav>
    <Container>
      <div className='equine' >
        <div className='col-top' >
            <div className='col-top-left' >
                <div className='text' >
                    <span className='text-1' >Stakes are</span>
                    <span className='text-2' >
                        high
                    </span>
                </div>
                <div className='text-3' >
                Testing you can count on.
                </div>
            </div>
            <div className='col-top-right' ><Video/></div>
        </div>
        
        <div className='col-mid' >
            <div className='mid-head' ></div>
            <div className='mid-body' >
                <p>Accurately predict ovulation. Detect pregnancy early. Know exactly when to time a C-section for the healthiest puppies. Worry less. Achieve more.</p>
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
  </Container>
  </div>
  );
}

