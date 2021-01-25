import React from 'react';



const ImgGalleryCol = ({data, setCategoryHandler  }) => {



  let imgClasses = `my-card ${data.class}`

  return (
    <div onClick={() => setCategoryHandler(data)} className='img-gallery-col'  >
        <div className={imgClasses}  >
            <h2 className='img-gallery-text '  >{data.name}</h2>
        </div> 
    </div>
  );
}

export default ImgGalleryCol;