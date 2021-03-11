import React, { Fragment } from 'react';
import Columns from '../Common/Columns';
import { Col, Card, Button } from 'react-bootstrap';
import VMFJumbo from './VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './VerhaalMetFoto/VerhaalMetFoto';
import Verhaal from './Verhaal';

// props:
// - content       : app.state["product_<hoofdmenu>/<product>"]
function ProductsDetail(props) {

    const getMoreinfo = (mi) => {
        switch (mi.sys.contentType.sys.id) {
            case "story": return <Verhaal content={mi.fields}  />;
            case "verhaalmetfoto": return <VerhaalMetFoto content={mi.fields} />;
        }
    }
  
    return (
        <div>
            <VMFJumbo content={props.content.showcase.fields} height="65vh" className="mb-5" pos="top" />
            <Verhaal id="products_verhaal" className="bg-light" content={props.content.highlight.fields}/>
            {props.content.moreInfo?.map((mi) => getMoreinfo(mi))}
        </div>
    );
}


export default ProductsDetail;