import React, {useState, useEffect} from 'react';
import {Link } from "react-router-dom";
import { Form} from 'react-bootstrap';

const ProductList = ({categories, setCategoryHandler, setAccordion}) => {

  const [list, setList] = useState(categories)


  const setCatFilterHandler = (e) => {
    if (e.target.value === 'All'){
      setList(categories)
    } else if(e.target.value === 'Equine'){
      setList([])
      let newList = categories.filter(category => category.type === 'Equine')
      setList(newList);
    }else {
      setList([])
      let newList = categories.filter(category => category.type === 'Canine')
      setList(newList);
    }
  }




  const selectingCategoryHandler = (x) => {
    setAccordion(false);
    setCategoryHandler(x);
  }



  return (
    <div className='product-list' style={{padding: '20px', width: '300px'}} >
        <h6 className='list-title' >Shop By Category</h6>
        <Form.Control onChange={(e) => setCatFilterHandler(e)} as="select">
          <option>All</option>
          <option>Canine</option>
          <option>Equine</option>
        </Form.Control>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        {list.map(x => 
            <Link  to={x.pathname} className='product-title' id={x.type} key={x.id} >{x.name}</Link>
        )}
        </div>
    </div>
  );
}

export default ProductList;