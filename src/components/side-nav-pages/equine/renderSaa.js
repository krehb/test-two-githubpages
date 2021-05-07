import React, {useEffect} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {useSpring, animated} from 'react-spring'

export default function RenderSAA({passingData}){

    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    },[location.pathname]);

    const props = useSpring({
        to: {opacity: 1, marginBottom: 0},
        from: {opacity: 0, marginBottom: -180}
    })

    const subjectIndent = {
        padding: '10px 0px 10px 10px',
        fontSize: '12px',
    }
    const subjectIndent2 = {
        padding: '0px 0px 0px 30px',
        fontSize: '12px'
    }

    function navigateToPage(e) {
        history.push(`/${e}`);
    }

    const subhandler = (e) => {
        window.scroll(0, e);
    }


    let renderSaa = null
    let renderSaaButton = faAngleRight 
    if(passingData.saa){ renderSaa = (
        <animated.div style={props}>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => subhandler(600)}  >
                    <Link className='side-nav-link' style={subjectIndent2}  >
                    Science Behind SAA
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => subhandler(1300)}  >
                    <Link className='side-nav-link' style={subjectIndent2}  >
                    Case Studies
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => subhandler(2150)}  >
                    <Link className='side-nav-link' style={subjectIndent2}  >
                    Uses
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => subhandler(3600)}  >
                    <Link className='side-nav-link' style={subjectIndent2}  >
                    Benefits
                    </Link>
                </h6>
        </animated.div>
        )
        passingData.setEQuick(false)
        passingData.setIgg(false)
        renderSaaButton = faAngleDown
    }
    

  
  return (
    <>
            <h6 className='product-title no-hover equine-nav' style={{marginRight: '10px'}} onClick={() => {passingData.setSaa(!passingData.saa); navigateToPage('equine-saa');  window.scroll(0, 0);}} >
                <FontAwesomeIcon onClick={() => {passingData.setSaa(!passingData.saa); console.log(passingData.saa, 'saa')}} style={{margin: '0px 0px 0px 10px', fontSize: '20px'}} icon={renderSaaButton} />
                <Link className='side-nav-link' style={subjectIndent} to='/equine-saa' > SAA</Link>
            </h6>
            {renderSaa}
    </>
  );
};