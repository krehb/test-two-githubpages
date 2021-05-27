import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import app from './base';
import { AuthContext, AuthProvider } from './Auth';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value).then(cred => {
                        // console.log(cred.user.uid)
                    })
                history.push('/account');
            } catch (error) {
                alert(error);
            }
        }, [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/' />;
    }

    return (
        <Container>
            <Row>
                <Col>
                
                <Form onSubmit={handleLogin} >
                <Form.Group controlId="formBasicEmail">
                    <h1>Sign in</h1>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Link to='/create-account' >
                        Create Account
                    </Link>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Link to='/forget-password' >
                        Forget Password
                    </Link>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Container>
    );
};

export default withRouter(Login);