import React, { Fragment } from 'react';
import VMFJumbo from './VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './VerhaalMetFoto/VerhaalMetFoto';
import Verhaal from './Verhaal';
import Kaart from './Kaart';
import { Container } from 'react-bootstrap';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

// props:
// - content       : app.state["product_<hoofdmenu>"]
function ProductsShowcase(props) {

    const getGallery = (gi) => {
        switch (gi.sys.contentType.sys.id) {
            case "story": return <Verhaal content={gi.fields} className="flex-basis-1 container my-5" />;
            case "verhaalmetfoto": return <VerhaalMetFoto content={gi.fields} className="flex-basis-1"/>;
            case "card": return <Kaart content={gi.fields} className="flex-basis-2 text-left"  />;
        }
    }


    return (
        <Fragment>
            <div  className="mb-5">
                <VMFJumbo content={props.content.showcase.fields} height="40vh" />
            </div>
            
            <div className="d-flex flex-wrap">
                {props.content.gallery?.map((gi) => getGallery(gi))}
            </div>

            <div id="products-moreinfo" className="bg-light py-2 px-5">
                <Container>
                <Verhaal content={props.content?.meerinfo?.fields}  />
            </Container>
            </div>
        </Fragment>
    );
}


export default ProductsShowcase;