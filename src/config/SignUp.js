import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import app from './base';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';



const SignUp = ({ history }) => {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();

        const { email, password} = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value, );
            history.push('/');
        } catch (error) {
            alert(error);
        }

        //send the welcome email from emailjs
        sendWelcomeEmail(event);

    }, [history]);


    const sendWelcomeEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_12x6qif', 'template_hmvet7f', e.target, 'user_CqDTkQBUriwIbjinTaVaw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }


    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSignUp} >
                        <Form.Group controlId="formBasicName">
                            <h1>Create Account</h1>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Create Account
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};


export default withRouter(SignUp);