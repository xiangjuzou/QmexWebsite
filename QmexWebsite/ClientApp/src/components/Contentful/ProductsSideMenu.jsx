import React, { Fragment } from 'react';
import CFLoader from './CFLoader';
import Columns from '../Common/Columns';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// props:
// - content       : app.state["product_<hoofdmenu>"]
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
            <div><h4>{props.content.title}{' ' } Cateloge </h4></div>
            {
                props.content.products?.map((p) => (
                    <div className='pt-3'>
                    <Link to={"/products/" + p.fields.slug}>
                        {p.fields.menuTitle}
                        </Link>
                     
                </div>
                ))
            }

            {!props.content.products && <div>No products yet</div>}
        </div>
    );
}


export default ProductsSidemenu;