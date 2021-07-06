import React from 'react';
import {Col} from 'react-bootstrap';
import Columns from '../Common/Columns';
import NavList from '../Common/NavList';
import { BiPhoneCall} from 'react-icons/bi';
import { AiTwotoneMail } from 'react-icons/ai';
import { FaRegAddressBook  } from 'react-icons/fa'
import { FiArrowRightCircle } from 'react-icons/fi';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import { RiLinkedinBoxLine} from 'react-icons/ri';



const Footer = React.memo((props) => {
    const phone = <BiPhoneCall className="mr-3" size="1.4em" />;
    const Email = <AiTwotoneMail className="mr-4" size="1.3em" />;
    const address = <FaRegAddressBook className="mr-3" size="1.4em" />;
    const arrow = <FiArrowRightCircle className="ml-3" size="1.5em" />;
  

    return (
        <footer>
            <div>
               
                <div style={{ width: '70%' }} className="mx-auto">
                <Columns fluid >
                    
                        <Col xs={12} lg={3} className="d-flex  flex-column justify-content-center">
                            <div> <img src="/img/logoFooter.png" width="260px" height="auto" className="footer_logo my-3 " alt="logo" /></div>
                       
                            <div className="my-1">{phone}+31 (0) 570 219977</div> 
                            <div>{address}Munsterstraat 2F </div>
                            <div className="ml-4 pl-3 ">7418 EV Deventer</div>
                            <div className="ml-4  pl-3">The Nederlands</div>
                         <div className="my-1 pl-1">{Email}info@qmex.eu  </div>                
                    
                            <div className='footer_social d-inline d-flex flex-row my-3'>
                                <a href='https://www.linkedin.com' target='_blank' rel="noopener noreferrer"><RiFacebookBoxLine  className="mr-2 f_social" /></a>
                                <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer">< RiInstagramLine  className="mr-2 f_social"/></a>
                                <a href='https://www.facebook.com' target='_blank' rel="noopener noreferrer"><RiLinkedinBoxLine  className="mr-2 f_social" /></a></div>

                            <h6 className="ml-2 font-weight-bold" ><a href='/about' target='_blank' > Lees meer</a>{arrow}</h6>
                 
                  </Col>

                    <Col xs={6} lg={3} className="justify-content-center  flex-column d-flex">
                    <h6 className="font-weight-bold my-3">PRODUCTEN </h6>
                    <div><a href="/products/airconditioner" target='_blank'>Airconditioner</a></div>
                    <div><a href="/products/warmtepomp" target='_blank'>Warmtepomp</a></div>
                    <div><a href="/products/vrf" target='_blank'>VRF systeem</a></div>
                    <div><a href="/products/accessoires" target='_blank'>Accessoires & onderdelen</a></div>
                </Col>

                        <Col xs={6} lg={3} className="justify-content-center flex-column d-flex f_support">
                     <h6 className="font-weight-bold pt-5 my-3">SUPPORT</h6>
                    <div> <a href="/" target='_blank'>Diensten</a></div>
                    <div><a href="/" target='_blank'>Product ontwikkeling</a></div>
                    <div> <a href="/" target='_blank'>Subsidies </a></div>
                    <div><a href="/" target='_blank'>Garantiebeleid</a></div>
                    <div><a href="/" target='_blank'>Download</a></div>
                    <div><a href="/" target='_blank'>Video</a></div>
                </Col>

                    <Col xs={12} lg={3}
                        className='d-flex flex-column justify-content-center align-items-center mt-5 mb-2'>
                        <NavList items={props.navitemsLeft} className="footer_border border border-white p-5 mt-3" />
                </Col>
             
                    </Columns>
                </div>
                <div id='copyright' className="py-2">
                    <span className="pr-1"> | </span>
                    <a href="/privacy" target='_blank' style={{
                        fontSize: '13px', fontWeight: '800'}} > PRIVACY
                        <span className="pl-1"> | </span>   DISCLAMER </a> 
                    <span className="pl-1"> | </span>

                    <p className="ml-2 my-2 copyright_p"> Copyright &copy; 2021 Qmex Technology B.V. </p>
            </div>
          </div>
        </footer>
    );
});


export default Footer;