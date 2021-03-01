import React, {useEffect, useState} from 'react';
import {  Button, Table, Image } from 'react-bootstrap';
import app from '../../config/base';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase'


export default function OrderHistory({order, index, setCart}) {

    const db = firebase.firestore();

    const [showOrder, setShowOrder] = useState(false);
    const [renderDate, setRenderDate] = useState(null);
    const [priceTotal, setPriceTotal] = useState(0);

    useEffect(() => {
        let date = order.timeStamp
        const CalendarDate = date.split(' ');
        setRenderDate(CalendarDate[0])
        totalPriceHandler()
    },[]);

    const totalPriceHandler = () => {
        const newGroup = [0]
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        order.order.forEach(item => {
            newGroup.push(item.price * item.qty)
        });
        setPriceTotal(newGroup.reduce(reducer))
    }

    let renderDetails = null
    if( showOrder) {
        renderDetails = (
            <div>
                <Table className='table-details' striped >
                    <thead>
                    <tr>
                        <th></th>
                        <th>Item(s)</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {order.order.map((item, index) => {
                        return (
                            <tr key={index} >
                                <td><Image className='order-img' src={item.img}  /></td>
                                <td><h6>{item.title}</h6><h6>{item.subtitle}</h6><h6>{item.qty * item.test} tests</h6></td>
                                <td>{item.qty}</td>
                                <td>${item.price * item.qty}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td></td>
                        <td></td>
                        <td>total</td>
                        <td>${priceTotal}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    } else { renderDetails = null}

    let history = useHistory();
    function goToCheckout() {
      history.push("/checkout");
    }

    const buyAgainHandler = () => {
        console.log('buy again')
        console.log(order.order)
        setCart(order.order)
        goToCheckout();
    }
    


  return (
    <>  
    <div className='order-history' >
        <div className='order-cart' >
            <h6 className='title' >Order <span className='date' >{order.timeStamp}</span></h6>
        </div>
        <div className='order-cart' >
            <span className='details' onClick={() => setShowOrder(!showOrder)} >view details ({order.order.length}) </span>
            <Button onClick={buyAgainHandler} >Buy Again</Button>
        </div>
    </div>
    {renderDetails}
    </>
  );
}

