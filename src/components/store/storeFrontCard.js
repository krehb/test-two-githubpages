import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Image, Container, Accordion, Card } from 'react-bootstrap';
import './store.css'


export default function MyCard({data}) {

    const [count, setCount] = useState(1);
    const [classes, setClasses] = useState('test-not');
    const [classes2, setClasses2] = useState('test-selected');
    const [cubetext, setCube] = useState('No Cube')
    const [renderPrice, setRenderPrice] = useState();
    const [cubePrice, setCubePrice] = useState(600);
    const [cubeCount, setCubeCount] = useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        setRenderPrice(data.price[1])
    },[]);

    const selectTestHandler1 = () => {
        setClasses('test-selected')
        setClasses2('test-not')
        setRenderPrice(data.price[0])
    }

    const selectTestHandler2 = () => {
        setClasses2('test-selected')
        setClasses('test-not')
        setRenderPrice(data.price[1])
    }





    let cubeInput = null



    if ( data.cube === true) {
        cubeInput = (
            <Row>
                <Col sm >
                <p className='with-cube' > Cube </p>                
                </Col>
                <Col sm  >
                    <Row>
                        <Col className='arrow' onClick={() => setCubeCount(cubeCount + 1)} >&#8593;</Col>
                    </Row>
                    <Row>
                        <Col><span>Qty: {cubeCount}</span></Col>
                    </Row>
                    <Row>
                        <Col className='arrow' onClick={() => {if(!(cubeCount=== 0)){
                            setCubeCount(cubeCount - 1)
                        }}} >&#8595;</Col>
                    </Row>
                </Col>
            </Row>
        )
    }



    let productCard = null;

    if( data.group === 2 ){
        productCard = (
            <div>
            <Accordion defaultActiveKey="0">
            <Card>
            <Card.Header>
                <Row>
                    <Col xs={5} >
                        <Row>
                            <Col xs={5} >
                                <Image fluid src={data.img} />
                            </Col>
                            <Col xs={7} >
                                <h6 className='title' >{data.title}</h6>
                                <h6 className='subtitle' >{data.subtitle}</h6>
                                <Accordion.Toggle className='learn-more' as={Card.Header} eventKey="1">
                                Learn *click it*
                                </Accordion.Toggle>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2} >
                        <Row>
                            <Col  >
                                {cubeInput}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={5} className='product-buttons' >
                        <Container>
                        <Row>
                            <Col xs={4}>
                                <div className='test' >
                                    <Row>
                                        <Col className={classes} onClick={selectTestHandler1} >{data.test[0]} Tests</Col>
                                    </Row>
                                    <Row>
                                        <Col className={classes2} onClick={selectTestHandler2} >{data.test[1]} Tests</Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={3}>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col className='arrow' onClick={() => setCount(count + 1)} >&#8593;</Col>
                                        </Row>
                                        <Row>
                                            <Col><span>Qty: {count}</span></Col>
                                        </Row>
                                        <Row>
                                            <Col className='arrow' onClick={() => {if(!(count=== 1)){
                                                setCount(count - 1)
                                            }}} >&#8595;</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={5}>
                            <Row>
                                <Col>${(renderPrice * count ) + (cubePrice * cubeCount)}.00</Col>
                            </Row>
                            <Row>
                                <Button>Add to Cart</Button>
                            </Row>
                            </Col>
                        </Row>
                        </Container>    
                    </Col>
                </Row>
            </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Additonal Info
                    <p>Example text or more fact and details about each product</p></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <hr></hr>
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

