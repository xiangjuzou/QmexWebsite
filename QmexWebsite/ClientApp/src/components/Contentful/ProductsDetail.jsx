﻿import React, { Component, Fragment } from 'react';
import VMFJumbo from './VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './VerhaalMetFoto/VerhaalMetFoto';
import Verhaal from './Verhaal/Verhaal';
import OneKaart from './Kaart/OneKaart';
import CollapseVerhaal from './Verhaal/CollapseVerhaal';
import { Row,Col,Container } from 'react-bootstrap';

// props:
// - content       : app.state["product_<hoofdmenu>/<product>"]
function ProductsDetail(props) {

    const getMoreinfo = (mi, i, arr) => {

        switch (mi.sys.contentType.sys.id) {
            case "story":
                let laatste = false;
             
                if ((i === arr.length - 1) ||  (arr[i + 1].sys.contentType.sys.id === "verhaalmetfoto")) {
                    laatste = true;
                }

                return <CollapseVerhaal content={mi.fields} width={1} last={laatste} />;

            case "verhaalmetfoto":
                return <VerhaalMetFoto content={mi.fields} reverse={i % 2} />;
        }
    }
  
    return (
        <Fragment>
            <VMFJumbo content={props.content.showcase.fields} height="40vh" className="mb-5"/>
            <Verhaal id="inleiding" className="p-5 mb-5 text-center" content={props.content.inleiding?.fields} width={2} />
            {props.content.moreInfo?.map((mi, i, arr) => getMoreinfo(mi, i, arr))}
            <div id="ProductDetail_btn">
            <Container >
                    <OneKaart button target="_blank" content={props.content.contactkaart?.fields} linktekst="Contact" className="mt-6 mb-4 p-5 bg-secondary" />
             </Container>     
             </div>
        </Fragment>
    );
}


export default ProductsDetail;