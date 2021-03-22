import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import RenderSAA from './renderSaa'
import RenderIgG from './renderIgG'
import RenderQuick from './renderQuick'
import {useSpring, animated} from 'react-spring'

export default function SideNavEquine({passingData}){

    const history = useHistory();


    function navigateToPage(e) {
        history.push(`/${e}`);
    }

    const props = useSpring({
        to: { marginBottom: 0},
        from: { marginBottom: -180}
    })



    let renderSubNav = null
    let renderEquineArrow = faAngleRight
    if (passingData.equine) {
        renderSubNav =  (
            <animated.div style={props}>
                <RenderQuick passingData={passingData} />
                <RenderIgG passingData={passingData} />
                <RenderSAA passingData={passingData} />
            </animated.div>
        )

        renderEquineArrow = faAngleDown
    }   else {renderSubNav = null; renderEquineArrow = faAngleRight}
 

  
  return (
    <>
        <h6 className='product-title no-hover equine-nav' style={{marginRight: '10px'}}  onClick={() => navigateToPage('equine')}  >
        <FontAwesomeIcon onClick={() => {passingData.setEquine(!passingData.equine)}} style={{margin: '0px 10px 0px 10px', fontSize: '20px'}} icon={renderEquineArrow} />
            <Link className='side-nav-link' to='/equine' style={{fontSize: '20px'}} >
                Equine
            </Link>
        </h6>
        {renderSubNav}
    </>
  );
};