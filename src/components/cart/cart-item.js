import React  from 'react';
import { Col, Row, Image } from 'react-bootstrap';



const CartItem = ({item,removeItemHandler, setCart, cart}) => {


    const qtyChangeHandler = (itemSelected) => {
        let newDouble = {
            title: item.title,
            subtitle: item.subtitle,
            qty: item.qty + 1,
            img: item.img,
            price: item.price,
            test: item.test,
            id: item.id
          }
        setCart(cart.filter(item => item.id !== itemSelected.id))
        setCart(cart => [...cart, newDouble ] );
    }

    const qtyChangeMinHandler = (itemSelected) => {

        if(!(item.qty === 1) ){
            let newDouble = {
                title: item.title,
                subtitle: item.subtitle,
                qty: item.qty - 1,
                img: item.img,
                price: item.price,
                test: item.test,
                id: item.id
              }
            setCart(cart.filter(item => item.id !== itemSelected.id))
            setCart(cart => [...cart, newDouble ] );
        }
    }

    let units = null
    if (item.icon === 4){
        units = <h6 className='cart-title'>({item.qty * item.test}) tubes</h6>
    } else if (item.title === 'Cube'){
        units = <h6 className='cart-title'>{item.qty} qty</h6>
    } else if (item.icon === 1 || 2 || 5){
        units = <h6 className='cart-title'>({item.qty * item.test}) tests</h6>
    } else {
        units = null
    }


  return (
    <tr>
        <td>
            <Image className='cart-img' src={item.img}  />
        </td>
        <td>
            <Row>
            <Col xs={10} >
                <Row>
                    <Col>
                        <h6 className='cart-title' >{item.title}</h6>
                    </Col> 
                </Row>
                <Row>
                    <Col>
                        <h6 className='cart-title'>{item.subtitle}</h6>
                    </Col> 
                </Row>
                <Row>
                    <Col>
                        {units}
                    </Col> 
                </Row>
            </Col>
            <Col xs={2}>
                <span className='remove-item' onClick={() => removeItemHandler(item.id)} > X</span>
            </Col>
            </Row>
        </td>
        <td >
            <div className='qty-change' >
            <span onClick={() => qtyChangeHandler(item)}> +</span><span> ({item.qty}) </span><span onClick={() => qtyChangeMinHandler(item)} >- </span>
            </div>
        </td>
        <td>
            ${item.price * item.qty}.00
        </td>
    </tr>
  );
}

export default CartItem;