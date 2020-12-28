import React from 'react';
import StoreFrontGallery from './storeFrontGallery';
import StoreFrontDeck from './storeFrontDeck';


const StoreFront = ({products, categories, setCategoryHandler, setCategory , category, group, addToCartHandler }) => {

  let store = null






  if(category === 'none'){
    store = (
      <StoreFrontGallery setCategoryHandler={setCategoryHandler} products={products.products} setCategory={setCategory} categories={categories}  />
    )
  } else {
    store = (
      <StoreFrontDeck products={products} category={category} group={group} addToCartHandler={addToCartHandler} />
    )
  }



  return (
    <div className='storefront' >
      {store}
    </div>
  );
}

export default StoreFront;