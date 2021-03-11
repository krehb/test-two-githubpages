import React, {useState}  from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProductList from './productList/productList';
import StoreFront from './storeFront/storeFront';
import './store.css'



const Store = ({products, group, categories, setCategoryHandler, category, addToCartHandler, cart, setCart, instockArray}) => {

    const [accordion, setAccordion] = useState(false);


  return (
    <div className='store' >
        <Container  >
            <Row>
                <Col className='product-list' xs={2} >
                    <ProductList setAccordion={setAccordion} products={products} setCategoryHandler={setCategoryHandler} categories={categories}  />
                </Col>
                <Col  >
                    <StoreFront accordion={accordion} setAccordion={setAccordion} instockArray={instockArray} products={products} cart={cart} setCart={setCart} group={group} categories={categories} setCategoryHandler={setCategoryHandler} category={category} addToCartHandler={addToCartHandler} />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Store;