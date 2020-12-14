import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
// import MyCard from './storeFrontCard';
import ImgGalleryCol from './imgGalleryCol';


const StoreFrontGallery = ({ categories, setCategoryHandler}) => {

    const [cat1,setCat1] = useState([]);
    const [cat2,setCat2] = useState([]);
  
    useEffect(() => {
  
      let list = []
      list.push(categories[0])
      list.push(categories[1])
      list.push(categories[2])
      setCat1(list)
  
      let list2 = []
      list2.push(categories[3])
      list2.push(categories[4])
      list2.push(categories[5])
      setCat2(list2)
  
  
  
  
    },[]);
  


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
                {
                    cat1.map(x=> <ImgGalleryCol key={x.id} setCategoryHandler={setCategoryHandler} data={x}  /> )
                }
            </Row>
            <Row>
                {
                    cat2.map(x=> <ImgGalleryCol key={x.id} setCategoryHandler={setCategoryHandler} data={x}  /> )
                }
            </Row>
        </Container>
    </div>
  );
}

export default StoreFrontGallery;