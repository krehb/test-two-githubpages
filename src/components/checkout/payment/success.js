import React, { useEffect}  from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import dogo from '../../../assets/img/dog.png'


const Success = ({setCart }) => {

    useEffect(() => {
        setCart([]);
    },[]);

  return (
    <div >
        <Container>
            <Row>
            <Col sm>
                <h3 style={{marginTop: '20px'}} >Your Order Has Been Successful</h3>
            </Col>
            <Col sm>
                <img src={dogo} width='300px' /> 
            </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Success;