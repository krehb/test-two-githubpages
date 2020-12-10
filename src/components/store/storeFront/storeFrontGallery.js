import React, { useState, useEffect } from 'react';
import { Card , Row, Col, Button, Image, Container } from 'react-bootstrap';
import MyCard from './storeFrontCard';
import ImgGalleryCol from './imgGalleryCol';


export default function StoreFrontGallery(products) {

    const [category, setCategory] = useState('none');


  return (
    <div className='storefront-gallery' >

        <Container fluid >
            <Row>
                <Col>
                    <h1>My first big title this can be anything.</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>My second big title this can be anything.</h3>
                </Col>
            </Row>

            <Row>
                {products.products.products.map(x =>
                    <ImgGalleryCol data={x} setCategory={setCategory} category={category} />
                 )}
            </Row>
        </Container>
    </div>
  );
}

