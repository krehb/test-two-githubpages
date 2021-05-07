import React, {useState}  from 'react';
import Review from './review';
import Summary from './summary';
import Shipping from './shippingAddress';
import StripeContainer from './pay-stripe/StripeContainer'
import './pay-stripe/CardStyle.css'

const Checkout = ({cart, priceTotal }) => {

    const [showItem, setShowItem] = useState(false)

  

  return (
        <div>
            <div className='checkout-parent' >
                <div>
                    <Shipping/>
                    <Review cart={cart} priceTotal={priceTotal} />
                </div>
                {/* <div className='child' >
                    <Summary priceTotal={priceTotal} cart={cart} />
                </div> */}

                <div style={{width: '300px'}} >
                <h1>Pay</h1>
                <br></br>
                <StripeContainer cart={cart} priceTotal={priceTotal} />

                </div>

            </div>
        </div>

  );
}

export default Checkout;