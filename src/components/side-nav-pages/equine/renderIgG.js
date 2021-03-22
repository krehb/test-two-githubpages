import React, {useEffect} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {useSpring, animated} from 'react-spring'


export default function RenderIgG({passingData}){

    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        window.scroll(0, 0);
    },[location.pathname]);

    const props = useSpring({
        to: {opacity: 1, marginBottom: 0},
        from: {opacity: 0, marginBottom: -20}
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


    let renderIgG = null
    let renderIgGButton = faAngleRight 
    if(passingData.igg){ renderIgG = (
        <animated.div style={props}>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => subhandler(600)}  >
                    <Link className='side-nav-link' style={subjectIndent2}  >
                    Immuno-Chek G vs SNAP
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => subhandler(1900)}  >
                    <Link className='side-nav-link' style={subjectIndent2}  >
                    How To Run Test
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => subhandler(3300)}  >
                    <Link className='side-nav-link' style={subjectIndent2}  >
                    Benefits
                    </Link>
                </h6>
        </animated.div>
        )
        passingData.setEQuick(false)
        passingData.setSaa(false)
        renderIgGButton = faAngleDown
    }
    

  
  return (
    <>
            <h6 className='product-title no-hover equine-nav' style={{marginRight: '10px'}} onClick={() => {passingData.setIgg(!passingData.igg); navigateToPage('equine-igg')}} >
                <FontAwesomeIcon onClick={() => {passingData.setIgg(!passingData.igg); console.log('clicked',passingData.igg)}} style={{margin: '0px 0px 0px 10px', fontSize: '20px'}} icon={renderIgGButton} />
                <Link className='side-nav-link' style={subjectIndent} to='/equine-igg' > IgG</Link>
            </h6>
            {renderIgG}
    </>
  );
};