import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button, Card, Spinner } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import app from '../../config/base';
import firebase from 'firebase';
import emailjs from 'emailjs-com';
import Paypal from './payment/Paypal';


const Summary = ({priceTotal, cart}) => {

    const [currentUser, setCurrentUser] = useState('no email yet');
    const [sendingCart, setSendingCart] = useState('');
    const [spinner, setSpinner] = useState(false);


    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
        let newArray = []
        cart.forEach(item => {
            newArray.push(` ${item.title} ${item.subtitle} ${item.test * item.qty} tests for $${item.price * item.qty}.00    |`)
        });
        setSendingCart(newArray.join(' '))
    }, [])

    //going to success page after payment
    let history = useHistory();

    function handleClick() {
      history.push("/success");
    }


    const sendConfirmationEmail = () => {

        if (cart.length > 0){

            setSpinner(true)

            var templateParams = {
                name: 'James',
                email: currentUser.email,
                cart: sendingCart,
                total_price: priceTotal,
                shipping: '217 Pleasant St.',
            };
    
            emailjs.send('service_12x6qif', 'template_5h83g8t', templateParams , 'user_CqDTkQBUriwIbjinTaVaw')
                .then(function(response) {
                   console.log('SUCCESS!', response.status, response.text);
                   setSpinner(false)
                   handleClick();
                }, function(error) {
                   console.log('FAILED...', error);
                });

        } else {
            console.log('no items in the cart')
        }
    }


    let buyButton = null

    if(spinner === true){
        buyButton = (
            <Spinner animation="border" variant="primary" />
        )
    } else {
        buyButton = (
            <div onClick={sendConfirmationEmail} >
                <Paypal cart={cart} priceTotal={priceTotal} /> 
            </div>
        )
    }



  return (
        <div className='summary' >
            <div className='parent' >
                <div className='child' >
                    Summary
                </div>
            </div>

            <div className='parent2' >
                <div className='child1' >
                    <div className='child-text' >             
                        <span className='bold' >({cart.length})</span> item(s)
                    </div>
                    <div className='child-text' >
                        Shipping
                    </div>
                    <div className='child-text' >
                        Tax
                    </div>
                    <div className='child-text' >
                        Total
                    </div>
                </div>

                <div className='child2' >
                    <div className='child-text' >             
                        ${priceTotal}
                    </div>
                    <div className='child-text' >
                        $0
                    </div>
                    <div className='child-text' >
                        $0
                    </div>
                    <div className='child-text' >
                        ${priceTotal}
                    </div>
                </div>
            </div>

            <div className='parent3' >
                <div  className='child' >
                    {buyButton} 
                </div>
            </div>

        </div>
  );
}

export default Summary;