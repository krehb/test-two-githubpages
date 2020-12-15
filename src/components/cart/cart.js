import React, {useState, useEffect}  from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';
import CartItem from './cart-item';
import {Link} from 'react-router-dom'


const Cart = ({cart, clearCart, removeItemHandler, priceTotal}) => {

    const [testTotal, setTestTotal] = useState(0);

    useEffect(() => {
        totalTestHandler();
    },);



    const totalTestHandler = () => {
        const newGroup = [0]
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        cart.forEach(item => {
            newGroup.push(item.test * item.qty)
        });
        setTestTotal(newGroup.reduce(reducer))
    }    


  return (
    <div className='cart' >
        <Container  >
            <Row>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th></th>
                    <th>Item(s)</th>
                    <th>Qty</th>
                    <th>Tests</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map( x => <CartItem key={x.id} item={x} removeItemHandler={removeItemHandler} />)}
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>{testTotal}</td>
                        <td>${priceTotal}.00</td>
                    </tr>
                </tbody>
                </Table>
            </Row>
            <Row>
                <Col>
                    <Button onClick={clearCart} >Clear Cart</Button>
                </Col>
                <Col>
                    <Link to='/checkout' >
                    <Button >Proceed to checkout</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Cart;