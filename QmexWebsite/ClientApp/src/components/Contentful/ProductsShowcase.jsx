import React, { Fragment } from 'react';
import VMFJumbo from './VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './VerhaalMetFoto/VerhaalMetFoto';
import Verhaal from './Verhaal/Verhaal';
import Kaart from './Kaart/Kaart';
import OneKaart from './Kaart/OneKaart';
import { Container, Row, Col} from 'react-bootstrap';
import WidthContainer from '../Common/WidthContainer'


// props:
// - content       : app.state["products_<hoofdmenu>"] 
function ProductsShowcase(props) {

    const getGallery = (gi) => {
        switch (gi.sys.contentType.sys.id) {
            case "story": return <Verhaal content={gi.fields} className="flex-basis-1 container mt-5 mb-3 pl-4"/>;
            case "verhaalmetfoto": return <VerhaalMetFoto content={gi.fields} className="flex-basis-1"/>;
            case "card": return  <Kaart content={gi.fields} overlay={gi.fields.fotoUrl !== undefined}/>;

            default: return <div />;
        }
    }
    
    return (
        <div id={'PS_' + props.content.title.replace(/\s/g, '')} className="mt-4">
            {props.content.showcase && <VMFJumbo className="mb-2" content={props.content.showcase.fields} width='100%' height='50vh' />}

            
            {props.content.gallery &&
                <Container fluid >
                    <Row>
                    {props.content.gallery?.map((gi) =>
                        <Col md={12} className={"productGallery mt-4 CT_" + gi.sys.contentType.sys.id }>
                            {getGallery(gi)}
                        </Col>)}
                    </Row>
                </Container>
            } 
         

            {props.content.brochure && 
                <WidthContainer width={3} className='mt-5 bg-light'>
                <OneKaart button target="_blank" content={props.content.brochure.fields} linktekst="Contact nu" className="py-5 my-5 px-4  oneKaart_btn" />
            </WidthContainer>
            }
        </div>
    );
}

export default ProductsShowcase;