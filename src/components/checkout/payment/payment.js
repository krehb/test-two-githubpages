import React, {useState}  from 'react';
import { Container, Col, Row, Button, Form, Card } from 'react-bootstrap';
import PaymentOptions from './paymentOptions';
import Paypal from './Paypal';




const Payment = ({cart, clearCart, removeItemHandler}) => {

    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [change, setChange] = useState(true);

    const [paymentOption, setPaymentOption] = useState('none');

    const saveAddressHandler = () => {
        setChange(false)
    }

    let shipping = null

    if(change){
        shipping = (
            <Container>
            {/* <Row>
            <Col className='payment-header'>
                <h4>Pay</h4>
            </Col>
            <br></br>
            </Row>
            <Row>
            <Col></Col>
            <Col xs={6}>
            <Paypal/>
            <PaymentOptions paymentOption={paymentOption} setPaymentOption={setPaymentOption} />
            <div className='save' >
            <Button  variant="secondary" onClick={() => saveAddressHandler()} >
                Save
            </Button>
            </div>
            </Col>
            <Col></Col>
            </Row> */}
            <br></br>
            </Container>
        )
    } else {
        shipping = (
            <Container>
                <Row>
                <Col>
                    <Card >
                    <Card.Body>
                        <Row >
                        <Col >
                        <h4>Pay</h4>
                        </Col>
                        <Col>
                        <Container>
                            <Row>
                                {paymentOption}
                            </Row>
                        </Container>
                        </Col>
                        <Col>
                        <button onClick={() => setChange(true)} >Change</button>
                        </Col>
                        </Row>
                    </Card.Body>
                    </Card> 
                </Col>
                </Row>
            </Container>
        )
    }
    


  return (
        <Col className='payment' >
            {shipping}
        </Col>
  );
}

export default Payment;