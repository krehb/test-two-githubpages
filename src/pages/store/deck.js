import React, {useEffect, useState} from 'react';
import MyCard from '../../components/store/storeFront/storeFrontCard';
import { Button, Row, Col } from 'react-bootstrap';
import {useLocation } from "react-router-dom";
import SideNav from './sideNav'
import Card from '../../components/store/storeFront/storeFrontCard';

import products from '../../products'

const StoreFrontDeck = ({category, group, addToCartHandler, cart, setCart, instockArray, accordion, setAccordion, categories,  setCategoryHandler }) => {

    let location = useLocation();

    const [title, setTitle] = useState();
    const [list, setList] = useState(products);
    const [titleHighlights, setTitleHighlights] = useState(['232','234']);
    const [img, setImg] = useState('');

    useEffect(() => {

        

        categories.forEach(element => {
            if(element.pathname === location.pathname){
                setTitle(element.name)
                setCategoryHandler(element)
                setTitleHighlights(element.highlight)
                setImg(element.img)
            }
        });


    }, [location.pathname])



    const listHighlights = titleHighlights.map(x => <li key={x} >{x}</li>)




  return (
    <div style={{display: 'flex', justifyContent: 'center'}} className='store' >
        <SideNav categories={categories} setCategoryHandler={setCategoryHandler} />
        <div className='storefront' >


            <div style={{display: 'flex', width: '788px', height: '150px', backgroundColor: '#ededed', borderRadius: '5px' , margin: '10px', border: '1px solid #dbdbdb'  }} >
                <div  ><h1 style={{width: '250px', fontSize: '25px', paddingTop: '30px', paddingLeft: '30px'}}>{title}</h1></div>
                <div><img style={{width: '250px', height: '150px', borderRadius: '10px'}} src={img} /></div>
                <div><ul style={{width: '250px', fontSize: '12px', paddingTop: '10px'}}>{listHighlights}</ul></div>
            </div>

            {list.map(x => 
            <div>
                <Card  accordion={accordion} setAccordion={setAccordion} category={category} instockArray={instockArray} key={x.id} cart={cart} setCart={setCart} data={x} group={group} addToCartHandler={addToCartHandler} />
            </div> )}



        </div>
    </div>
  );
}

export default StoreFrontDeck;