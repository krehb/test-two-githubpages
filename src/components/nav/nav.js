import React, {useEffect, useState} from 'react';
import app from '../../config/base';
import firebase from 'firebase';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import AuthItems from './auth-items';
import { AuthProvider } from '../../config/Auth';
import TopAuthItems from './top-auth-items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Nav = ({cart, setCategory}) => {

    const db = firebase.firestore();
    let location = useLocation();

    const style1 ={
        opacity: .8,
        zIndex: 5,
        position: 'fixed',
        width: '100%'
    }
    const style2 = {
        
    }

    const [loggedIn, setLoggedIn] = useState(false);
    const [renderStyle, setRenderStyle] = useState(false)


    useEffect(() => {
        // Update the document title using the browser API
        app.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
               setLoggedIn(true)
            } else {
              // No user is signed in.
              setLoggedIn(false)
            }
        });
    },[]);

    useEffect(() => {

        if(location.pathname === '/'){
            setRenderStyle(true)
        } else {
            setRenderStyle(false)
        }

    },[location.pathname]);

    let navCart = null
    if(cart.length === 0){
        navCart = null
    } else {
        navCart = (
            <Link className='my-nav-item' to='/cart' >
            Cart({cart.length})
            </Link>
        )
    }
    let navAccount = null
    if(loggedIn){
        navAccount = (
            <Link className='my-nav-item' to='/account' >
                <FontAwesomeIcon icon={faUserCircle} />
            </Link>
        )
    } else { navAccount = null}

    let renderNewStyle = null
    if(renderStyle){
        renderNewStyle = style1
    } else {
        renderNewStyle = style2
    }

  return (
        <div className='my-nav' style={renderNewStyle} >
            <Container fluid  >
                {/* <Row className='top-auth' >
                    <TopAuthItems loggedIn={loggedIn} />
                </Row> */}
                <div className='nav-parent'>
                    <div className='nav-child1' >
                        <div className='nav-child-img' >
                            <Link to='/'  >
                                <img
                                    alt=""
                                    src="https://www.targetvet.com/wp-content/uploads/elementor/thumbs/biometallics-logo-oiu6b3tt63fywipsrkni4fjfhftxi93fxb5nopm164.png"
                                    className='nav-child-img'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='nav-child2' >
                        <div className='nav-child-list no-hover' >
                            <Link className='my-nav-item' to='/canine' >
                            Canine 
                            </Link>
                        </div>
                        <div className='nav-child-list no-hover' >
                            <Link className='my-nav-item' to='/equine' >
                            Equine
                            </Link>
                        </div>
                        <div className='nav-child-list no-hover ' >
                            <Link onClick={() => setCategory('none')} className='my-nav-item' to='/store' >
                            Store
                            </Link>
                        </div>
                        <div className='nav-child-list no-hover' >
                            {navCart}
                        </div>
                        <div className='nav-child-list no-hover' >
                            {navAccount}
                        </div>
                    </div>
                    <div className='top-auth'>
                        <TopAuthItems loggedIn={loggedIn} />
                    </div>
                </div>
            </Container>
            <AuthItems loggedIn={loggedIn} />
        </div>
  );
}

export default Nav;