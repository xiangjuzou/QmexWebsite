import React, { Fragment } from 'react';
import VMFJumbo from './VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './VerhaalMetFoto/VerhaalMetFoto';
import Verhaal from './Verhaal/Verhaal';
import Kaart from './Kaart/Kaart';
import OneKaart from './Kaart/OneKaart';
import { Container } from 'react-bootstrap';


// props:
// - content       : app.state["products_<hoofdmenu>"]
function ProductsShowcase(props) {

    const getGallery = (gi) => {
        switch (gi.sys.contentType.sys.id) {
            case "story": return <Verhaal content={gi.fields} className="flex-basis-1 container mt-5 mb-3 pl-4" />;
            case "verhaalmetfoto": return <VerhaalMetFoto content={gi.fields} className="flex-basis-1" />;
            case "card": return <Kaart content={gi.fields} className="p-5 text-center flex-basis-2" />;
            default: return <div/>
        }
    }


    return (
        <Fragment>
            <div  className="mb-2">
                <VMFJumbo content={props.content.showcase.fields} height="50vh" />
            </div>
            
            <div className="d-flex flex-wrap">
                {props.content.gallery?.map((gi) => getGallery(gi))}
            </div>
            <Container className="pt-5 mt-5">
                <OneKaart button  target="_blank" content={props.content.brochure?.fields} linktekst="Contact nu" className="py-4 pl-6 bg-secondary oneKaart_btn" />
             </Container>
        </Fragment>
    );
}

export default ProductsShowcase;