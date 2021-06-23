import React from 'react';
import CFLoader from './CFLoader';
import { Link } from 'react-router-dom';
import ReactMarkdownWithHtml from 'react-markdown/with-html';


// props:
// - content       : app.state["product_<hoofdmenu>"] (met fields)
// - hoofd         : de content van hoofdmenu.
// - slug          : deel van de url kan hoofdmenu slug zijn of product slug. ("fridges" of "fridges/coolefridge")
// - statecallback : callback functie om state in APP.jsx op te slaan.
function ProductsSidemenu(props) {

    if (!props.content) {
        let hoofdmenuSlug = props.slug.split('/')[0];
        CFLoader.Loadhoofdmenu(hoofdmenuSlug, props.statecallback);

        return <div>Loading...</div>
    }
    return (
        <div>
            <div>
                <h5 className='font-weight-bold'>{props.content.fields.title}{' '} producten</h5>
            </div>
            <div id="side-items">
                {
                    props.content.fields.products?.map((p) => (
                        <div className='pt-2'>
                            <Link className="sidemenulink" to={"/products/" + p.fields.slug}>
                                &gt; {p.fields?.menuTitle}
                            </Link>
                            <div className="ml-4 small side_subtitle font-weight-light font-italic">
                                <ReactMarkdownWithHtml allowDangerousHtml>{p.fields?.menusubtitle}</ReactMarkdownWithHtml>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h5 className="mt-6 pb-2 font-weight-bold">Alle producten</h5>
            <div id="hoofd-items" className="">
                {props.hoofd.hoofdmenuitems.map((hmi) =>
                    <div className="mt-2" key={hmi.fields.slug}>
                        <Link className="sidemenulink" to={"/products/" + hmi.fields.slug}>
                            &gt; {hmi.fields?.title}
                        </Link>
                    </div>

                )}
            </div>
        </div>
    )
}
    



export default ProductsSidemenu;