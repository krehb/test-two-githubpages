import React, {useState} from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import dogIcon from '../../assets/img/home/dog-icon.png';

function SideNav(){

    const [formSelect, setFormSelect] = useState('All');
    const history = useHistory();

    const subjectIndent = {
        padding: '10px 0px 10px 20px',
    }

    function navigateToPage(e) {
        history.push(`/${e}`);
    }

    // let renderList = null
    // if (formSelect === 'All'){
    //     renderList = (
    //         <>
    //             <h6 className='product-title no-hover canine' style={{marginTop: '10px'}} >
    //                 <Link className='side-nav-link ' style={{fontSize: '26px'}} to='/canine' >
    //                     Canine
    //                 </Link>
    //             </h6>
    //             <h6 className='product-title no-hover canine' style={subjectIndent}  >
    //                 <Link className='side-nav-link ' to='/canine-progesterone' >
    //                     Target Progesterone
    //                 </Link>
    //             </h6>
    //             <h6 className='product-title no-hover canine' style={subjectIndent} >
    //                 <Link className='side-nav-link ' to='/canine-relaxin' >
    //                     Pregnancy Relaxin
    //                 </Link>
    //             </h6>
    //             <h6 className='product-title no-hover canine' style={subjectIndent} >
    //                 <Link className='side-nav-link ' to='/canine-quickp4' >
    //                     Quick P4 Progesterone
    //                 </Link>
    //             </h6>
    //             <h6 className='product-title no-hover equine-nav' >
    //                 <Link className='side-nav-link' to='/equine' style={{fontSize: '26px'}} >
    //                     Equine
    //                 </Link>
    //             </h6>
    //             <h6 className='product-title no-hover equine-nav' >
    //                 <Link className='side-nav-link' style={subjectIndent} to='/equine-igg' >
    //                     IgG
    //                 </Link>
    //             </h6>
    //             <h6 className='product-title no-hover equine-nav' >
    //                 <Link className='side-nav-link' style={subjectIndent} to='/equine-saa' >
    //                     SAA
    //                 </Link>
    //             </h6>
    //             <h6 className='product-title no-hover equine-nav' >
    //                 <Link className='side-nav-link' style={subjectIndent} to='/equine-quickp4' >
    //                     Quick P4 Progesterone
    //                 </Link>
    //             </h6>
    //         </>
    //     )
    // } else if (formSelect === 'Equine'){
    //     renderList = (
    //         <>
    //             <h6 className='product-title no-hover' >
    //                 <Link className='side-nav-link' to='/equine-igg' >
    //                     Equine IgG
    //                 </Link>
    //             </h6>
    //             <h6 className='product-title no-hover' >
    //                 <Link className='side-nav-link' to='/equine-saa' >
    //                     Equine SAA
    //                 </Link>
    //             </h6>
    //             <h6 className='product-title no-hover' >
    //                 <Link className='side-nav-link' to='/equine-quickp4' >
    //                     Equine P4 Quick Progesterone
    //                 </Link>
    //             </h6>
    //         </>
    //     )
    // } else {
    //     renderList = (
    //         <>
    //             <h6 className='product-title no-hover' >
    //                 <Link className='side-nav-link' to='/canine-progesterone' >
    //                     Target Canine Progesterone
    //                 </Link>
    //             </h6>
    //             <h6 className='product-title no-hover' >
    //                 <Link className='side-nav-link' to='/canine-relaxin' >
    //                     Canine Pregnancy Relaxin
    //                 </Link>
    //             </h6>
    //             <h6 className='product-title no-hover' >
    //                 <Link className='side-nav-link' to='/canine-quickp4' >
    //                     Canine Quick P4 Progesterone
    //                 </Link>
    //             </h6>
    //         </>
    //     )
    // }

  
  return (
    <div className='product-list pages' >
        <div className='side-nav' >
            {/* <h6 className='list-title' >Jump To</h6>
            <Form.Control onChange={(e) => setFormSelect(e.target.value)}  as="select">
            <option>All</option>
            <option>Canine</option>
            <option>Equine</option>
            </Form.Control>
            {renderList} */}

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
                <h6 className='product-title no-hover equine-nav'  onClick={() => navigateToPage('equine-igg')}  >
                    <Link className='side-nav-link' style={subjectIndent} to='/equine-igg' >
                        IgG
                    </Link>
                </h6>
                <h6 className='product-title no-hover equine-nav'  onClick={() => navigateToPage('equine-saa')}  >
                    <Link className='side-nav-link' style={subjectIndent} to='/equine-saa' >
                        SAA
                    </Link>
                </h6>
                <h6 className='product-title no-hover equine-nav' onClick={() => navigateToPage('equine-quickp4')}  >
                    <Link className='side-nav-link' style={subjectIndent} to='/equine-quickp4' >
                        Quick P4 Progesterone
                    </Link>
                </h6>
                <h6 className='product-title no-hover  other-side-nav' onClick={() => navigateToPage('store')} style={{marginTop: '10px'}} >
                    <Link className='side-nav-link ' style={{fontSize: '26px'}} to='/canine' >
                        Store
                    </Link>
                </h6>

        </div>
    </div>
  );
};

export default SideNav;