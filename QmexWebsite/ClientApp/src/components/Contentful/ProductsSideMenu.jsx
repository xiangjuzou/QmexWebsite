import React from 'react';
import CFLoader from './CFLoader';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowCircleDown  } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdownWithHtml from 'react-markdown/with-html';


// props:
// - content       : app.state["product_<hoofdmenu>"] (met fields)
// - hoofd         : de content van hoofdmenu.
// - slug          : deel van de url kan hoofdmenu slug zijn of product slug. ("fridges" of "fridges/coolefridge")
// - statecallback : callback functie om state in APP.jsx op te slaan.
function ProductsSidemenu(props) {
    const arrowDown = <FontAwesomeIcon icon={faArrowCircleDown } size="lg" />;


    if (!props.content) {
        let hoofdmenuSlug = props.slug.split('/')[0];
        CFLoader.Loadhoofdmenu(hoofdmenuSlug, props.statecallback);

        return <div>Loading...</div>
    }

    return (
        <div className='border-right border-light border-2 pr-4'>
            <h4 id="side_titel" className="border-bottom border-light border-2 pb-4 font-weight-bold"> {arrowDown} PRODUCTEN </h4>

            <div>
            <h5 className='py-3 font-weight-bold'>{props.content.fields.title}</h5>
            <div id="side-items">
                {
                    props.content.fields.products?.map((p) => (
                        <div className='pt-4'>
                            <Link className="sidemenulink" to={"/products/" + p.fields.slug}>
                                &gt; {p.fields?.menuTitle}
                            </Link>
                            <div className="ml-4 small side_subtitle">
                                <ReactMarkdownWithHtml allowDangerousHtml>{p.fields?.menusubtitle}</ReactMarkdownWithHtml>
                            </div>
                        </div>
                    ))
                }
                {
                    props.content.fields.hoofdmenus?.map((p) => (
                        <div className='pt-4'>
                            <Link className="sidemenulink" to={"/products/" + p.fields.slug}>
                                &gt; {p.fields?.title}
                            </Link>
                        </div>
                    ))
                }
            </div>
            <h5 className="mt-6 pb-2 font-weight-bold">Alle producten</h5>
            <div id="hoofd-items" className="">
                {props.hoofd.hoofdmenuitems.map((hmi) =>
                    <div className="mt-4" key={hmi.fields.slug}>
                        <Link className="sidemenulink" to={"/products/" + hmi.fields.slug}>
                            &gt; {hmi.fields?.title}
                        </Link>
                    </div>

                )}
            </div>
            </div>
          </div>
    )
}
    



export default ProductsSidemenu;