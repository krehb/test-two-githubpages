import React, {useState}  from 'react';
import Review from './review';
import Summary from './summary';
import Shipping from './shippingAddress';
import StripeContainer from './pay-stripe/StripeContainer'
import './pay-stripe/CardStyle.css'
import Note from './note'

const Checkout = ({cart, priceTotal }) => {

    const [note, setNote] = useState('')
  



  return (
        <div>
            <div className='checkout-parent' >
                <div>
                    <Shipping/>
                    <Note note={note} setNote={setNote} />
                    <Review cart={cart} priceTotal={priceTotal} />
                </div>

                <div className='payment-stripe'  >
                
                <h1>Pay</h1>
                <br></br>
                <StripeContainer  note={note} cart={cart} priceTotal={priceTotal} />

                </div>

            </div>
        </div>

  );
}

export default Checkout;