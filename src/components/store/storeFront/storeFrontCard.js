import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Image, Container, Accordion, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../store.css'

export default function MyCard({data, group, addToCartHandler, cart, setCart }) {


    const [renderPrice, setRenderPrice] = useState();
    const [info, setInfo] = useState([]);
    const [show, setShow] = useState(false);
    const [loadSpinner, setLoadSpinner] = useState(false);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        // Update the document title using the browser API
        setRenderPrice(data.price[1])
        setInfo(data.description)
    },[]);



    const selectionCollapseHandler = (sectionData) => {
        setInfo(sectionData)
    }

    function isSelected(sectionData) {
        if (sectionData === info) {
            return 'collapse-head selected'
        } else {
            return 'collapse-head'
        }
    }


    let renderQty = null
    if(1 > qty){
        renderQty = 1
    }else {
        renderQty = qty
    }

    let renderCheckout = null
    if(cart.length > 0){
        renderCheckout = (
            <Link to='/cart' >
                <button className='checkout' >Checkout &#8594;</button>
            </Link>
        )
    } else {
        renderCheckout = null
    }



    const combineAddtoCartHandler = (data) => {
        let passingElement = {
            product: data,
            productQty: renderQty,
        }

        addToCartHandler(passingElement);
        setLoadSpinner(true);
        setTimeout(function() {
            setLoadSpinner(false);
        }, 400);
    }



    //for adding a spinner for signaling that adding to cart has taken place
    let addingButton = null
    if (loadSpinner){
        addingButton = (
            <Spinner animation="border" variant="primary" />
        )
    } else {
        addingButton = (
            <div>
                <Row>
                    <Col  sm={1} ></Col>
                    <Col  >
                        <button className='add-to-cart-button'  onClick={() => combineAddtoCartHandler(data, qty)} >Add to Cart</button>
                        <span className='qty' onClick={() => setQty(qty + 1)}> +</span><span className='qty'> ({renderQty}) </span><span className='qty right' onClick={() => setQty(qty - 1)} >- </span>
                    </Col>
                </Row>
            </div>
        )
    }




    let productCard = null;

    if( data.group === group ){
        productCard = (
            <div>
            <Accordion defaultActiveKey="0">
            <Card>
            <Card.Header>
                <Row>
                    <Col xs={8} >
                        <Row>
                            <Col xs={3} >
                                <Image fluid src={data.img} />
                            </Col>
                            <Col xs={9} >
                                <span className='title' >{data.title}</span><span> {data.test} tests</span>
                                <h6 className='subtitle' >{data.subtitle}</h6>
                                <Accordion.Toggle className='learn-more' as={Card.Header} eventKey="1">
                                    Additional Info
                                </Accordion.Toggle>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4} className='product-buttons' >
                        <Container>
                        {addingButton}
                        <Row>
                        <Col  sm={1} ></Col>
                        <Col>
                            {renderCheckout}
                        </Col>
                        </Row>
                        </Container>    
                    </Col>
                </Row>
            </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <span onClick={() => selectionCollapseHandler(data.description)} className={isSelected(data.description)} >Description</span>
                    <span onClick={() => selectionCollapseHandler(data.info)} className={isSelected(data.info)} >Info</span>
                    <span onClick={() => selectionCollapseHandler(data.highlights)} className={isSelected(data.highlights)} >Highlights</span>
                    <span onClick={() => selectionCollapseHandler(data.instructions)} className={isSelected(data.instructions)} >Instruction</span>
                    <div className='collapse-body'>
                    {info.map(text => <p>{text}</p>)}
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <br></br>
        </div>
    )
    }else {
        productCard = null
    }

    


  return (
    <div>
        {productCard}
    </div>
  );
}

