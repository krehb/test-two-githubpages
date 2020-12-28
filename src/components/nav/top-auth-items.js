import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import app from '../../config/base';


export default function TopAuthItems() {

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
            <div >
                <Link className='auth-item' onClick={() => app.auth().signOut()} >
                    Sign Out
                </Link>
            </div>
        )
    } else {
        items = (
            <div >
                <Link className='auth-item' to='/sign-in' >
                    <span className='sign-in' >Sign In</span>
                </Link>
                <Link className='auth-item' to='/create-account' >
                    <span className='create-account' >Create Account</span>
                </Link>
            </div>
            
        ) 
    }



  return (
    <div  >
        {items}
    </div>
  );
}

