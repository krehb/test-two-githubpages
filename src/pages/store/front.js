import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ImgGalleryCol from '../../components/store/storeFront/imgGalleryCol'
import SideNav from '../store/sideNav'


const StoreFrontGallery = ({ categories, setCategoryHandler}) => {


  


  return (
      <div style={{display:'flex', justifyContent: 'center'}} >
    
        <SideNav categories={categories} setCategoryHandler={setCategoryHandler} />


        <div className='storefront-gallery' >

        <Container fluid style={{width: '788px'}} >
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
            <Row>
                <div style={{textAlign: 'center'}} >
                    <p>We at TargetVet have spent many years researching and creating great products to help you with a successful breeding program. We care about animals and strive to create easy diagnostic tests to provide helpful results quickly so you can make the best decisions for their care.</p>
                    <p>By using the latest scientific technology and visible detection methods, we have developed our newest products. To get number results, we partnered our tests with a small visual optical electronic device (cube reader) with software that provides on-site numbers with lab accuracy and cost effectiveness.</p>
                </div>
            </Row>
        </Container>
        </div>

      </div>
  );
}

export default StoreFrontGallery;