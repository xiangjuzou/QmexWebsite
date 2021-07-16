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
import { RiLinkedinBoxLine } from 'react-icons/ri';
import {FaGooglePlus } from 'react-icons/fa';



const Footer = React.memo((props) => {
    const phone = <BiPhoneCall className="mr-3" size="1.2em" />;
    const Email = <AiTwotoneMail className="mr-4" size="1.2em" />;
    const address = <FaRegAddressBook className="mr-3" size="1.2em" />;
    const arrow = <FiArrowRightCircle className="ml-3" size="1.2em" />;
  

    return (
        <footer>
                <div style={{ width: '70%' }} id="footer" className="mx-auto pb-5">
                 <Columns fluid  className="d-flex flex-row align-items-center py-2 ">
                        <Col lg={5} sm={4}> <img src="/img/newlogo.png" width="250px" height="auto" alt="logo" className="footer_logo" /></Col>
                        <Col lg={6} sm={8} className="mr-auto mt-3" > <p className="footer_slogo pt-4">BETAALBARE  DUURZAAMHEID </p></Col>
                     </Columns>
              <Columns fluid >   
                <Col xs={6} lg={3} className="d-flex flex-column justify-content-center my-3">
                         <div className="pb-2"><img className="mr-3" src="/img/tel.png" width="21px" alt="tel"/>+31 (0) 570 219977</div> 
                          <div ><img className="mr-3" src="/img/address.png" width="22px" alt="address"/>Munsterstraat 2F </div>
                         <div className="pl-4 ml-3 ">7418 EV Deventer</div>
                         <div className="pl-4 ml-3">The Nederlands</div>
                         <div className="py-2"><img className="mr-3" src="/img/email.png" width="21px" alt="email" />info@qmex.eu  </div>                
                 </Col>
            
                  <Col xs={6} lg={3} className="justify-content-center  flex-column d-flex">
                    <h6 className="font-weight-bold mb-2">PRODUCTEN </h6>
                    <div><a href="/products" target='_blank'>Airconditioner</a></div>
                    <div><a href="/products/warmtepomp" target='_blank'>Warmtepomp</a></div>
                    <div><a href="/products/vrf" target='_blank'>VRF systeem</a></div>
                    <div><a href="/products/accessoires" target='_blank'>Accessoires & onderdelen</a></div>
                   </Col>

                    <Col xs={6} lg={3} className="justify-content-center flex-column d-flex f_support ">
                     <h6 className="font-weight-bold pt-4 mb-2">SUPPORT</h6>
                     <div> <a href="/support" target='_blank'>Diensten</a></div>
                        <div><a href="/support/productdevelopment" target='_blank'>Product ontwikkeling</a></div>
                        <div> <a href="/support/subsidies" target='_blank'>Subsidies </a></div>
                        <div><a href="/support/garantie" target='_blank'>Garantiebeleid</a></div>
                        <div><a href="/support/downloads" target='_blank'>Download</a></div>
                   </Col>

                   <Col xs={6} lg={3} className="d-flex flex-column justify-content-center mt-5 mb-2">
                            <div> <a className="footer_4 " href="/faq" target='_blank'>FAQ</a></div>
                            <div><a className="footer_4" href="/blog" target='_blank'>BLOG</a></div>
                           <div><a className="footer_4" href="/support/video" target='_blank'>VIDEO</a></div>
                            <div className="d-inline d-flex flex-row my-2">
                            <a href='https://www.facebook.com' target='_blank' rel="noopener noreferrer"><RiFacebookBoxLine className="mr-2 f_social" /></a>
                            <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer">< RiInstagramLine className="mr-2 f_social" /></a>
                             <a href='https://www.linkedin.com' target='_blank' rel="noopener noreferrer"><RiLinkedinBoxLine className="mr-2 f_social" /></a>
                            <a href='https://www.google.com' target='_blank' rel="noopener noreferrer"><FaGooglePlus className="mr-2 f_social" /></a></div>
                </Col>
             
                    </Columns>
                </div>

                <div id='copyright'>
                <Columns >
                    <Col lg={9} className="py-2" >
                    <span className="pr-1"> | </span>
                    <a href="/privacy" target='_blank' style={{
                        fontSize: '13px', fontWeight: '800'}} > PRIVACY
                        <span className="pl-1"> | </span>   DISCLAMER </a> 
                    <span className="pl-1"> | </span>

                 
                        <p className="my-2 d-inline-block copyright_p"> Copyright &copy; 2021 Qmex Technology B.V. </p></Col>
                        <Col lg={3}> <img className="" src="/img/fme.png" width="160px" alt="fme" /></Col>
                    </Columns>
            </div>
          
        </footer>
    );
});


export default Footer;