import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

import SideNav from '../../components/side-nav-pages/sideNavPages'


export default function Canine(products) {






  return (
    <div>
    <nav className="navbar canine-nav navbar-expand-lg navbar-light bg-light small-nav ">
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav align-items-center">
            <li className="nav-item my-item">
                <a className="nav-link"  >Target Progesterone (Visual)</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >|</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >Cube Progesterone (Quantitative)</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >|</a>
            </li>
            <li className="nav-item my-item">
                <a className="nav-link" >Pregnancy Testing</a>
            </li>
        </ul>
      </div>
    </nav>
    <div className='container-w-side-nav' >
    <SideNav/>
      <div className='canine' >
        <div className='col-top' >
            <div className='col-top-left' >
                <div className='text' >
                    <span className='text-1' >timing is</span>
                    <span className='text-2' >
                        everything
                    </span>
                </div>
                <div className='text-3' >
                Improve success from breeding to birth.
                </div>
            </div>
            <div className='col-top-right' ></div>
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

