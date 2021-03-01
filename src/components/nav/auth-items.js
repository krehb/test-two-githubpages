import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import app from '../../config/base';


export default function AuthItems({loggedIn}) {

    const [currentUrl, setCurrentUrl] = useState('');
    let location = useLocation();
    

    useEffect(() => {
        // Update the document title using the browser API

        setCurrentUrl(location.pathname)

    },[location, loggedIn]);


    let items = null

    if (loggedIn === true){
        items = (
            <div className='auth' >
                <Link className='auth-item' onClick={() => app.auth().signOut()} >
                    Sign Out
                </Link>
            </div>
        )
    } else {
        items = (
            <div className='auth no-hover' >
                <Link className='auth-item' to='/sign-in' >
                    Sign In
                </Link>
                <Link className='auth-item' to='/create-account' >
                    Create Account
                </Link>
            </div>
        ) 
    }


    let renderItems = null
    if(currentUrl === '/canine' || currentUrl === '/equine' || currentUrl === '/equine-igg' || currentUrl === '/equine-quickp4'){
        renderItems = null
    }else {
        renderItems = items
    }



  return (
    <div className='auth-bottom' >
        {renderItems}
    </div>
  );
}

