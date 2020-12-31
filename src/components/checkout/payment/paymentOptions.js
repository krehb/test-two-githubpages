import React, {useState}  from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';




const PaymentOptions = ({setPaymentOption, paymentOption}) => {

    

    function isSelected(payMethod) {
        if (payMethod === paymentOption) {
            return 'collapse-head selected'
        } else {
            return 'collapse-head'
        }
    }



    const selectingPayment = (payMethod) => {
        setPaymentOption(payMethod)
    }

    let options = null

    if (paymentOption === 'Card'){
        options = (
            <div className='Card' >
                <input type='text' />
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="check if card's address is different than shipping address" />
                </Form.Group>
            </div>
        )
    } else {
        options = (
            <div  className='Card'>
                <Button> PayPal </Button>
            </div>
        )
    }


  return (
    <Container className='paymentOptions' >
        <Row>
            <Col>
                <span onClick={() => selectingPayment('Card')} className={isSelected('Card')} >Card </span>
                <span  onClick={() => selectingPayment('PayPal')} className={isSelected('PayPal')} > PayPal</span>
            </Col>
        </Row>
        <Row>
            {options}
        </Row>
    </Container>
  );
}

export default PaymentOptions;