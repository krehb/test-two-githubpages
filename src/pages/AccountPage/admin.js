import React, {useEffect, useState} from 'react';
import {  Button } from 'react-bootstrap';
import app from '../../config/base';
import firebase from 'firebase';
import moment from 'moment';
import {useHistory} from 'react-router-dom';
import OrderHistory from './orderHistoryComponet';
// import admin from 'firebase-admin'

export default function AccountInfoAdmin({cart, clearCart, setCart, removeItemHandler, priceTotal}) {

    const [adminEmail, setAdminEmail] = useState('jdk1706@gmail.com');

    const db = firebase.firestore();
    const functions = firebase.functions();
    const auth = firebase.auth();

    useEffect(() => {
        // Update the document title using the browser API
        app.auth().onAuthStateChanged(function(user) {
            if (user) {

                //admin
                user.getIdTokenResult().then(IdTokenResult => {
                    console.log('are you an admin???')
                    console.log(IdTokenResult.claims.admin)
                    
                })
            }
        });
    },[]);


    //add admin cloud function
    const addingAdminHandler = () => {
        console.log('was clicked')

        // addAdminRole().then(result => {
        //     console.log(result)
        // })

    }

    const addAdminRole = () => {

        // return admin.auth().getUserByEmail(adminEmail).then(user => {
        //     return admin.auth().setCustomUserClaims(user.uid, {
        //         admin: true
        //     });
        // }).then(() => {
        //     return {
        //         message: `Success! ${adminEmail} has been made an admin`
        //     }
        // }).catch(err => {
        //     return err;
        // });

    };


  return (
            <div   >
                {/* <br></br>
                <br></br>
                <br></br>
                <h1>this is the admin section</h1>

                <input onChange={(e)=> {setAdminEmail(e.target.value)}} placeholder='email' />
                <button onClick={addingAdminHandler} >Make Admin</button> */}



            </div>
  );
}

