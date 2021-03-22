import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {useSpring, animated} from 'react-spring'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

export default function SideNavCanine({ passingData}){

    const [sticky, setSticky] = useState(false);

    const props = useSpring({
        to: { marginBottom: 0},
        from: { marginBottom: -180}
    })

    

    const [screenSizeSmall, setScreenSizeSmall] = useState(false)
    useEffect(() => {
        if(window.innerWidth >= 480){
            setScreenSizeSmall(false)
        } else {
            setScreenSizeSmall(true)
            console.log(window.innerWidth)
        } 
    },[]);





    const history = useHistory();

    const subjectIndent = {
        padding: '10px 0px 10px 10px',
        fontSize: '12px',
        marginRight: '10px'
    }
    const subjectIndent2 = {
        padding: '0px 0px 0px 30px',
        fontSize: '12px'
    }

    function navigateToPage(e) {
        history.push(`/${e}`);
    }

    window.onscroll = () => {
        if(window.pageYOffset >= 130){
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    let renderNavClass = ''
    if(sticky){
        renderNavClass = {position: 'fixed', top: 0}
    } else {
        renderNavClass = {}
    }

    

    

    let renderSubNav = null
    let renderCanineArrow = faAngleRight
    if(passingData.canine){
        renderSubNav = (
            <animated.div style={props}>
            <h6 className='product-title no-hover canine-side-nav'   onClick={() => navigateToPage('canine-progesterone')}  style={subjectIndent}  >
            <FontAwesomeIcon onClick={() => {passingData.setCanine(!passingData.canine)}} style={{margin: '0px 0px 0px 10px', fontSize: '20px'}} icon={renderCanineArrow} />
                <Link className='side-nav-link ' style={subjectIndent} to='/canine-progesterone' >
                    Target Progesterone
                </Link>
            </h6>
            <h6 className='product-title no-hover canine-side-nav'   onClick={() => navigateToPage('canine-relaxin')}  style={subjectIndent} >
            <FontAwesomeIcon onClick={() => {passingData.setCanine(!passingData.canine)}} style={{margin: '0px 0px 0px 10px', fontSize: '20px'}} icon={renderCanineArrow} />
                <Link className='side-nav-link ' style={subjectIndent} to='/canine-relaxin' >
                    Pregnancy Relaxin
                </Link>
            </h6>
            <h6 className='product-title no-hover canine-side-nav'  onClick={() => navigateToPage('canine-quickp4')}  style={subjectIndent} >
            <FontAwesomeIcon onClick={() => {passingData.setCanine(!passingData.canine)}} style={{margin: '0px 0px 0px 10px', fontSize: '20px'}} icon={renderCanineArrow} />
                <Link style={subjectIndent} className='side-nav-link ' to='/canine-quickp4' >
                    Quick P4 Progesterone
                </Link>
            </h6>
            </animated.div>
        )
        renderCanineArrow = faAngleDown
    } else {renderSubNav = null; renderCanineArrow = faAngleRight}
  
  return (
    <>
        <h6 className='product-title no-hover canine-side-nav' style={{marginRight: '10px'}} onClick={() => navigateToPage('canine')}  >
        <FontAwesomeIcon onClick={() => {passingData.setCanine(!passingData.canine)}} style={{margin: '0px 10px 0px 10px', fontSize: '20px'}} icon={renderCanineArrow} />
            <Link className='side-nav-link ' style={{fontSize: '20px'}} to='/canine' >
                Canine
            </Link>
        </h6>
        {renderSubNav}
    </>
  );
};

