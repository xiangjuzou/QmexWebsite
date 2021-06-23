import React, { Fragment } from 'react';
import VMFJumbo from './VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './VerhaalMetFoto/VerhaalMetFoto';
import Verhaal from './Verhaal/Verhaal';
import Kaart from './Kaart/Kaart';
import OneKaart from './Kaart/OneKaart';
import WidthContainer from '../Common/WidthContainer'


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

            <WidthContainer width={3} className='bg-light mt-5'>
                <OneKaart button target="_blank" content={props.content.brochure?.fields} linktekst="Contact nu" className="py-5 my-5 px-4 oneKaart_btn" />
             </WidthContainer>
        </Fragment>
    );
}

export default ProductsShowcase;