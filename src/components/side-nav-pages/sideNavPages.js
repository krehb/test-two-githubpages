import React, {useState, useEffect} from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import dogIcon from '../../assets/img/home/dog-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import SideNavEquine from './equine/equine';
import SideNavCanine from './canine/canine';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

export default function SideNav({passingData}){

    let location = useLocation()
    const [sticky, setSticky] = useState(true);
    const [screenSizeSmall, setScreenSizeSmall] = useState(false)
    const [currentUrl, setCurrentUrl] = useState('');
    useEffect(() => {

        if(window.innerWidth >= 480){
            setScreenSizeSmall(false)
        } else {
            setScreenSizeSmall(true)
        } 


        setCurrentUrl(location.pathname)

        if(location.pathname === '/canine'){
            passingData.setCanine(true)
            passingData.setEquine(false)
            passingData.setIgg(false)
            passingData.setEQuick(false)
            passingData.setSaa(false)
        } else if(location.pathname === '/equine'){
            passingData.setEquine(true)
            passingData.setCanine(false)
           
        } else if(location.pathname === '/equine-igg'){
            passingData.setEquine(true)
            passingData.setCanine(false)
            passingData.setIgg(true)
           
        }
        else if(location.pathname === '/equine-quickp4'){
            passingData.setEquine(true)
            passingData.setCanine(false)
            passingData.setEQuick(true)
           
        }else if(location.pathname === '/equine-saa'){
            passingData.setEquine(true)
            passingData.setCanine(false)
            passingData.setEQuick(false)
            passingData.setSaa(true)  
        }else if(location.pathname === '/'){
            passingData.setCanine(false)
            passingData.setEquine(false)
            passingData.setIgg(false)
            passingData.setEQuick(false)
            passingData.setSaa(false)
        }

    },[]);


    window.onscroll = () => {
        if(window.pageYOffset >= 130){
            setSticky(true)
        } else {
            setSticky(false)
        }
    }



    const history = useHistory();

    const subjectIndent = {
        padding: '10px 0px 10px 10px',
    }
    const subjectIndent2 = {
        padding: '0px 0px 0px 30px',
        fontSize: '12px'
    }

    function navigateToPage(e) {
        history.push(`/${e}`);
    }



    let renderNavClass = ''
    if(sticky){
        renderNavClass = {
            position: 'fixed', 
            top: '160px', 
            // overflowY: 'scroll',
        }
    } else {
        renderNavClass = {}
    }


    //rendering mobile screen navbar version
    let renderSideNav = null
    if(screenSizeSmall){
        renderSideNav = (
            <div style={{display:'flex', flexDirection: 'column'}} >
                <ul className='mobile-sidenav' >
                    <li>
                    <Link className='side-nav-link canine ' to='/canine-progesterone' >
                        Target Progesterone
                    </Link>
                    </li>
                    <li>
                    <Link className='side-nav-link canine ' to='/canine-relaxin' >
                        Pregnancy Relaxin
                    </Link>
                    </li>
                    <li>
                    <Link className='side-nav-link canine ' to='/canine-quickp4' >
                        Quick P4 Progesterone
                    </Link>
                    </li>
                    <li>
                    <Link className='side-nav-link equine'  to='/equine-quickp4' > Equine Progesterone</Link>
                    </li>
                    <li>
                    <Link className='side-nav-link equine' to='/equine-igg' > IgG</Link>
                    </li>
                    <li>
                    <Link className='side-nav-link equine' to='/equine-saa' > SAA</Link>
                    </li>
                </ul>
            </div>
        )
    } else {
        renderSideNav = (
            <div className='product-list pages' >
        <div style={{width: '200px', marginRight: '20px'}} ></div>
        <div className='side-nav' style={renderNavClass} >

                <h6 className='product-title no-hover other-side-nav' onClick={() => navigateToPage('')} style={{marginTop: '10px', marginRight: '10px'}} >
                    <Link className='side-nav-link ' style={{fontSize: '20px'}} to='/canine' >
                        Home
                    </Link>
                </h6>
                <SideNavCanine passingData={passingData} />
                <SideNavEquine passingData={passingData} />
                <h6 className='product-title no-hover  other-side-nav' onClick={() => navigateToPage('store/gallery')} style={{marginTop: '10px', marginRight: '10px'}} >
                    <Link className='side-nav-link ' style={{fontSize: '20px'}} to='/canine' >
                        Store
                    </Link>
                </h6>
        </div>
    </div>
        )
    }

  
  return (
    <>
    {renderSideNav}
    </>
  );
};