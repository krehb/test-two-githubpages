import React, {useState}  from 'react';
import { Button} from 'react-bootstrap';
import ReviewCard from './reviewCard';
import {Link} from 'react-router-dom';


const Review = ({cart}) => {


    const [change, setChange] = useState(true);



    const saveAddressHandler = () => {
        setChange(false)
    }




  return (
    <div className='review' >
        <div>
        <h3>Review Order</h3>

        {cart.map( x => <ReviewCard x={x} key={x.id} /> )}

        <Link to='/cart' >
            <Button>Back to Cart</Button>
        </Link>
        </div>
    </div>
  );
}

export default Review;