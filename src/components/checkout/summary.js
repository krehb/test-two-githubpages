import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button, Card, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import app from '../../config/base';
import firebase from 'firebase';
import emailjs from 'emailjs-com';


const Summary = ({priceTotal, cart}) => {

    const [currentUser, setCurrentUser] = useState('no email yet');
    const [sendingCart, setSendingCart] = useState('')



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


    const sendConfirmationEmail = () => {


         var templateParams = {
            name: 'James',
            email: currentUser.email,
            cart: sendingCart,
            total_price: priceTotal,
            shipping: '217 Pleasant St.',
        };
        
        console.log(templateParams)

        emailjs.send('service_12x6qif', 'template_5h83g8t', templateParams , 'user_CqDTkQBUriwIbjinTaVaw')
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });

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
                                item(s)
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
                            <Button onClick={sendConfirmationEmail} variant="primary" >
                                    Buy Items
                            </Button>
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