import React, { useEffect, useState}  from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import app from '../../../config/base';
import firebase from 'firebase';


const Success = ({setCart }) => {

    const [email, setEmail] = useState('');
    const db = firebase.firestore();

    useEffect(() => {
        setCart([]);

        app.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
                db.collection('users').doc(user.uid).get().then( doc => {
                    setEmail(user.email)
                })
            } else {
                console.log('not logged in')
            }
        });

    },[]);

  return (
    <div >
        <Container>
            <Row>
            <Col sm>
                <h3 style={{marginTop: '20px'}} >Your Order Has Been Successful. An email receipt was sent to {email}</h3>
            </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Container>
    </div>
  );
}

export default Success;