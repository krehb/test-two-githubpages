import React, {useEffect} from 'react';
import { Link, useHistory, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {useSpring, animated} from 'react-spring'


export default function RenderQuick({passingData}){

    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        window.scroll(0, 0);
    },[location.pathname]);


    const props = useSpring({
        to: {
            opacity: 1, 
            marginBottom: 0,
            
        },
        from: {
            opacity: 0, 
            marginBottom: -180
        }
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


    let renderEQuick = null
    let renderEQuickButton = faAngleRight 
    if(passingData.equick){ renderEQuick = (
        <animated.div style={props}>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => subhandler(600)}  >
                    <Link className='side-nav-link' style={subjectIndent2}  >
                    Progesterone Cycle
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => subhandler(1800)}  >
                    <Link className='side-nav-link' style={subjectIndent2}  >
                    Quick P4 vs Lab
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link ' style={{marginRight: '10px'}}  onClick={() => subhandler(3300)}  >
                    <Link className='side-nav-link' style={subjectIndent2}  >
                    Why Progesterone
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => subhandler(4000)}  >
                    <Link className='side-nav-link' style={subjectIndent2}  >
                    Benefits
                    </Link>
                </h6>
        </animated.div>
        )
        passingData.setSaa(false)
        passingData.setIgg(false)
        renderEQuickButton = faAngleDown
    }
    

  
  return (
    <>
            <h6 className='product-title no-hover equine-nav' style={{marginRight: '10px'}} onClick={() => {passingData.setEQuick(!passingData.equick); navigateToPage('equine-quickp4')}}   >
            <FontAwesomeIcon onClick={() => {passingData.setEQuick(!passingData.equick)}} style={{margin: '0px 0px 0px 10px', fontSize: '20px'}} icon={renderEQuickButton} />
            <Link className='side-nav-link' style={subjectIndent} to='/equine-quickp4' > Equine Progesterone</Link>
            </h6>
            {renderEQuick}
    </>
  );
};