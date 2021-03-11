import React, {useState, useEffect} from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import dogIcon from '../../assets/img/home/dog-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

export default function SideNavEquine({passingData}){

    const [sticky, setSticky] = useState(false);



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

    let renderIgG = null
    let renderIgGButton = faAngleRight 
    if(passingData.igg){ renderIgG = (
        <>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    Immuno-Chek G vs SNAP
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    How To Run Test
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    Benefits
                    </Link>
                </h6>
        </>
        )
        renderIgGButton = faAngleDown
    }

    let renderSaa = null
    let renderSaaButton = faAngleRight 
    if(passingData.saa){ renderSaa = (
        <>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    Immuno-Chek G vs SNAP
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    How To Run Test
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    Benefits
                    </Link>
                </h6>
        </>
        )
        renderSaaButton = faAngleDown
    }
    let renderEQuick = null
    let renderEQuickButton = faAngleRight 
    if(passingData.equick){ renderEQuick = (
        <>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    Progesterone Cycle
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    Quick P4 vs Lab
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link ' style={{marginRight: '10px'}}  onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    Why Progesterone
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  style={{marginRight: '10px'}} onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    Benefits
                    </Link>
                </h6>
        </>
        )
        renderEQuickButton = faAngleDown
    }

    let renderSubNav = null
    let renderEquineArrow = faAngleRight
    if (passingData.equine) {
        renderSubNav =  (
            <>
            <h6 className='product-title no-hover equine-nav' style={{marginRight: '10px'}}   >
            <FontAwesomeIcon onClick={() => {passingData.setEQuick(!passingData.equick)}} style={{margin: '0px 0px 0px 10px', fontSize: '20px'}} icon={renderEQuickButton} />
            <Link className='side-nav-link' style={subjectIndent} to='/equine-quickp4' > Equine Progesterone</Link>
            </h6>
            {renderEQuick}
            <h6 className='product-title no-hover equine-nav' style={{marginRight: '10px'}}   >
                <FontAwesomeIcon onClick={() => {passingData.setIgg(!passingData.igg)}} style={{margin: '0px 0px 0px 10px', fontSize: '20px'}} icon={renderIgGButton} />
                <Link className='side-nav-link' style={subjectIndent} to='/equine-igg' > IgG</Link>
            </h6>
            {renderIgG}
            <h6 className='product-title no-hover equine-nav' style={{marginRight: '10px'}}    >
                <FontAwesomeIcon onClick={() => {passingData.setSaa(!passingData.saa)}} style={{margin: '0px 0px 0px 10px', fontSize: '20px'}} icon={renderSaaButton} />
                <Link className='side-nav-link' style={subjectIndent} to='/equine-saa' > SAA</Link>
            </h6>
            {renderSaa}
            </>
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