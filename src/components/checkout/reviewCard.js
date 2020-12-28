import React, {useState}  from 'react';
import { Container, Col, Row, Image, Card } from 'react-bootstrap';




const ReviewCard = ({x}) => {


    let units = null

    if (x.title === 'Blood Collection'){
        units = 'tubes'
    } else {
        units = 'tests'
    }




  return (
    <Row key={x.id}>
        <Col xs={3} >
            <Image src={x.img} width='80px' />
        </Col>
        <Col  xs={9}>
            <Row>
                <Col><h5>{x.title}</h5></Col>
            </Row>
            <Row>
                <Col><h6>{x.subtitle}</h6><h6> ({x.test * x.qty}) {units}</h6><hr></hr></Col>
            </Row>
        </Col>
    </Row>
  );
}

export default ReviewCard;