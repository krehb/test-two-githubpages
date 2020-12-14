import React from 'react';
import { Col } from 'react-bootstrap';



const ImgGalleryCol = ({data, setCategoryHandler  }) => {


  return (
    <Col onClick={() => setCategoryHandler(data)} className='img-gallery-col'  >
        <div className="bg-dark text-white my-card "  >
            <h2 className='img-gallery-text'  >{data.name}</h2>
        </div> 
    </Col>
  );
}

export default ImgGalleryCol;