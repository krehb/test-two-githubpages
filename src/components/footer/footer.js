import React, {useState, useEffect} from 'react';
import { Container, Col, Row, ListGroup} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './footer.css';
 
function Footer({category}) {

    const [sticky, setSticky] = useState(false);

    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUrl, setCurrentUrl] = useState('');

    let location = useLocation();

    const [screenWidthSmall, setScreenWidthSmall] = useState(false)
    useEffect(() => {
        if(window.innerWidth >= 480){
            setScreenWidthSmall(false)
        } else {
            setScreenWidthSmall(true)
        } 
    },[]);

    let renderFooterStore = null
    if(screenWidthSmall){
        renderFooterStore = ''
    } else {
        renderFooterStore = '/store'
    }


    useEffect(() => {
        setCurrentUrl(location.pathname)
    },[category, location]);

    //for positioning of the footer to be always at the bottom of the page
    let renderStyleFooter = null

    if (currentUrl === {renderStyleFooter} || currentUrl === '/success'  || currentUrl === '/cart'|| currentUrl === '/checkout'){
        renderStyleFooter = {position: 'absolute', width: '100%', bottom: 0};
    }  else {
        renderStyleFooter = {position: 'static', width: '100%', bottom: 0}
    }


    if (!(category === 'none') && !(category === 'Canine Pregnancy Relaxin')){
        renderStyleFooter = {position: 'static', width: '100%'};
    }

    return (
        <footer  className="footer mt-auto py-3" style={renderStyleFooter}>
            <div className='footer-items' >
                <div className='item'><span className="text-footer">This site and all contents Copyright&#169; 2021 TargetVet & Website By <span><a className='input-llc' href='https://www.inputllc.net/' target='blank' >Input LLC</a></span></span></div>                     
            </div>
        </footer>
    )
}

export default Footer;