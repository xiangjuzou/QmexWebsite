import React from 'react';
import { Col } from 'react-bootstrap';
import Columns from '../Common/Columns';
import NavList from '../Common/NavList';

const Footer = React.memo((props) => {

    return (
        <footer style={{ background: 'rgba(240,240,240,0.8)' }}>
            <Columns>

                <Col xs={12} lg={3} className="d-flex align-items-center">
                    <img src='/img/logotran.png' className="footer_logo mx-auto" />
                </Col>

                <Col sm={6} xs={12} lg={3} className="justify-content-center d-flex pt-4 pt-sm-0">
                    <NavList items={props.navitemsLeft} className="footer_links" />
                </Col>

                <Col sm={6} xs={12} lg={3} className="justify-content-center d-flex pb-4 pb-sm-0">
                    <NavList items={props.navitemsMiddle} className="footer_links" />
                </Col>

                <Col xs={12} lg={3} className='d-flex align-items-center'>
                    <div className='footer_social mx-auto'>
                        <a href='https://www.linkedin.com' target='_blank'><img src="\img\linkedin.png" alt='linkedin' /></a>
                        <a href='https://www.instagram.com' target='_blank'><img src="\img\instagram.png" alt='instagram' /></a>
                        <a href='https://www.whatsapp.com' target='_blank'><img src="\img\whatsapp.png" alt='whatsapp' /></a>
                    </div>
                </Col>

            </Columns>

            <p> All rights reserved by Qmex. copyright &copy; 2021</p>

        </footer>
    );
});


export default Footer;