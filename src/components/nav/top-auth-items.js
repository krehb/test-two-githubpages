import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import app from '../../config/base';


export default function TopAuthItems({loggedIn }) {




    let items = null

    if (loggedIn === true){
        items = (
            <div className='top-auth-child' >
                <Link className='auth-item' onClick={() => app.auth().signOut()} >
                    Sign Out
                </Link>
            </div>
        )
    } else {
        items = (
            <div className='top-auth-child no-hover' >
                <Link className='auth-item' to='/sign-in' >
                    <span className='sign-in  ' >Sign In</span>
                </Link>
                <Link className='auth-item ' to='/create-account' >
                    <span className='create-account ' >Create Account</span>
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

