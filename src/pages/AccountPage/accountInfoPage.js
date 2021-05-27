import React, {useEffect, useState} from 'react';
import {  Button } from 'react-bootstrap';
import app from '../../config/base';
import firebase from 'firebase';
import moment from 'moment';
import {useHistory} from 'react-router-dom';
import OrderHistory from './orderHistoryComponet';
import AdminSection from './admin'

export default function AccountInfo({cart, clearCart, setCart, removeItemHandler, priceTotal}) {

    const [guide, setGuide] = useState([]);
    const [ordersArray, setOrdersArray] = useState();
    const [saveAddress, setSavedAddress] = useState();
    const [saveName, setSavedName] = useState();
    const [saveEmail, setSavedEmail] = useState();
    const [saveOrderCount, setSavedOrderCount] = useState();
    const [userId, setUserId] = useState('')

    const [showOrders, setShowOrders] = useState(false);

    const [editAddress, setEditAddress] = useState(false);
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zip, setZip] = useState();
    const [country, setCountry] = useState();


    const db = firebase.firestore();

    let history = useHistory();

    function signInPage() {
      history.push("/sign-in");
    }

    useEffect(() => {
        // Update the document title using the browser API
        app.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
                setUserId(user.uid)
                db.collection('users').doc(user.uid).get().then( doc => {
                    let numOfOrders = doc.data()
                    setSavedAddress(numOfOrders.address)
                    setSavedName(numOfOrders.name)
                    setSavedOrderCount(numOfOrders.orderCount)
                    setSavedEmail(user.email)
                })

                //admin
                user.getIdTokenResult().then(IdTokenResult => {
                    // console.log(IdTokenResult.claims.admin)
                })


                db.collection('users').doc(user.uid).collection('orders').get().then( snapshot => {
                    let b = []
                    let a = snapshot.docs
                    a.forEach(doc => {
                        let NewOrder = doc.data()
                        b.push(NewOrder)
                    });

                    //sorting by date
                    function compare(a, b) {
                        if (moment(b.timeStamp).isBefore(a.timeStamp)) {
                          return -1;
                        }
    
                        return 0;
                    }
                    //pushing sorted date to rendering state
                    setOrdersArray(b.sort(compare))
                })


            } else {
              // No user is signed in.
                signInPage()
                console.log('not logged in')
            }
        });
    },[]);






    const saveAddressHandler = () => {
        console.log('saved it')
        console.log(street, city, state, zip, country)

        db.collection('users').doc(userId).set({
            orderCount: saveOrderCount,
            name: saveName,
            address: `${street}, ${city}, ${state}, ${zip}, ${country}`
        })
        setSavedAddress( `${street}, ${city}, ${state}, ${zip}, ${country}`)
        setEditAddress(false)
    }

    let renderEditAddress = <h6>{saveAddress} {' '}<span className='change-address' onClick={() => setEditAddress(!editAddress)} >edit</span></h6>
    if(editAddress){
        renderEditAddress = (
            <>
                <div className='edit-address' >
                    <div className='edit-label' >
                        <div className='label' >Street</div>
                        <div className='label'>City</div>
                        <div className='label'>State/Province</div>
                        <div className='label'>Zip</div>
                        <div className='label'>Country</div>
                    </div>
                    <div className='edit-input'>
                        <input className='input' onChange={(e) => setStreet(e.target.value)} placeholder='123 Main St.' />
                        <input className='input' onChange={(e) => setCity(e.target.value)} placeholder='Springfield' />
                        <input className='input' onChange={(e) => setState(e.target.value)} placeholder='New Jersey' />
                        <input className='input' onChange={(e) => setZip(e.target.value)} placeholder='61215' />
                        <input className='input' onChange={(e) => setCountry(e.target.value)} placeholder='United States' />
                    </div>
                </div>
                <span className='change-address' onClick={() => setEditAddress(!editAddress)} >back</span>
                <span className='change-address' onClick={saveAddressHandler} >Save</span>
            </>
        )
    } else {
        renderEditAddress = <h6>{saveAddress} {' '}<span className='change-address' onClick={() => setEditAddress(!editAddress)} >edit</span></h6>
    }

    let renderOrders = null
    if (ordersArray === undefined){
    } else if (ordersArray.length > 0) {

        if(showOrders){
            renderOrders = (
                ordersArray.map((order, index) => {
                    return <OrderHistory key={index} setCart={setCart} index={index} order={order} />
                })
            );
        } else {
            renderOrders = null
        }

    }

    


  return (
            <div className='account'  >

                <div className='account-top' >


                <div className='account-head' >

                    <div className='head-title top' >
                        <h6>Account Info:  </h6>
                    </div>

                    <div className='head-title bottom'>
                        <h6>Shipping To:</h6>
                    </div>
                </div>
                <div className='account-body' >
                    <div className='head-title top' >
                        <h6>{saveName}<span className='email' >{saveEmail}</span></h6>
                    </div>

                    <div className='head-title bottom'>
                        {renderEditAddress}
                    </div>
                </div>

                </div>

                <div>
                    <Button onClick={() => setShowOrders(!showOrders)} >Order History</Button>
                </div>

                <div>
                    {renderOrders}
                </div>
                
                <AdminSection/>
            </div>
  );
}

