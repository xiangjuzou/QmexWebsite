import React, { Fragment } from 'react';
import CFLoader from './CFLoader';
import Columns from '../Common/Columns';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactMarkdownWithHtml from 'react-markdown/with-html';


// props:
// - content       : app.state["product_<hoofdmenu>"]
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
                <h4>{props.content.title}{' '} producten</h4>
            </div>
            <div id="side-items">
                {
                    props.content.products?.map((p) => (
                        <div className='pt-2'>
                            <Link className="sidemenulink" to={"/products/" + p.fields.slug} >
                                &gt; {p.fields?.menuTitle}
                            </Link>
                            <div className="ml-4 small side_subtitle">
                                <ReactMarkdownWithHtml allowDangerousHtml>{p.fields?.menusubtitle}</ReactMarkdownWithHtml>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h4 className="mt-6 pb-2">Alle producten</h4>
            <div id="hoofd-items" className="">
                {props.hoofd.hoofdmenuitems.map((hmi) =>
                    <div className="mt-2">
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