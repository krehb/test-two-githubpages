import React, { useState, useEffect } from 'react';
import { Image, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../../../products';
import '../store.css'
import InfoAccordion from './infoAccordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTint } from '@fortawesome/free-solid-svg-icons'

export default function MyCard({data, group, addToCartHandler, cart, instockArray, accordion, setAccordion, category }) {


    const [renderPrice, setRenderPrice] = useState();
    const [info, setInfo] = useState([]);
    const [show, setShow] = useState(false);
    const [loadSpinner, setLoadSpinner] = useState(false);
    const [qty, setQty] = useState(1);
    const [instock, setInstock] = useState(false)
    const [rerenderAccordion, setRerenderAccordion] = useState(false)

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

    //when you nav to a new product category, this is triggered to close the "additional info" accordion
    useEffect(() => {
        setRerenderAccordion(false)
    },[category]);


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
            <Link 
            // onClick={() => setAccordion(false)}
             to='/cart'
             >
                <button className='checkout' >Checkout &#8594;</button>
            </Link>
        )
    } else {
        renderCheckout = null
    }
    let renderAccordion = null
    if (rerenderAccordion){
        renderAccordion = (
            <InfoAccordion data={data} />
        )
    } else {
        renderAccordion = null
    }
    let expanded = null
    if (rerenderAccordion){
        expanded = '-'
    } else {
        expanded = '+'
    }
    let renderInstock = null
    if (!instock){
        renderInstock = (
            // <div className='out-of-stock'  >
            //     <h6 >Out of Stock</h6>
            // </div>
            <>
            <button className='add-to-cart-button'  onClick={() => combineAddtoCartHandler(data, qty)} >Add to Cart</button>
            <span className='qty' onClick={() => setQty(qty + 1)}> +</span><span className='qty'> ({renderQty}) </span><span className='qty right' onClick={() => setQty(qty - 1)} >- </span>
            </>
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



    //for rendering the correct icon
    let renderIcon = null
    let renderName = null
    if(data.icon === 1){
        //viusal icon
        renderIcon = ( <div style={{marginBottom: '10px'}} ><FontAwesomeIcon icon={faEye} /> VISUAL Kit</div>)
        renderName = ' tests'
    } else if (data.icon === 2) {
        //test icon
        renderIcon = ( <div style={{marginBottom: '10px', display: 'flex'}}><div style={{ marginRight: '5px', marginTop: '5px', width: '20px', height: '10px', backgroundColor: 'white', borderRadius: '2px', border: '1px solid black'}} ><div style={{width: '7px', height: '4px', backgroundColor: '#eaeaea', zIndex: 1, borderRadius: '5px', border: '1px solid black', marginTop: '2px', marginLeft: '5px'}} ></div></div> Kit</div> )
        renderName = ' tests'
    } else if(data.icon === 3 ) {
        //cube icon
        renderIcon = ( <div style={{marginBottom: '10px', display: 'flex'}}><div style={{ marginRight: '5px', marginTop: '2px', width: '15px', height: '15px', backgroundColor: '#CD4B3B', borderRadius: '2px', border: '1px solid black'}} ><div style={{width: '7px', height: '4px', backgroundColor: '#afb5b2', zIndex: 1, borderRadius: '5px', border: '1px solid black', marginTop: '3px', marginLeft: '3px'}} ></div></div></div> )
        renderName = ''
    } else if(data.icon === 4) {
        //no icon
        renderIcon = ( <div  style={{marginBottom: '10px', display: 'flex'}} ><FontAwesomeIcon icon={faTint} style={{ color: 'red', marginRight: '7px'}} />Collection</div>)
        renderName = ' tubes'
    } else {
        renderIcon = null
        renderName = null
    }





    let productCard = null;

    if( data.group === group ){
        productCard = (

        <div className='card-parent' style={{width: '800px'}} >

            <div className='child1' >
                <Link to={data.pathname} ><Image className='img' src={data.img} /></Link>
            </div>

            <div className='child2' >
                <h6 className='title' ><Link to={data.pathname} >{data.title}</Link><span> <span style={{fontWeight: 700, fontSize: '18px'}} >
                {data.test}
                </span>{renderName}</span>
                </h6>
                <h6 className='subtitle' > {renderIcon} {data.subtitle}</h6>
            </div>

            <div className='child3' >
                <div style={{paddingLeft: '50px', paddingBottom: '10px'}} >${data.price}.00</div>
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

