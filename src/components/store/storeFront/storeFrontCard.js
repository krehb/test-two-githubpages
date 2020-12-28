import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Image, Container, Accordion, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../store.css'

export default function MyCard({data, group, addToCartHandler}) {


    const [renderPrice, setRenderPrice] = useState();
    const [info, setInfo] = useState([]);
    const [show, setShow] = useState(false);

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


    const combineAddtoCartHandler = (data) => {
        addToCartHandler(data);

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
                        <Row>
                            <Col >
                            <Row>
                                <Col>
                                    <Button onClick={() => combineAddtoCartHandler(data)} >Add to Cart</Button>                        
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Link mg to='/cart'  >
                                    <Button className='cart-button' >Go to Cart</Button>
                                </Link>
                                </Col>
                            </Row>
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

