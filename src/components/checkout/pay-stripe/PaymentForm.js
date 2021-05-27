import React, {useState, useEffect} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Alert } from 'react-bootstrap';
import axios from 'axios'
import {useHistory} from 'react-router-dom';
import app from '../../../config/base';
import firebase from 'firebase';
import moment from 'moment';

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#fff',
            color: '#fff',
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ":-webkit-autofill": {color: 'fff'},
            "::placeholder": {color: '#87bbfd'},
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee'
        },
        hidePostalCode: true
    }
}


export default function PaymentForm({priceTotal, cart, note}) {
    const [success, setSuccess] = useState(false)
    const [isProcessing, setProcessingTo] = useState(false);
    const [error, setError] = useState(false);
    const [errorContent, setErrorContent] = useState('Error in the Payment Processing')
    const [orderNumber, setOrderNumber] = useState(0)
    const [userName, setUserName] = useState('')

    const stripe = useStripe()
    const elements = useElements()
    let history = useHistory();
    const db = firebase.firestore();
    function successPageHandler() {
      history.push("/success");
    }

    useEffect(() => {
        db.collection('orderID').doc('1DfzvvgP2y1w7d4jI9tx').get().then(doc => {
            let id = doc.data()
            setOrderNumber(id.number)
        })
        app.auth().onAuthStateChanged((user) => {
            db.collection('users').doc(user.uid).get().then( doc => {
                let currentUserData = doc.data()
                setUserName(currentUserData.name)
            })
        })
    },[])

    const fee = (priceTotal*.029) + .3

    //send 'Agreed to Waiver to Google Drive'
    const submitToGoogleDriveSpreadSheet = async (e) => {
        try {
            const response = await fetch(`https://v1.nocodeapi.com/jdkrehb/google_sheets/kWxbyWojqToJlJKV?tabId=Sheet1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([[ new Date().toLocaleString(), userName, priceTotal , fee, orderNumber, note]])
            });
            await response.json()
        } catch (err) {
            console.log(err)
        }
    }


    const handleSubmit = async (e) => {
        setProcessingTo(true);
        const billingDetails = {
            name: 'James',
            email: 'jdk1706@gmail.com',
            address: {
              city: 'Urbana',
              line1: '1207 s Busey Ave',
              state: 'IL',
              postal_code: '51801'
            }
        };
        let testArray = []
        cart.forEach(item => {
            let itemDetail = `${item.title} ${item.subtitle}, ${item.test} tests, qty of ${item.qty}, item price total $${item.price*item.qty} ||`
            testArray.push(itemDetail)
        });
        let newArray = testArray.toString()
        console.log(newArray)
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: billingDetails,
        })
        if(!error){
            try {
                let sendingArray = `${newArray}`
                const {id} = paymentMethod
                const response = await axios.post('http://localhost:4000/payment', {
                    amount: priceTotal * 100,
                    id,
                    description: `${sendingArray}`,
                    cart: cart
                })
                if(response.data.success){
                    console.log('Successful Payment')
                    setSuccess(true)
                    submitToGoogleDriveSpreadSheet();
                    PushToDatabase();
                }
            } catch (error) {
                console.log(error.message)
                setErrorContent(error.message)
                setProcessingTo(false);
                setError(true)
            }
        } else {
            console.log(error.message)
            setErrorContent(error.message)
            setError(true);
            setProcessingTo(false)
        }
    }




    const PushToDatabase = () => {
        db.collection('orderID').doc('1DfzvvgP2y1w7d4jI9tx').set({
            number: orderNumber + 1
        })

        app.auth().onAuthStateChanged((user) => {
            db.collection('users').doc(user.uid).get().then((doc) => {
                const UserData = doc.data()
                console.log('updated count')
                db.collection('users').doc(user.uid).set({
                    orderCount: UserData.orderCount + 1,
                    name: UserData.name,
                    address: UserData.address
                })

                if(UserData.orderCount === 0){
                    db.collection('users').doc(user.uid).collection('orders').doc(user.uid).set({
                        orderNumber: orderNumber,
                        order: cart,
                        timeStamp: moment().format('MM/DD/YY, h:mm:ss a')
                    })
                    successPageHandler();
                } else {
                    db.collection('users').doc(user.uid).collection('orders').add({
                        orderNumber: orderNumber,
                        order: cart,
                        timeStamp: moment().format('MM/DD/YY, h:mm:ss a')
                    })
                    successPageHandler();
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        })
    }



    return (
        <>

        {error &&
            <Alert variant='warning' style={{display: 'flex', justifyContent: 'space-between'}} >
                <span>
                {errorContent}
                </span>
                <span onClick={()=>setError(false)} style={{fontWeight: 700, cursor: 'pointer'}} >X</span>
            </Alert>
        }

        {!success ? 
        <form onSubmit={handleSubmit} >
            <fieldset className='FormGroup' >
                <div className='FormRow' >
                    <CardElement options={CARD_OPTIONS} />
                </div>
            </fieldset>
            <button className='stripe-button' disabled={isProcessing || !stripe} >
            {isProcessing ? "Processing..." : `Pay $${priceTotal}`}
            </button>
        </form>
        :
        <div>
            <h2>Successful!!!!</h2>
        </div>        
        }


        </>
    )
}
