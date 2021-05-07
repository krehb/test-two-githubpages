import React, { useState, useEffect } from 'react';
import { Container, Alert, Row, Button, Table } from 'react-bootstrap';
import CartItem from './cart-item';
import {useHistory, Link} from 'react-router-dom';
import app from '../../config/base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, clearCart, setCart, removeItemHandler, priceTotal}) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [path, setPath] = useState('');
    const [error, setError] = useState(false)

    let history = useHistory();

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
                setPath('/store/gallery')
              }
            }
        });

        window.scroll(100,0)

    },[]);
    

    const continueToCheckoutHandler = () => {
        app.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              setLoggedIn(true)
              if (cart.length > 0){
                  setPath('/checkout')
              } else {
                  setPath('/store/gallery')
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

        cart.forEach(item => {
            if(!(item.icon === 4)){
                history.push(path);
            } else{
                console.log('error');
                setError(true)
            }
        });
    }


  return (
    <div className='cart' >
        <Container  >

        {error &&
            <Alert variant='warning' style={{display: 'flex', justifyContent: 'space-between'}} >
                <span>
                <span style={{fontWeight: 700}}>Blood Collection & Monovette Collection</span> must have an additional purchase of either <span style={{fontWeight: 700}} >Canine or Equine Kit</span>
                </span>
                <span onClick={()=>setError(false)} style={{fontWeight: 700, cursor: 'pointer'}} >X</span>
            </Alert>
        }

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
                        <td onClick={clearCart} style={{textAlign: 'right'}} >Remove All{' '}<FontAwesomeIcon icon={faTrash} /></td>
                        <td>Total</td>
                        <td>${priceTotal}.00</td>
                    </tr>
                </tbody>
                </Table>
            </Row>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div>
                    <Link to='/store/gallery' style={{color: 'black'}}  >
                        <FontAwesomeIcon icon={faArrowLeft} />{' '}Store
                    </Link>
                </div>
                <div style={{marginLeft: '60%'}} >
                    <Button onClick={continueToCheckoutHandler} style={{backgroundColor: '#34cc34'}} >Continue {' '}<FontAwesomeIcon icon={faArrowRight} /></Button>
                </div>
            </div>
        </Container>
    </div>
  );
}

export default Cart;