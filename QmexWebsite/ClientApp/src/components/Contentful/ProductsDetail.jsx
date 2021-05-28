import React, { Component, Fragment } from 'react';
import VMFJumbo from './VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './VerhaalMetFoto/VerhaalMetFoto';
import Verhaal from './Verhaal/Verhaal';
import OneKaart from './Kaart/OneKaart';
import CollapseVerhaal from './Verhaal/CollapseVerhaal';
import { Row,Col,Container } from 'react-bootstrap';
import SpecificatieKaart from './SpecificatieKaart';

// props:
// - content       : app.state["product_<hoofdmenu>/<product>"]
function ProductsDetail(props) {

    const getMoreinfo = (mi, i, arr) => {

        switch (mi.sys.contentType.sys.id) {
            case "story":
                // aantal kaarten dat na het verhaal komt, moeten IN het verhaal...
                let aantal = 0
                if ((i < arr.length - 1) && arr[i + 1].sys.contentType.sys.id === "specificatiekaart") {
                    aantal = countcards(arr, i + 1);
                }
                const kaartarray = arr.slice(i + 1, i + 1 + aantal);

                // bepaal laatste
                let laatste = false;
                if ((i + aantal === arr.length - 1) || (arr[i + aantal+1].sys.contentType.sys.id === "verhaalmetfoto")) {
                    laatste = true;
                }

                return <CollapseVerhaal content={mi.fields} width={1} last={laatste} className="flex-basis-1" >
                    {kaartarray.map(mi => <SpecificatieKaart  content={mi.fields} className={"flex-basis-" + countcards(arr, i+1) + " py-5 px-3"} />)}
                       </CollapseVerhaal>;


            case "verhaalmetfoto":
                return <VerhaalMetFoto content={mi.fields} reverse={i % 2} className="flex-basis-1"/>;
            case "specificatiekaart":
                // return <SpecificatieKaart content={mi.fields} className={"flex-basis-" + countcards(arr,i) + " py-5 px-3"} />
                return <Fragment/>
        }
        
    }

    const countcards = (arr, startindex) => {
        let aantal = 1;
        let i = startindex+1;
        while (arr.length > i && arr[i].sys.contentType.sys.id === "specificatiekaart") {
            aantal++;
            i++;
        }

        i = startindex - 1;
        while ( i >= 0 && arr[i].sys.contentType.sys.id === "specificatiekaart") {
            aantal++;
            i--;
        }
        
        return aantal;
    }

  
    return (
        <Fragment>
            <VMFJumbo content={props.content.showcase.fields} height="40vh" className="mb-5" cover/>
            <Verhaal id="inleiding" className="p-5 mb-5 text-center" content={props.content.inleiding?.fields} width={2} />
            <div className="d-flex flex-wrap">
                {props.content.moreInfo?.map((mi, i, arr) => getMoreinfo(mi, i, arr))}
            </div>
            <div id="ProductDetail_btn">
            <Container >
                    <OneKaart button target="_blank" content={props.content.contactkaart?.fields} linktekst="Contact nu" className="mt-6 mb-4 p-5 bg-secondary oneKaart_btn" />
            </Container>     
             </div>
        </Fragment>
    );
}


export default ProductsDetail;
