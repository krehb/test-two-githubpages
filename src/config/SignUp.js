import React, { useCallback, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import app from './base';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';



const SignUp = ({ history }) => {

    const db = firebase.firestore();

    const [firebaseUid, setFirebaseUid] = useState();
    const [userName, setUserName] = useState();

    useEffect(() => {
        // Update the document title using the browser API

        app.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
                setFirebaseUid(user.uid);
            } else {
              // No user is signed in.

            }
        });
    },[]);


    const handleSignUp = useCallback(async event => {
        event.preventDefault();

        const { email, password} = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value).then(cred => {
                    return db.collection('users').doc(cred.user.uid).set({
                        name: userName
                    })
                })
            console.log('sent')

            // history.push('/');
        } catch (error) {
            alert(error);
        }

        //send the welcome email from emailjs
        // sendWelcomeEmail(event);

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
                            <Form.Control onChange={(e) => {setUserName(e.target.value)}} name='name' type="text" placeholder="Enter name" />
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