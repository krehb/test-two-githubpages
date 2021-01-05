import React  from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProductList from './productList/productList';
import StoreFront from './storeFront/storeFront';
import './store.css'



const Store = ({products, group, categories, setCategoryHandler, category, addToCartHandler, cart, setCart}) => {


  return (
    <div className='store' >
        <Container  >
            <Row>
                <Col className='product-list' xs={2} >
                    <ProductList products={products} setCategoryHandler={setCategoryHandler} categories={categories}  />
                </Col>
                <Col xs={10} >
                    <StoreFront products={products} cart={cart} setCart={setCart} group={group} categories={categories} setCategoryHandler={setCategoryHandler} category={category} addToCartHandler={addToCartHandler} />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Store;