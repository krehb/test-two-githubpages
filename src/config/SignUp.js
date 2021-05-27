import React, { useCallback, useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import firebase from 'firebase';
import app from './base';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';




const SignUp = () => {

    const db = firebase.firestore();
    let history = useHistory();

    const [firebaseUid, setFirebaseUid] = useState();
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        // Update the document title using the browser API

        app.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
                setFirebaseUid(user.uid);
                history.goBack();
            } else {
              // No user is signed in.

            }
        });
    },[]);



    const CreateUserHandler  = async () => {
        console.log(password, 'password')
        console.log(userEmail, 'email')
        console.log(userName, 'name')
        sendWelcomeEmail();
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(userEmail, password).then(cred => {
                    return db.collection('users').doc(cred.user.uid).set({
                        name: userName,
                        address: '',
                        orderCount: 0
                    })
                    // setFirebaseUid(cred.user.uid)
                })
            console.log('sent')

            // history.push('/');
        } catch (error) {
            alert(error);
        }

        history.goBack();

    }



    const sendWelcomeEmail = async () => {
        //send the welcome email
        console.log('sending email now')
        const response = await axios.post('http://localhost:4000/welcome_email', {
            email: userEmail,
            name: userName
        })
    }


    return (
        <Container>
            <Row>
                <Col>
                    <Form  >
                        <Form.Group controlId="formBasicName">
                            <h1>Create Account</h1>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => {setUserName(e.target.value)}} name='name' type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e) => {setUserEmail(e.target.value)}} name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => {setPassword(e.target.value)}} name='password' type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" onClick={CreateUserHandler} >
                            Create Account
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};


export default withRouter(SignUp);