import React, { Fragment } from 'react';
import VMFJumbo from './VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './VerhaalMetFoto/VerhaalMetFoto';
import Verhaal from './Verhaal';
import Kaart from './Kaart';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

// props:
// - content       : app.state["product_<hoofdmenu>"]
function ProductsShowcase(props) {

    const getGallery = (gi) => {
        switch (gi.sys.contentType.sys.id) {
            case "story": return <Verhaal content={gi.fields} className="flex-basis-1 container mb-5" width={1}/>;
            case "verhaalmetfoto": return <VerhaalMetFoto content={gi.fields} className="flex-basis-1"/>;
            case "card": return <Kaart content={gi.fields} className="flex-basis-2 text-left"  />;
        }
    }


    return (
        <Fragment>
            <div  className="mb-5">
                <VMFJumbo content={props.content.showcase.fields} height="40vh" />
            </div>
            
            <div className="d-flex flex-wrap text-center">
                {props.content.gallery?.map((gi) => getGallery(gi))}
            </div>
            <div className="text-center my-5">
            <h2 className="d-inline-block border border-warning px-5 py-5">
                <ReactMarkdownWithHtml allowDangerousHtml>{props.content?.meerinfo}</ReactMarkdownWithHtml>
                </h2>
             </div>
        </Fragment>
    );
}


export default ProductsShowcase;