import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthItems from './auth-items';
import { AuthProvider } from '../../config/Auth';
import TopAuthItems from './top-auth-items';

const Nav = (cart) => {

    let navCart = null

    if(cart.cart.length === 0){
        navCart = null
    } else {
        navCart = (
            <Link className='my-nav-item' to='/cart' >
            Cart({cart.cart.length})
            </Link>
        )
    }



  return (
        <div className='my-nav' >
            <Container fluid  >
                <Row className='top-auth' >
                    <TopAuthItems />
                </Row>
                <div className='nav-parent'>
                    <div className='nav-child1' >
                        <div className='nav-child-img' >
                            <Link to='/'  >
                                <img
                                    alt=""
                                    src="https://www.targetvet.com/wp-content/uploads/elementor/thumbs/biometallics-logo-oiu6b3tt63fywipsrkni4fjfhftxi93fxb5nopm164.png"
                                    className='nav-child-img'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='nav-child2' >
                        <div className='nav-child-list no-hover' >
                            <Link className='my-nav-item' to='/canine' >
                            Canine 
                            </Link>
                        </div>
                        <div className='nav-child-list no-hover' >
                            <Link className='my-nav-item' to='/equine' >
                            Equine
                            </Link>
                        </div>
                        <div className='nav-child-list no-hover ' >
                            <Link className='my-nav-item' to='/store' >
                            Store
                            </Link>
                        </div>
                        <div className='nav-child-list no-hover' >
                            {navCart}
                        </div>
                    </div>
                </div>

            </Container>
            <AuthItems/>
        </div>
  );
}

export default Nav;