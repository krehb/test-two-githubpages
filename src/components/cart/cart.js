import React  from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';
import CartItem from './cart-item';



const Cart = ({cart, clearCart}) => {


  return (
    <div className='store' >
        <Container  >
            <Row>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>SubTitle</th>
                    <th>Test</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map( x => <CartItem item={x} />)}
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>$100.00</td>
                    </tr>
                </tbody>
                </Table>
            </Row>
            <Row>
                <Button onClick={clearCart} >Clear Cart</Button>
            </Row>
        </Container>
    </div>
  );
}

export default Cart;