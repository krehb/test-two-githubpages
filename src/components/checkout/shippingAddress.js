import React, {useState, useEffect}  from 'react';
import { Container, Col, Row, Button, Form, Card } from 'react-bootstrap';




const Shipping = ({cart, clearCart, removeItemHandler}) => {

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
            <Container className='shipping' >
            <Row>
            <Col>
                <h2>Shipping Address</h2>
            </Col>
            </Row>
            <Row>
            <Col>
                <Form>
                    <Form.Group controlId="formGridname">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control onChange={(e)=> setName(e.target.value)} type="name" placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control onChange={(e)=> setAddress(e.target.value)} placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control onChange={(e)=> setCity(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control onChange={(e)=> setState(e.target.value)} as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>IL</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control onChange={(e)=> setZip(e.target.value)} />
                        </Form.Group>
                    </Form.Row>
{/* 
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}

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
            <Container className='shipping' >
                <Row>
                <Col>
                    <Card >
                    <Card.Body>
                        <Row>
                        <Col>
                        <h3>Shipping Address</h3>
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

export default Shipping;