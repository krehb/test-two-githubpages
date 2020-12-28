import React from 'react';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';



const Summary = ({priceTotal}) => {





  return (
        <Col>
            <Container fluid className='shipping' >
                <Row>
                <Col>
                    <Card >
                    <Card.Body>
                        <Container fluid>
                        <Row>
                            <Col>
                                <h4>Summary</h4>
                            </Col>
                        </Row>  
                        <Row>
                            <Col>
                                item(s)
                            </Col>
                            <Col>
                                ${priceTotal}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Shipping
                            </Col>
                            <Col>
                                $0
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Tax
                            </Col>
                            <Col>
                                $0
                                <hr></hr>
                            </Col>
                        </Row>
                        <Row>
                        <Col>
                                Total
                            </Col>
                            <Col>
                                ${priceTotal}
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                            <Link to='/success'  >
                            <Button>Place Order</Button>
                            </Link>
                            </Col>
                        </Row>
                        </Container>
                    </Card.Body>
                    </Card> 
                </Col>
                </Row>
            </Container>
        </Col>
  );
}

export default Summary;