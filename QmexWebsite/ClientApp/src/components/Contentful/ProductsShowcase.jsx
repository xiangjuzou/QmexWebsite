import React, { Fragment } from 'react';
import VMFJumbo from './VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './VerhaalMetFoto/VerhaalMetFoto';
import Verhaal from './Verhaal/Verhaal';
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
            case "card": return <Kaart content={gi.fields} className="card flex-basis-1 border border-warning display-5 mx-auto p-5" style="max-width: 18rem;"/>;
        }
    }


    return (
        <Fragment>
            <div  className="mb-2">
                <VMFJumbo content={props.content.showcase.fields} height="40vh" />
            </div>
            
            <div className="d-flex flex-wrap p-5">
                {props.content.gallery?.map((gi) => getGallery(gi))}
            </div>

           
        </Fragment>
    );
}

export default ProductsShowcase;