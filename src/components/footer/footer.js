import React from 'react';
import { Container, Col, Row, ListGroup} from 'react-bootstrap';
import './footer.css';

function Footer() {
    return (
        <footer className="footer mt-auto py-3">
            <div className='footer-items' >
                <div className='item'><span className="text-footer">This site and all contents Copyright&#169; 2021 TargetVet & Website By <span><a className='input-llc' href='https://www.inputllc.net/' target='blank' >Input LLC</a></span></span></div>                     
            </div>
        </footer>
    )
}

export default Footer;