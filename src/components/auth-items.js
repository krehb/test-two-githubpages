import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../config/base';


export default function AuthItems() {

    const [loggedIn, setLoggedIn] = useState(false);



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


    let items = null

    if (loggedIn === true){
        items = (
            <Col className='auth' >
                <Link className='auth-item' onClick={() => app.auth().signOut()} >
                    Sign Out
                </Link>
            </Col>
        )
    } else {
        items = (
            <Col className='auth' >
                <Link className='auth-item' to='/signup' >
                    Sign Up
                </Link>
                <Link className='auth-item' to='/login' >
                    Login
                </Link>
            </Col>
        ) 
    }



  return (
    <div  >
        <Container>
            <Row>
                {items}
            </Row>
        </Container>
    </div>
  );
}

