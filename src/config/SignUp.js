import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import app from './base';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSignUp} >
                        <Form.Group controlId="formBasicEmail">
                            <h1>Sign Up</h1>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};


export default withRouter(SignUp);