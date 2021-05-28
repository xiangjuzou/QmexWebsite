import React, { Fragment } from 'react';
import Columns from '../Common/Columns';
import { Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WidthContainer from '../Common/WidthContainer';



// props:
// - content       : app.state["product"]
function ProductsHoofdmenu(props) {

    return (
        <div  style={{ background: 'rgba(51,51,51, 0.9)' }} className="pb-2">
        <WidthContainer width={1.5}>
            <Columns fluid>
                {
                    props.content.hoofdmenuitems.map((hmi) => (
                        <Col className="text-center" >
                            <Link id="hfLink"  to={"/products/" + hmi.fields.slug}>
                                <img className='my-2' src={hmi.fields.iconUrl}  />
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