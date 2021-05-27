import React, {useEffect, useState} from 'react';
import {useLocation, useHistory, Link } from "react-router-dom";
import { Container, Row, Col, Accordion, Card, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import products from '../../products'
import { LoadingSpinner } from 'video-react';

const ProductInfo = ({addToCartHandler}) => {

    let location = useLocation();
    const history = useHistory()
    const [qty, setQty] = useState(1);
    const [renderPrice, setRenderPrice] = useState(0);


    const goBack = () => {
        history.goBack()
    }

    const [data,setdata] = useState('');

    const [info, setInfo] = useState([]);
    const [descr, setDescr] = useState([]);
    const [highlights, setHighlights] = useState([]);
    const [instructions, setInstructions] = useState('')
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        products.forEach(product => {
            if(product.pathname === location.pathname){

                setInfo(product.info)
                setDescr(product.description)
                setHighlights(product.highlights)
                setRenderPrice(product.price)
                setInstructions(product.instructions[0])
                setdata(product)
            }
        });

        window.scroll(0,0)

    }, [location.pathname])


    let renderQty = null
    if(1 > qty){
        renderQty = 1
    }else {
        renderQty = qty
    }

    const combineAddtoCartHandler = (data) => {
        let passingElement = {
            product: data,
            productQty: renderQty,
        }
        setShowAlert(true)
        addToCartHandler(passingElement);
    }


    let renderUnit = null
    if (data.icon === 4){
        renderUnit = <div className='product-price' style={{marginBottom: '20px', marginLeft: '20px'}} >{data.test * renderQty} tubes</div>
    } else if (data.icon === 3) {
        renderUnit = <div></div>
    } else {
        renderUnit = <div className='product-price' style={{marginBottom: '20px', marginLeft: '20px'}} >{data.test * renderQty} tests</div>
    }
    


  return (
    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '50px'}} >  
        <div className='product-page' >
            {showAlert &&
                <Alert  variant='success' onClose={()=> setShowAlert(false)} dismissible >
                    Add to cart! <Link to='/cart' >Continue To Checkout</Link>
                </Alert>
            }
            <div onClick={goBack} style={{cursor: 'pointer', marginLeft:'30px'}} ><FontAwesomeIcon icon={faArrowLeft} /> Back</div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop:'10px', marginBottom: '20px'}} >
                <div>
                    <img src={data.img} className='product-img' />
                </div>
                <div>
                    <div style={{marginLeft: '20px', width: '300px', marginTop: '10px'}} >
                        <div className='product-title-page' ><h3>{data.title}</h3></div>
                        <div style={{display: 'flex', marginLeft: '10px', marginTop: '25px'}}>
                            <div className='product-price' style={{marginBottom: '15px'}} >${renderPrice * renderQty}.00</div>
                            {renderUnit}
                        </div>
                        <button className='add-to-cart-button'   onClick={() => combineAddtoCartHandler(data)} >Add to Cart</button>
                        <span className='qty' onClick={() => setQty(qty + 1)}> +</span><span className='qty'> ({renderQty}) </span><span className='qty right' style={{paddingRight: '10px', borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}} onClick={() => setQty(qty - 1)} >- </span>
                        <div  className='no-hover product-instructions'  >
                            <a  href={instructions} className='no-hover'  target='blank' >Instructions <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header className='no-hover product-d-hover'>
                        <Accordion.Toggle as={Card.Body} className='product-details' variant="link" eventKey="0" >
                            Info
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body >
                            {info.map(paragraph => 
                                <p>{paragraph}</p>
                            )}
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className='no-hover product-d-hover'>
                        <Accordion.Toggle as={Card.Body} className='product-details' variant="link" eventKey="1">
                            Description
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body >
                            {descr.map(paragraph =>
                                <p>{paragraph}</p>
                            )}
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className='no-hover product-d-hover'>
                        <Accordion.Toggle as={Card.Body} className='product-details' variant="link" eventKey="2">
                            Hightlights
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            {highlights.map(paragraph =>
                                <p>{paragraph}</p>
                            )}
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className='no-hover product-d-hover'>
                        <Accordion.Toggle as={Card.Body} className='product-details' variant="link" eventKey="3">
                            Related Videos
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            Put the video here
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    </div>
  );
}

export default ProductInfo;