import React, {useState, useEffect} from 'react';
import '../store.css';
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
    <div className='product-list' >
        <h6 className='list-title' >Shop By Category</h6>
        <Form.Control onChange={(e) => setCatFilterHandler(e)} as="select">
          <option>All</option>
          <option>Canine</option>
          <option>Equine</option>
        </Form.Control>
        {list.map(x => 
            <h6 className='product-title' onClick={()=>selectingCategoryHandler(x)} key={x.id} >{x.name}</h6>
        )}
    </div>
  );
}

export default ProductList;