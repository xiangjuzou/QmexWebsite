import React, { Fragment } from 'react';
import Kaart from './Kaart/Kaart';
import { Col } from 'react-bootstrap';
import Columns from '../Common/Columns';

 function ProductsTussenpagina (props) {
  
         return (
             <Fragment>
               
                 <div className="mb-6 tussenpage_kaarten text-center">
                     <Columns fluid>
                            {
                                props.content.kaarten.map((k, i) => (
                                    <Col sm={12} lg={6} className={"tussenkaart_" + i} key={i} md={6} lg={6} sm={12} >
                                        <Kaart content={k.fields} className="tussenpage_kaart my-5 mx-5" button />
                                     </Col>
                                 ))
                             }
                         </Columns>
                 </div>


                 
                
             </Fragment>
         )
     }


     export default ProductsTussenpagina;