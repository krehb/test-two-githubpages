import React from 'react';
import StoreFrontGallery from './storeFrontGallery';
import StoreFrontDeck from './storeFrontDeck';


const StoreFront = ({products, categories, setCategoryHandler, setCategory , category, group, addToCartHandler, cart, setCart, instockArray, accordion, setAccordion }) => {

  let store = null





  if(category === 'none'){
    store = (
      <StoreFrontGallery setCategoryHandler={setCategoryHandler} products={products.products} setCategory={setCategory} categories={categories}  />
    )
  } else {
    store = (
      <div>
        <div className='mobile-categories' onClick={() => setCategoryHandler('none')} >Categories</div>
        <StoreFrontDeck accordion={accordion} setAccordion={setAccordion} products={products} instockArray={instockArray} category={category} group={group} cart={cart} setCart={setCart} addToCartHandler={addToCartHandler} />
      </div>
    )
  }



  return (
    <div className='storefront' >
      {store}
    </div>
  );
}

export default StoreFront;