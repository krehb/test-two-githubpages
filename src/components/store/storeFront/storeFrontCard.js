import React, { useState, useEffect } from 'react';
import { Image, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../../../products';
import '../store.css'
import InfoAccordion from './infoAccordion';

export default function MyCard({data, group, addToCartHandler, cart, instockArray, accordion, setAccordion }) {


    const [renderPrice, setRenderPrice] = useState();
    const [info, setInfo] = useState([]);
    const [show, setShow] = useState(false);
    const [loadSpinner, setLoadSpinner] = useState(false);
    const [qty, setQty] = useState(1);
    const [instock, setInstock] = useState(false)

    useEffect(() => {
        // Update the document title using the browser API
        setRenderPrice(data.price[1])
        setInfo(data.description)

        instockArray.forEach(product => {
            if (product.id === data.id && product.instock ){
                setInstock(true) 
            }
        });

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


    // Rendering different things
    let renderQty = null
    if(1 > qty){
        renderQty = 1
    }else {
        renderQty = qty
    }
    let renderCheckout = null
    if(cart.length > 0){
        renderCheckout = (
            <Link onClick={() => setAccordion(false)} to='/cart' >
                <button className='checkout' >Checkout &#8594;</button>
            </Link>
        )
    } else {
        renderCheckout = null
    }
    let renderAccordion = null
    if (accordion){
        renderAccordion = (
            <InfoAccordion data={data} />
        )
    } else {
        renderAccordion = null
    }
    let expanded = null
    if (accordion){
        expanded = '-'
    } else {
        expanded = '+'
    }
    let renderInstock = null
    if (!instock){
        renderInstock = (
            <div className='out-of-stock'  >
                <h6 >Out of Stock</h6>
            </div>
        )
    } else {
        renderInstock = (
            <>
            <button className='add-to-cart-button'  onClick={() => combineAddtoCartHandler(data, qty)} >Add to Cart</button>
            <span className='qty' onClick={() => setQty(qty + 1)}> +</span><span className='qty'> ({renderQty}) </span><span className='qty right' onClick={() => setQty(qty - 1)} >- </span>
            </>
        )
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
            <div className='adding' >
                {renderInstock}
            </div>
        )
    }




    let productCard = null;

    if( data.group === group ){
        productCard = (

        <div className='card-parent' >

            <div className='child1' >
                <Image className='img' src={data.img} />
            </div>

            <div className='child2' >
                <h6 className='title' >{data.title}<span> {data.test} tests</span></h6>
                <h6 className='subtitle' >{data.subtitle}</h6>
                <h6 className='info' onClick={() => {setAccordion(!accordion)}} ><span className='button' >Additional Info</span><span className='plus' >{expanded}</span></h6>
            </div>

            <div className='child3' >
                {addingButton}
                <div className='child' >
                    {renderCheckout}
                </div>
            </div>
        </div>
    )
    }else {
        productCard = null
    }

    


  return (
    <div>
        {productCard}
        {renderAccordion}
    </div>
  );
}

