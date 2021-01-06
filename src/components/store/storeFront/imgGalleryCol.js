import React from 'react';



const ImgGalleryCol = ({data, setCategoryHandler  }) => {


  return (
    <div onClick={() => setCategoryHandler(data)} className='img-gallery-col'  >
        <div className="bg-dark text-white my-card "  >
            <h2 className='img-gallery-text'  >{data.name}</h2>
        </div> 
    </div>
  );
}

export default ImgGalleryCol;