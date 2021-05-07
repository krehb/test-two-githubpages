import React, {useState}  from 'react';
import { Button} from 'react-bootstrap';
import ReviewCard from './reviewCard';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Review = ({cart}) => {


    const [change, setChange] = useState(true);



    const saveAddressHandler = () => {
        setChange(false)
    }


    const backStyle = {
      color: 'black',
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: 'yellow'
      }
    }


  return (
    <div className='review' >
        <div>
        <h3>Review Order</h3>

        {cart.map( x => <ReviewCard x={x} key={x.id} /> )}

        <Link to='/cart' style={backStyle} >
            <FontAwesomeIcon icon={faArrowLeft} style={backStyle}  />{' '}Back
        </Link>
        </div>
    </div>
  );
}

export default Review;