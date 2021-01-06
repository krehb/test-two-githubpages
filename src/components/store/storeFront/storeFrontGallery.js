import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
// import MyCard from './storeFrontCard';
import ImgGalleryCol from './imgGalleryCol';


const StoreFrontGallery = ({ categories, setCategoryHandler}) => {


  


  return (
    <div className='storefront-gallery' >

        <Container fluid >
            <Row>
                <Col>
                    <h1 className='header' >Caring For Your Animals with Easy Tests</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className='header'>Advanced | Accurate | Simple</h1>
                </Col>
            </Row>
            <Row>
                <div className='img-group' >
                    {categories.map(x=> <ImgGalleryCol  key={x.id} setCategoryHandler={setCategoryHandler} data={x}  /> )}
                </div>
            </Row>
        </Container>
    </div>
  );
}

export default StoreFrontGallery;