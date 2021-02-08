import React, {useState} from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dogIcon from '../../assets/img/home/dog-icon.png';

function SideNav(){

    const [formSelect, setFormSelect] = useState('All');




    let renderList = null
    if (formSelect === 'All'){
        renderList = (
            <>
                <h6 className='product-title no-hover' >
                    <Link className='side-nav-link' to='/canine-progesterone' >
                        Target Canine Progesterone
                    </Link>
                </h6>
                <h6 className='product-title no-hover' >
                    <Link className='side-nav-link' to='/canine-relaxin' >
                        Canine Pregnancy Relaxin
                    </Link>
                </h6>
                <h6 className='product-title no-hover' >
                    <Link className='side-nav-link' to='/canine-quickp4' >
                        Canine Quick P4 Progesterone
                    </Link>
                </h6>
                <h6 className='product-title no-hover' >
                    <Link className='side-nav-link' to='/equine-igg' >
                        Equine IgG
                    </Link>
                </h6>
                <h6 className='product-title no-hover' >
                    <Link className='side-nav-link' to='/equine-saa' >
                        Equine SAA
                    </Link>
                </h6>
                <h6 className='product-title no-hover' >
                    <Link className='side-nav-link' to='/equine-quickp4' >
                        Equine P4 Quick Progesterone
                    </Link>
                </h6>
            </>
        )
    } else if (formSelect === 'Equine'){
        renderList = (
            <>
                <h6 className='product-title no-hover' >
                    <Link className='side-nav-link' to='/equine-igg' >
                        Equine IgG
                    </Link>
                </h6>
                <h6 className='product-title no-hover' >
                    <Link className='side-nav-link' to='/equine-saa' >
                        Equine SAA
                    </Link>
                </h6>
                <h6 className='product-title no-hover' >
                    <Link className='side-nav-link' to='/equine-quickp4' >
                        Equine P4 Quick Progesterone
                    </Link>
                </h6>
            </>
        )
    } else {
        renderList = (
            <>
                <h6 className='product-title no-hover' >
                    <Link className='side-nav-link' to='/canine-progesterone' >
                        Target Canine Progesterone
                    </Link>
                </h6>
                <h6 className='product-title no-hover' >
                    <Link className='side-nav-link' to='/canine-relaxin' >
                        Canine Pregnancy Relaxin
                    </Link>
                </h6>
                <h6 className='product-title no-hover' >
                    <Link className='side-nav-link' to='/canine-quickp4' >
                        Canine Quick P4 Progesterone
                    </Link>
                </h6>
            </>
        )
    }

  
  return (
    <div className='product-list pages' >
        <div className='side-nav' >
            <h6 className='list-title' >Jump To</h6>
            <Form.Control onChange={(e) => setFormSelect(e.target.value)}  as="select">
            <option>All</option>
            <option>Canine</option>
            <option>Equine</option>
            </Form.Control>
            {renderList}
        </div>
    </div>
  );
};

export default SideNav;