import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';
import CartItem from './cart-item';
import {Link} from 'react-router-dom';
import app from '../../config/base';


const Cart = ({cart, clearCart, setCart, removeItemHandler, priceTotal}) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [path, setPath] = useState('')

    useEffect(() => {
        // Update the document title using the browser API
        app.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              setLoggedIn(true)
              if (cart.length > 0){
                  setPath('/checkout')
              } else {
                  setPath('/store')
              }
            } else {
              // No user is signed in.
              setLoggedIn(false)
              if (cart.length > 0){
                setPath('/sign-in')
              } else {
                setPath('/store')
              }
            }
        });

    },[]);
    

 


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
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map( x => <CartItem cart={cart} setCart={setCart} key={x.id} item={x} removeItemHandler={removeItemHandler} />)}
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>${priceTotal}.00</td>
                    </tr>
                </tbody>
                </Table>
            </Row>
            <Row>
                <Col>
                    <Link to='/store' >
                    <Button >Back to Store</Button>
                    </Link>
                </Col>
                <Col>
                    <Button onClick={clearCart} >Clear Cart</Button>
                </Col>
                <Col>
                    <Link to={path} >
                        <Button >Proceed to checkout</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Cart;