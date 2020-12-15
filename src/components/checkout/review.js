import React, {useState, useEffect}  from 'react';
import { Container, Col, Row, Image, Card } from 'react-bootstrap';




const Review = ({cart}) => {

    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zip, setZip] = useState();
    const [change, setChange] = useState(true);

    console.log(cart)

    const saveAddressHandler = () => {
        console.log(name, address, city, state, zip)
        setChange(false)
    }




  return (
        <Col>
            <Container>
                <Row>
                <Col>
                    <Card >
                    <Card.Body>
                        <Row>
                        <Col xs={3}>
                        <h3>Review Order</h3>
                        </Col>
                        <Col xs={9} >
                        <Container fluid>
                            {cart.map( x => <Row key={x.id}>
                            <Col xs={3} >
                                <Image src={x.img} width='80px' />
                            </Col>
                            <Col  xs={9}>
                            <Row>
                                <Col><h5>{x.title}</h5></Col>
                            </Row>
                            <Row>
                                <Col><h6>{x.subtitle}</h6><h6> {x.test} tests</h6><hr></hr></Col>
                            </Row>
                            </Col>
                            </Row> )}
                        </Container>
                        </Col>
                        </Row>
                    </Card.Body>
                    </Card> 
                </Col>
                </Row>
            </Container>
        </Col>
  );
}

export default Review;