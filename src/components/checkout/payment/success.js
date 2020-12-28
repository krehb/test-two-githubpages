import React, { useEffect}  from 'react';
import { Container, Col, Row} from 'react-bootstrap';



const Success = ({setCart }) => {

    useEffect(() => {
        setCart([]);
    },[]);

  return (
    <div >
        <Container>
            <Row>
            <Col>
                <h3>Your Order Has Been Successful</h3>
            </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Success;