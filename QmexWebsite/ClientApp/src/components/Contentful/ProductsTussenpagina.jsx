import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Kaart from './Kaart/Kaart';
import { Col } from 'react-bootstrap';
import Columns from '../Common/Columns';
import Verhaal from '../Contentful/Verhaal/Verhaal';
import WidthContainer from '../Common/WidthContainer';



 function ProductsTussenpagina (props) {
  
         return (
             <Fragment>

                 <div >
                     <Verhaal className="text-center my-5" id='tussenpage_verhaal'
                         content={props.content.inleiding.fields} />
                 </div>
                 <div id="tussenpage_icoon">
                     <div className="pb-2">
                         <WidthContainer width={2}>
                             <Columns fluid>
                                 {
                                     props.content.hoofdmenus.map((hmi) => (
                                         <Col className="text-center" key={hmi.fields.slug} >
                                             <Link id="hfLink" to={"/products/" + hmi.fields.slug}>
                                                 <img alt="icon" className='my-2' src={hmi.fields.iconUrl} />
                                                 <br />
                                                 <div className="">{hmi.fields.title}</div>
                                             </Link>
                                         </Col>
                                     ))
                                 }
                             </Columns>
                         </WidthContainer>
                     </div>

                 </div>
                 
                 <div className="mt-5 mb-5 tussenpage_kaarten">
                     <Columns>
                            {
                                props.content.kaarten.map((k, index) => (
                                     <Col key={index} md={6} lg={6} sm={12}>
                                        <Kaart content={k.fields} className="p-1 mb-5 tussenpage_kaart" />
                                     </Col>
                                 ))
                             }
                         </Columns>
                 </div>

                
             </Fragment>
         )
     }


     export default ProductsTussenpagina;