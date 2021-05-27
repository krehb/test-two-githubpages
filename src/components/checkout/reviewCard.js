import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';




const ReviewCard = ({x}) => {


    let units = null


    if (x.title === 'Cube'){
        units = <div>({x.qty}) qty</div>
    }else if (x.icon === 2 || 1){
        units = (<div>({x.test * x.qty}) tests</div>)
    } else if(x.icon === 4) {
        units = (<div>({x.test * x.qty}) tubes </div>)
    }



  return (
    <Row style={{backgroundColor: '#d9f6ff', margin: '10px', borderRadius: '10px'}} key={x.id}>
        <Col xs={3} >
            <Image src={x.img} width='80px' />
        </Col>
        <Col  xs={9}>
            <Row>
                <Col><h5>{x.title}</h5></Col>
            </Row>
            <Row>
                <Col><h6>{x.subtitle}</h6><h6>{units}<span style={{marginLeft: '10px'}} >${x.price*x.qty}.00</span></h6><hr></hr></Col>
            </Row>
        </Col>
    </Row>
  );
}

export default ReviewCard;