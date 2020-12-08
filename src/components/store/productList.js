import React from 'react';
import { Form } from 'react-bootstrap';
import './store.css'

export default function ProductList(products) {



  return (
    <div className='product-list' >
        <h6 className='list-title' >Shop By Category</h6>
        {products.products.products.map(x => 
        <div key={x.stripeCode} >
            <h6 className='product-title' onClick={()=> {console.log(x.title)}} >{x.title}</h6>
        </div> )}
    </div>
  );
}

