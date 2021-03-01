import React, {useState, useEffect} from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import dogIcon from '../../assets/img/home/dog-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

function SideNav(){

    const [sticky, setSticky] = useState(false);

    const [formSelect, setFormSelect] = useState('All');
    const [igg, setIgg] = useState(false);
    const [saa, setSaa] = useState(false);
    const [equick, setEQuick] = useState(false);

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
    if(igg){ renderIgG = (
        <>
                <h6 className='product-title no-hover sub-nav-link'  onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    Immuno-Chek G vs SNAP
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    How To Run Test
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  onClick={() => navigateToPage('equine-igg')}  >
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
    if(saa){ renderSaa = (
        <>
                <h6 className='product-title no-hover sub-nav-link'  onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    Immuno-Chek G vs SNAP
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    How To Run Test
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  onClick={() => navigateToPage('equine-igg')}  >
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
    if(equick){ renderEQuick = (
        <>
                <h6 className='product-title no-hover sub-nav-link'  onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    Progesterone Cycle
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    Quick P4 vs Lab
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link '  onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    Why Progesterone
                    </Link>
                </h6>
                <h6 className='product-title no-hover sub-nav-link'  onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent2} to='/equine-igg' >
                    Benefits
                    </Link>
                </h6>
        </>
        )
        renderEQuickButton = faAngleDown
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

                <h6 className='product-title no-hover other-side-nav' onClick={() => navigateToPage('')} style={{marginTop: '10px'}} >
                    <Link className='side-nav-link ' style={{fontSize: '26px'}} to='/canine' >
                        Home
                    </Link>
                </h6>
                <h6 className='product-title no-hover canine-side-nav' onClick={() => navigateToPage('canine')}  >
                    <Link className='side-nav-link ' style={{fontSize: '26px'}} to='/canine' >
                        Canine
                    </Link>
                </h6>
                <h6 className='product-title no-hover canine-side-nav'  onClick={() => navigateToPage('canine-progesterone')}  style={subjectIndent}  >
                    <Link className='side-nav-link ' to='/canine-progesterone' >
                        Target Progesterone
                    </Link>
                </h6>
                <h6 className='product-title no-hover canine-side-nav'  onClick={() => navigateToPage('canine-relaxin')}  style={subjectIndent} >
                    <Link className='side-nav-link ' to='/canine-relaxin' >
                        Pregnancy Relaxin
                    </Link>
                </h6>
                <h6 className='product-title no-hover canine-side-nav'  onClick={() => navigateToPage('canine-quickp4')}  style={subjectIndent} >
                    <Link className='side-nav-link ' to='/canine-quickp4' >
                        Quick P4 Progesterone
                    </Link>
                </h6>
                <h6 className='product-title no-hover equine-nav'  onClick={() => navigateToPage('equine')}  >
                    <Link className='side-nav-link' to='/equine' style={{fontSize: '26px'}} >
                        Equine
                    </Link>
                </h6>
                <h6 className='product-title no-hover equine-nav'   >
                    <FontAwesomeIcon onClick={() => {setEQuick(!equick)}} style={{margin: '0px 0px 0px 10px', fontSize: '20px'}} icon={renderEQuickButton} />
                    <Link className='side-nav-link' style={subjectIndent, {fontSize: '14px', padding: '0px 0px 0px 5px'}} to='/equine-quickp4' > Equine Progesterone</Link>
                </h6>
                {renderEQuick}
                <h6 className='product-title no-hover equine-nav'   >
                    <FontAwesomeIcon onClick={() => {setIgg(!igg)}} style={{margin: '0px 0px 0px 10px', fontSize: '20px'}} icon={renderIgGButton} />
                    <Link className='side-nav-link' style={subjectIndent} to='/equine-igg' > IgG</Link>
                </h6>
                {renderIgG}
                <h6 className='product-title no-hover equine-nav'    >
                    <FontAwesomeIcon onClick={() => {setSaa(!saa)}} style={{margin: '0px 0px 0px 10px', fontSize: '20px'}} icon={renderSaaButton} />
                    <Link className='side-nav-link' style={subjectIndent} to='/equine-saa' > SAA</Link>
                </h6>
                {renderSaa}
                
                <h6 className='product-title no-hover  other-side-nav' onClick={() => navigateToPage('store')} style={{marginTop: '10px'}} >
                    <Link className='side-nav-link ' style={{fontSize: '26px'}} to='/canine' >
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

export default SideNav;