import React from 'react';
import Columns from '../Common/Columns';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WidthContainer from '../Common/WidthContainer';



// props:
// - content       : app.state["product"]
function ProductsHoofdmenu(props) {

    return (
        <div  style={{ background: 'rgba(51,51,51, 0.9)' }} className="pb-2">
        <WidthContainer width={3}>
            <Columns>
                    {
                        props.content.hoofdmenuitems.map((hmi) => (
                            <Col className="text-center" key={hmi.fields.slug} >
                            <Link id="hfLink" to={"/products/" + hmi.fields.slug}>
                                <img className='my-2' src={hmi.fields.iconUrl} alt={hmi.fields.title + "icon"}  />
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