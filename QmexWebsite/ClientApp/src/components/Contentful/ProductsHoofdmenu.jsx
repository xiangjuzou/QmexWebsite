import React, { Fragment } from 'react';
import Columns from '../Common/Columns';
import { Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WidthContainer from '../Common/WidthContainer';



// props:
// - content       : app.state["product"]
function ProductsHoofdmenu(props) {

    return (
        <div  style={{ background: 'rgba(51,51,51, 0.9)', height:'10vh' }}>
        <WidthContainer width={2.5}>
            <Columns fluid>
                {
                    props.content.hoofdmenuitems.map((hmi) => (
                        <Col className="text-center" >
                        <Link to={"/products/" + hmi.fields.slug} id="hfLink">
                              <img className='my-3'  src={hmi.fields.iconUrl} width="40px" height="40px" />
                            <br />
                            <h6 className="text-white">{hmi.fields.title}</h6>
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