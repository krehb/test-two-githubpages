import React, {useState, useEffect} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Alert } from 'react-bootstrap';
import axios from 'axios'
import {useHistory} from 'react-router-dom';


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
            "::placeholder": {color: '#87bbfd'}
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee'
        }
    }
}


export default function PaymentForm({priceTotal, cart}) {
    const [success, setSuccess] = useState(false)
    const [isProcessing, setProcessingTo] = useState(false);
    const [error, setError] = useState(false);
    const [errorContent, setErrorContent] = useState('Error in the Payment Processing')

    const stripe = useStripe()
    const elements = useElements()
    let history = useHistory();

    function successPageHandler() {
      history.push("/success");
    }

    const fee = (priceTotal*.029) + .3

    //send 'Agreed to Waiver to Google Drive'
    const submitToGoogleDriveSpreadSheet = async (e) => {
        try {
            const response = await fetch(`https://v1.nocodeapi.com/jdkrehb/google_sheets/kWxbyWojqToJlJKV?tabId=Sheet1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([[ new Date().toLocaleString(), 'James Krehbiel', priceTotal , fee, 5]])
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
                    successPageHandler();
                    submitToGoogleDriveSpreadSheet();
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
