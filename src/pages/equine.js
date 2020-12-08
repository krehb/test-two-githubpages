import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';




export default function Equine(products) {






  return (
    <div className='store' >
        <Container  >
            <Row>
                <Col>
                  <Image src="https://images.pexels.com/photos/2845173/pexels-photo-2845173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" fluid />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

