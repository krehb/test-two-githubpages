import React, {useState}  from 'react';
import { Container, Col, Row, Image, Card } from 'react-bootstrap';
import ReviewCard from './reviewCard';



const Review = ({cart}) => {


    const [change, setChange] = useState(true);



    const saveAddressHandler = () => {
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
                            {cart.map( x => <ReviewCard x={x} key={x.id} /> )}
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