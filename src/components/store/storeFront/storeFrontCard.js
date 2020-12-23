import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Image, Container, Accordion, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../store.css'


export default function MyCard({data, group, addToCartHandler}) {

    const [count, setCount] = useState(1);
    const [classes, setClasses] = useState('test-not');
    const [classes2, setClasses2] = useState('test-selected');
    const [renderPrice, setRenderPrice] = useState();
    const [info, setInfo] = useState([]);


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
                                <h6 className='title' >{data.title}</h6>
                                <h6 className='subtitle' >{data.subtitle}</h6>
                                <Accordion.Toggle className='learn-more' as={Card.Header} eventKey="1">
                                   + Addition Info
                                </Accordion.Toggle>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4} className='product-buttons' >
                        <Container>
                        <Row>
                            {/* <Col>
                                <div className='test' >
                                    <Row>
                                        <Col className={classes}  >{data.test} Tests</Col>
                                    </Row>
                                </div>
                            </Col> */}
                            <Col >
                            <Row>
                                <Col>
                                    <Button onClick={() => addToCartHandler(data)} >Add to Cart</Button>                        
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

