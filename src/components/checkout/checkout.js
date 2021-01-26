import React  from 'react';
import Review from './review';
import Summary from './summary';
import Shipping from './shippingAddress';


const Checkout = ({cart, priceTotal }) => {



  return (
        <div>
            <div className='checkout-parent' >
                <div>
                    <Shipping/>
                    <Review cart={cart} priceTotal={priceTotal} />
                </div>
                <div className='child' >
                    <Summary priceTotal={priceTotal} cart={cart} />
                </div>
            </div>
        </div>

  );
}

export default Checkout;