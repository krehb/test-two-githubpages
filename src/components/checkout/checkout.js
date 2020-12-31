import React  from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Shipping from './shippingAddress';
import Payment from './payment/payment';
import Review from './review';
import Summary from './summary';


const Checkout = ({cart, priceTotal }) => {



  return (
    <div className='cart' >
        <Container>
            <Row>
            <Col xs={8}>
                <Container fluid >
                    {/* <Row>
                        <Shipping/>
                    </Row> */}
                    <Row>
                        <Payment/>
                    </Row>
                    <Row>
                        <Review cart={cart} priceTotal={priceTotal} />
                    </Row>
                    <Row>
                        <Col>
                            <br></br>
                            <Link to='/cart' >
                                <Button>Back to Cart</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col  xs={4}>
                <Summary priceTotal={priceTotal} cart={cart} />
            </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Checkout;