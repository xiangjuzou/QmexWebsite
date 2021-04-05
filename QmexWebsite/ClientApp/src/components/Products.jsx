import React, { Component, Fragment } from 'react';
import CFLoader from './Contentful/CFLoader';
import Columns from './Common/Columns';
import ProductsHoofdmenu from "./Contentful/ProductsHoofdmenu.jsx";
import ProductsSidemenu from "./Contentful/ProductsSideMenu.jsx";
import ProductsShowcase from "./Contentful/ProductsShowcase.jsx";
import ProductsDetail from "./Contentful/ProductsDetail.jsx";
import { Col, Card, Button } from 'react-bootstrap';
import WidthContainer from './Common/WidthContainer';


// props:
// - menu          : content voor hoofdmenu:            app.state["product"]
// - submenu       : content voor submenu en showcase:  app.state["product_<hoofdmenu>"]
// - content       : content van url:                   app.state["product_<hoofdmenu>"]
//                                                   of app.state["product_<hoofdmenu>/<product>"]
// - id            : het id van de props.content
// - slug          : deel van de url van de props.content  ("fridges" of "fridges/coolefridge")
// - statecallback : callback functie om state in APP.jsx op te slaan.
export default class Products extends Component {
    constructor(props) {
        super(props);

        // menu    is er altijd
        // content wordt hier bijgeladen indien nodig.
        // submenu is optioneel, wordt bijgeladen door ProductSidemenu wanneer het nodig is.
        if (!this.props.content) {
            CFLoader.LoadPage(this.props.id, "product_" + this.props.slug, this.props.statecallback);
        }
    }

    isHoofdmenu(slug) {
        return slug.split('/').length === 1;
    }

    render() {
        if (!this.props.content) { return "Loading..."; }

     
        return (
            <Fragment>
                <div className='mb-5'>
                    <ProductsHoofdmenu content={this.props.menu} />
                </div>
                <WidthContainer width={1}>
                    <Columns fluid>
                        <Col md={2} className='rounded border border-light border-3 px-1 pt-2'>
                            <ProductsSidemenu content={this.props.submenu} hoofd={this.props.menu} slug={this.props.content.slug} statecallback={this.props.statecallback}  />
                            </Col>
                        <Col md={10}>
                            {this.isHoofdmenu(this.props.content.slug) ?
                                <ProductsShowcase content={this.props.content}/> :
                                <ProductsDetail content={this.props.content} />
                            }
                        </Col>
                    </Columns>
                </WidthContainer>
            </Fragment>
      );
    }
}