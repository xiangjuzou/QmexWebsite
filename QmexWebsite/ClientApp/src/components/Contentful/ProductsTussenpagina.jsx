import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Kaart from './Kaart/Kaart';
import { Col } from 'react-bootstrap';
import Columns from '../Common/Columns';
import WidthContainer from '../Common/WidthContainer';
import VMFJumbo from '../Contentful/VerhaalMetFoto/VMFJumbo';



 function ProductsTussenpagina (props) {
  
         return (
             <Fragment>
               
                 <div className="mb-5 tussenpage_kaarten text-center">
                     <Columns fluid>
                            {
                                props.content.kaarten.map((k, i) => (
                                     <Col key={i} md={6} lg={6} sm={12} >
                                        <Kaart content={k.fields}  className={"tussenkaart_" + i  + "p-2 my-3 tussenpage_kaart"}  button  />
                                     </Col>
                                 ))
                             }
                         </Columns>
                 </div>


                 
                
             </Fragment>
         )
     }


     export default ProductsTussenpagina;