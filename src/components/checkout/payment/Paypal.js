import React, {useRef, useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import {useHistory} from 'react-router-dom';
import app from '../../../config/base';

export default function Paypal( {cart, priceTotal} ) {
    
    const paypal = useRef()
    const [currentUser, setCurrentUser] = useState('no email yet');
    const [sendingCart, setSendingCart] = useState('');

    //going to success page after payment
    let history = useHistory();

    function handleClick() {
      history.push("/success");
    }
    
    const sendConfirmationEmail = () => {

        if (cart.length > 0){



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
                }, function(error) {
                   console.log('FAILED...', error);
                });

        } else {
            console.log('no items in the cart')
        }

    }


    useEffect(()=> {

        //checking if there's a user logged in
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
        let newArray = []
        cart.forEach(item => {
            newArray.push(` ${item.title} ${item.subtitle} ${item.test * item.qty} tests for $${item.price * item.qty}.00    |`)
        });
        setSendingCart(newArray.join(' '))



        //sending payment through paypal
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                        {
                            description: "Cool and accurate kit",
                            amount: {
                                currency_code: 'USD',
                                value: 1 
                            }  
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order)
                sendConfirmationEmail();
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    },[])
    
    return (
        <div>
            <div ref={paypal} ></div>
        </div>
    )
}
