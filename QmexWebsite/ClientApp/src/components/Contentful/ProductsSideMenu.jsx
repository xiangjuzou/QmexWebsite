import React from 'react';
import CFLoader from './CFLoader';
import { Link } from 'react-router-dom';
import { CgArrowDownO } from 'react-icons/cg';
import ReactMarkdownWithHtml from 'react-markdown/with-html';


// props:
// - content       : app.state["product_<hoofdmenu>"] (met fields)
// - hoofd         : de content van hoofdmenu.
// - slug          : deel van de url kan hoofdmenu slug zijn of product slug. ("fridges" of "fridges/coolefridge")
// - statecallback : callback functie om state in APP.jsx op te slaan.
function ProductsSidemenu(props) {
    const arrowDown = < CgArrowDownO icon={CgArrowDownO} size="1.4em" className="sidemenu_arrow"/>;


    if (!props.content) {
        let hoofdmenuSlug = props.slug.split('/')[0];
        CFLoader.Loadhoofdmenu(hoofdmenuSlug, props.statecallback);

        return <div>Loading...</div>
    }

    return (
        <div className='border-right border-light border-2 pr-4'>
            <h3 id="side_titel" className="border-bottom border-light border-2 pb-2 font-weight-bold"> {arrowDown} PRODUCTEN </h3>

            <div>
                <h6 className='py-3' style={{ fontWeight: '800' }}>{props.content.fields.title}</h6>
            <div id="side-items">
                {
                    props.content.fields.products?.map((p) => (
                        <div className='pt-4'>
                            <Link className="sidemenulink" to={"/products/" + p.fields.slug}>
                                <span> &gt; </span>{p.fields?.menuTitle}
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

            <div id="hoofd-items" className="mt-6">
                    {props.hoofd.hoofdmenuitems.map((hmi) =>
                        <h6 className="mt-4" style={{ fontWeight:'800'}} key={hmi.fields.slug}>
                        <Link className="sidemenulink" to={"/products/" + hmi.fields.slug}>
                            {hmi.fields?.title}
                        </Link>
                    </h6>

                )}
            </div>
            </div>
          </div>
    )
}
    



export default ProductsSidemenu;