import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../../components/side-nav-pages/sideNavPages'
import HorseAndFoal from '../../assets/img/equine/horse-and-foal.jpg'
import ReactPlayer from 'react-player/youtube'

export default function Equine(products) {





  return (
<div>
    <nav className="navbar canine-nav navbar-expand-lg navbar-light bg-light small-nav ">
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav align-items-center">
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
        </ul>
      </div>
    </nav>
    <div className='container-w-side-nav'>
        <SideNav/>
      <div className='equine' >
        <div className='col-top' >
            <div className='col-top-left' >
                <div className='text' >
                    <span className='text-1' >Stakes are high</span>
                </div>
                <div className='text-3' >
                Testing you can count on.
                </div>
                <img src={HorseAndFoal} />
            </div>
            <div className='col-top-right' >
                <ReactPlayer  url='https://www.youtube.com/embed/g8uU-ID7M8Y' controls={true} playing={true} loop={true} />
            </div>
        </div>
        
        <div className='col-mid' >
            <div className='mid-head' ></div>
            <div className='mid-body' >
                <p>Accurately predict ovulation. Detect pregnancy early. Know exactly when to time a C-section for the healthiest puppies. Worry less. Achieve more.</p>
            </div>
        </div>
        
    </div>
  </div>
  </div>
  );
}

