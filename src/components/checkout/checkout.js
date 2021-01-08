import React  from 'react';
import Review from './review';
import Summary from './summary';
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Checkout = ({cart, priceTotal }) => {



  return (
        <div>
            <div className='checkout-parent' >
                <div>
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