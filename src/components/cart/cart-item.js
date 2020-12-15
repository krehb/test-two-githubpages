import React  from 'react';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';



const CartItem = ({item,removeItemHandler}) => {



  return (
    <tr>
        <td>
            <Image src={item.img} width='100px' />
        </td>
        <td>
            <Row>
            <Col xs={10} >
                <Row>
                    <Col>
                    <h6>{item.title}</h6>
                    </Col> 
                </Row>
                <Row>
                    <Col>
                    <h6>{item.subtitle}</h6>
                    </Col> 
                </Row>
            </Col>
            <Col xs={2}>
                <span className='remove-item' onClick={() => removeItemHandler(item.id)} > X</span>
            </Col>
            </Row>
        </td>
        <td>
            {item.qty}
        </td>
        <td>
            {item.test * item.qty}
        </td>
        <td>
            ${item.price * item.qty}.00
        </td>
    </tr>
  );
}

export default CartItem;