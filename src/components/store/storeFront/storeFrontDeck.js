import React, {useState} from 'react';
import MyCard from './storeFrontCard';
import { Button, Row, Col } from 'react-bootstrap';


const StoreFrontDeck = ({products, category, group, addToCartHandler, cart, setCart }) => {

    const [list, setList] = useState(products)

    let filterButtons = null

    const allHandler = () => {
        setList([])
        setList(products); 
    }
    const viusalHandler = () => {
        setList([])
        let newList = products.filter(product => product.subtitle === 'Visual-Semi-Quantitative with Color')
        setList(newList); 
    }
    const refillHandler = () => {
        setList([])
        let newList = products.filter(product => product.subtitle === 'kit refill')
        setList(newList); 
    }
    const cubeHandler = () => {
        setList([])
        let newList = products.filter(product => product.subtitle === 'Quantitative Kit + Cube Reader')
        setList(newList); 
    }
    
    const setListToProducts = () => {
        setList([])
        setList(products)
    }






  if(category === 'Equine IgG' || category === 'Equine SAA'){
    filterButtons = (
      <Row>
      <Col>
        <Button onClick={allHandler} className='filter-button' >All</Button>
        <Button onClick={viusalHandler} className='filter-button' >Visual</Button>
        <Button onClick={refillHandler} className='filter-button' >Quantitative Refill</Button>
        <Button onClick={cubeHandler} className='filter-button' >Cube + Kit</Button>
      </Col>
    </Row>
    )
  } else if (products.length > list.length){
    setListToProducts();
  } else {
    filterButtons = null
  }







  return (
    <div >
        <div>
            <div className="bg-dark text-white my-card img ">
                <h2 className='text' >{category}</h2>
            </div>
            {filterButtons}
            {list.map(x => 
            <div>
                <MyCard   key={x.id} cart={cart} setCart={setCart} data={x} group={group} addToCartHandler={addToCartHandler} />
            </div> )}
        </div>
    </div>
  );
}

export default StoreFrontDeck;