import React, { Fragment } from 'react';
import Columns from '../Common/Columns';
import { Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WidthContainer from '../Common/WidthContainer';



// props:
// - content       : app.state["product"]
function ProductsHoofdmenu(props) {

    return (
        <div  style={{ background: 'rgba(51,51,51, 0.9)' }} className="pb-3">
        <WidthContainer width={2}>
            <Columns fluid>
                {
                    props.content.hoofdmenuitems.map((hmi) => (
                        <Col className="text-center" >
                        <Link to={"/products/" + hmi.fields.slug} id="hfLink">
                              <img className='my-3'  src={hmi.fields.iconUrl} width="40px" height="40px" />
                            <br />
                            <div className="text-white">{hmi.fields.title}</div>
                        </Link>
                    </Col>
                ))
            }

                


            </Columns>
            </WidthContainer>
            
            </div>
    );
}


export default ProductsHoofdmenu;