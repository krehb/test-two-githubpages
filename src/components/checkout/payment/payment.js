import React, {useState, useEffect}  from 'react';
import { Container, Col, Row, Button, Form, Card } from 'react-bootstrap';




const Payment = ({cart, clearCart, removeItemHandler}) => {

    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zip, setZip] = useState();
    const [change, setChange] = useState(false);


    const saveAddressHandler = () => {
        console.log(name, address, city, state, zip)
        setChange(false)
    }

    let shipping = null

    if(change){
        shipping = (
            <Container>
            <Row>
            <Col>
                <h4>Payment Method</h4>
            </Col>
            </Row>
            <Row>
            <Col>
                <Form>
                    <Form.Group controlId="formGridname">
                        <Form.Label>Card</Form.Label>
                        <Form.Control onChange={(e)=> setName(e.target.value)} type="card" placeholder="xxxx-xxxx-xxxx-xxxx" />
                    </Form.Group>


                    <Form.Group controlId="formGridname">
                        <Form.Label>Name on Card</Form.Label>
                        <Form.Control onChange={(e)=> setName(e.target.value)} type="name" placeholder="Name" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Month</Form.Label>
                        <Form.Control onChange={(e)=> setState(e.target.value)} as="select" defaultValue="Choose...">
                            <option>MM</option>
                            <option>01</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Year</Form.Label>
                        <Form.Control onChange={(e)=> setState(e.target.value)} as="select" defaultValue="Choose...">
                            <option>YY</option>
                            <option>20</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>


                    <Button variant="primary" onClick={() => saveAddressHandler()} >
                        Save
                    </Button>
                </Form>
            </Col>
            </Row>
            </Container>
        )
    } else {
        shipping = (
            <Container>
                <Row>
                <Col>
                    <Card >
                    <Card.Body>
                        <Row>
                        <Col>
                        <h4>Payment Method</h4>
                        </Col>
                        <Col>
                        <Container>
                            <Row>
                                <Col>
                                {name}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                {address}, {state}, {zip}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    add delivery instructions
                                </Col>
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
        <Col>
            {shipping}
        </Col>
  );
}

export default Payment;