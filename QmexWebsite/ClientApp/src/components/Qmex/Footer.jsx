import React from 'react';
import { Col } from 'react-bootstrap';
import Columns from '../Common/Columns';
import NavList from '../Common/NavList';

const Footer = React.memo((props) => {

    return (
        <footer style={{ background: '#f4f4f4' }}>
            <Columns >
                <Col xs={12} lg={3} className="d-flex align-items-center justify-content-center ">
                    <img src='/img/logotrano.png' width="300" className="footer_logo " alt="footer logo"  />
                </Col>

                <Col sm={6} xs={12} lg={3} className="justify-content-center align-items-center d-flex ">
                    <NavList items={props.navitemsLeft} className="footer_links" />
                </Col>

                <Col sm={6} xs={12} lg={3} className="justify-content-center align-items-center d-flex md-sm-4">
                    <NavList items={props.navitemsMiddle} className="footer_links" />
                </Col>

                <Col xs={12} lg={3} className='d-flex align-items-center justify-content-center mt-sm-4'>
                    <div className='footer_social'>
                        <a href='https://www.linkedin.com' target='_blank' rel="noopener noreferrer"><img src="\img\linkedin.png" alt='linkedin' /></a>
                        <a href='https://www.whatsapp.com' target='_blank' rel="noopener noreferrer"><img src="\img\whatsapp2.png" alt='whatsapp' /></a>
                        <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer"><img src="\img\instagram.png" alt='instagram' /></a>
                    </div>
                </Col>

            </Columns>

            <p> All rights reserved by Qmex. copyright &copy; 2021</p>

        </footer>
    );
});


export default Footer;