import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button, Card, Spinner } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import app from '../../config/base';
import firebase from 'firebase';
import emailjs from 'emailjs-com';


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
            <Button onClick={sendConfirmationEmail} variant="primary" >
                Buy Items
            </Button>
        )
    }



  return (
        <Col>
            <Container fluid className='shipping' >
                <Row>
                <Col>
                    <Card >
                    <Card.Body>
                        <Container fluid>
                        <Row>
                            <Col>
                                <h4>Summary</h4>
                            </Col>
                        </Row>  
                        <Row>
                            <Col>
                               <span className='bold' >({cart.length})</span> item(s)
                            </Col>
                            <Col>
                                ${priceTotal}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Shipping
                            </Col>
                            <Col>
                                $0
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Tax
                            </Col>
                            <Col>
                                $0
                                <hr></hr>
                            </Col>
                        </Row>
                        <Row>
                        <Col>
                                Total
                            </Col>
                            <Col>
                                ${priceTotal}
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            {buyButton}
                        </Row>
                        </Container>
                    </Card.Body>
                    </Card> 
                </Col>
                </Row>
            </Container>
        </Col>
  );
}

export default Summary;