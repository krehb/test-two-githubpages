import React, { useState, useEffect } from 'react';
import { Card , Row, Col, Button, Image } from 'react-bootstrap';
import MyCard from './storeFrontCard';
// import Dogs from '../../../assets/husky.jpg';


export default function StoreFront(products) {



  return (
    <div className='storefront' >
        <div className="bg-dark text-white my-card img ">
            <h2 className='text' >TExtlekstjd</h2>
        </div>

        {products.products.products.map(x => 
        <div>
            <MyCard data={x} />
        </div> )}
    </div>
  );
}

