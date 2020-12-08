import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProductList from './store/productList';
import StoreFront from './store/storeFront';
import './store/store.css'



export default function Store(products) {






  return (
    <div className='store' >
        <Container  >
            <Row>
                <Col xs={2} >
                    <ProductList products={products} />
                </Col>
                <Col xs={10} >
                    <StoreFront products={products} />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

