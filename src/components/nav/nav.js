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
    <div  >
        <nav className='my-nav' >
            <Container fluid >
                <Row className='top-auth' >
                    <Col>
                        <TopAuthItems/>
                    </Col>
                </Row>
                <Row className='nav' >
                    <Col>
                        <Link to='/'  >
                            <img
                                alt=""
                                src="https://www.targetvet.com/wp-content/uploads/elementor/thumbs/biometallics-logo-oiu6b3tt63fywipsrkni4fjfhftxi93fxb5nopm164.png"
                                className=" nav-img"
                            />
                        </Link>
                    </Col>
                    <Col className='my-nav-list' >
                        <Link className='my-nav-item' to='/canine' >
                        Canine 
                        </Link>
                        <Link className='my-nav-item' to='/equine' >
                        Equine
                        </Link>
                        <Link className='my-nav-item' to='/store' >
                        Store
                        </Link>
                        {navCart}
                    </Col>
                </Row>
                <AuthItems/>
            </Container>
        </nav>
    </div>
  );
}

export default Nav;