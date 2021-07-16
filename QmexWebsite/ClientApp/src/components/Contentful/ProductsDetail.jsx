import React, { Fragment } from 'react';
import VMFJumbo from './VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './VerhaalMetFoto/VerhaalMetFoto';
import Verhaal from './Verhaal/Verhaal';
import OneKaart from './Kaart/OneKaart';
import CollapseVerhaal from './Verhaal/CollapseVerhaal';
import WidthContainer from '../Common/WidthContainer'
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

                return <CollapseVerhaal content={mi.fields} width={0} last={laatste} className="flex-basis-1" >
                    {kaartarray.map(mi => <SpecificatieKaart  content={mi.fields} className={"flex-basis-" + countcards(arr, i+1) + "py-5 px-3"} />)}
                       </CollapseVerhaal>;


            case "verhaalmetfoto":
                return <VerhaalMetFoto content={mi.fields} reverse={i % 2} className="flex-basis-1"/>;
            case "specificatiekaart":
                // return <SpecificatieKaart content={mi.fields} className={"flex-basis-" + countcards(arr,i) + " py-5 px-3"} />
                return <Fragment />
            default: return <Fragment />
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
        <Fragment className="productDetailpage">
            <VMFJumbo content={props.content.showcase.fields} height="40vh" className="mb-5" cover />

            <Verhaal id="inleiding" className="text-center" content={props.content.inleiding?.fields} width={1} />

            <div id="productDetail_c" className="d-flex flex-wrap my-5 pb-5">
                {props.content.moreInfo?.map((mi, i, arr) => getMoreinfo(mi, i, arr))}
              </div>

            <div id="ProductDetail_c">
                < WidthContainer width={3} className='bg-light '>
                    <OneKaart button target="_blank" content={props.content.contactkaart?.fields} linktekst="Contact nu" className="my-5 py-5 oneKaart_btn  productDetail_btn" />
                </WidthContainer>     
             </div>
        </Fragment>
    );
}


export default ProductsDetail;
