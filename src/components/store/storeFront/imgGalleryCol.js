import React, { useState, useEffect } from 'react';
import { Card , Row, Col, Button, Image, Container } from 'react-bootstrap';



export default function ImgGalleryCol(data, setCategory, category ) {

    // const onClickHandler = () => {
    //     setCategory(data.data.title);
    //     console.log(data.data.title)
    // }

    console.log(category)

  return (
    <Col className='img-gallery-col'  >
        <div className="bg-dark text-white my-card "  >
            <h2 className='img-gallery-text'  >{data.data.title}</h2>
        </div> 
    </Col>
  );
}

