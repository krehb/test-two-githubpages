import React  from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';



const CartItem = (item) => {


  return (
    <tr>
        <td>
            {item.item.title}
        </td>
        <td>
            {item.item.subtitle}
        </td>
        <td>
            {item.item.test}
        </td>
        <td>
            ${item.item.price}.00
        </td>
    </tr>
  );
}

export default CartItem;