import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const ImgGalleryCol = ({data, setCategoryHandler  }) => {

  let imgClasses = `my-card ${data.class}`

  let hoverColorClass = `img-gallery-text text-${data.class} `

  let history = useHistory();

  const swichtHomeHandler =(e)=>{
      history.push(`${e}`)
  }

  return (
    <div onClick={() => setCategoryHandler(data)} className='img-gallery-col'  >
        <div className={imgClasses} onClick={() => swichtHomeHandler(data.pathname)} >
            <h6 className={hoverColorClass}>{data.name}</h6>
        </div> 
    </div>
  );
}

export default ImgGalleryCol;