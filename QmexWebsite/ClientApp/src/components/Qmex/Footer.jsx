import React from 'react';
import { Col } from 'react-bootstrap';
import Columns from '../Common/Columns';
import NavList from '../Common/NavList';

const Footer = React.memo((props) => {

    return (
        <footer>
            <Columns className='pt-5' >
                <Col xs={12} lg={3} className="d-flex align-items-center justify-content-center mb-5">
                    <img src="/img/logotrano.png" width="100%" className="footer_logo mx-auto " alt="footer logo"/>
                </Col>

                <Col xs={6} lg={3} className="justify-content-center align-items-center d-flex">
                    <NavList items={props.navitemsLeft} className="footer_links" />
                </Col>

                <Col xs={6} lg={3} className="justify-content-center align-items-center d-flex">
                    <NavList items={props.navitemsMiddle} className="footer_links " />
                </Col>

                <Col xs={12} lg={3} className='d-flex align-items-center justify-content-center'>
                    <div className='footer_social'>
                        <a href='https://www.linkedin.com' target='_blank' rel="noopener noreferrer"><img src="\img\linkedin.png" alt='linkedin' /></a>
                        <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer"><img src="\img\instagram.png" alt='instagram' /></a>
                        <a href='https://www.facebook.com' target='_blank' rel="noopener noreferrer"><img src="\img\facebook.png" alt='facebook' /></a>
                    </div>
                </Col>

            </Columns>
            <div id='copyright'>
                <p> All rights reserved by Qmex Technology B.V.. copyright &copy; 2021</p>
                <span className="mx-2 bold"> || </span>
                <a href="/privacy" target='_blank' > <h6> Privacy </h6> </a> 
            </div>

        </footer>
    );
});


export default Footer;