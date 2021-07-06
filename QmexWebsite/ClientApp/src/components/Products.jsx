import React, { Component, Fragment } from 'react';
import CFLoader from './Contentful/CFLoader';
import Columns from './Common/Columns';
import ProductsHoofdmenu from "./Contentful/ProductsHoofdmenu.jsx";
import ProductsTussenpagina from "./Contentful/ProductsTussenpagina.jsx";
import ProductsSidemenu from "./Contentful/ProductsSideMenu.jsx";
import ProductsShowcase from "./Contentful/ProductsShowcase.jsx";
import ProductsDetail from "./Contentful/ProductsDetail.jsx";
import {Col} from 'react-bootstrap';


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
        //
        // false: dus we krijgen props.content.fields en props.content.sys ipv props.content
        if (!this.props.content) {
            CFLoader.LoadPage(this.props.id, "products_" + this.props.slug, this.props.statecallback, false);
        }
    }

    getContent(content) {
        switch (content.sys.contentType.sys.id) {
            case 'producthoofdmenu': return <ProductsShowcase content={content.fields} />
            case 'productTussenpagina': return <ProductsTussenpagina content={content.fields} />
            default: return <ProductsDetail content={content.fields} />
        }
    }

    render() {
        if (!this.props.content) { return "Loading..."; }
        return (
            <Fragment>
             
                <div className='mb-5'>
                    <ProductsHoofdmenu content={this.props.menu} />
                </div>
                
                <div style={{width:'90%'}}>
                    <Columns fluid>

                        <Col md={2} className="ml-auto" >
                            <ProductsSidemenu content={this.props.submenu} hoofd={this.props.menu} slug={this.props.content.fields.slug} statecallback={this.props.statecallback}  />
                            </Col>
                        <Col md={9} >
                            {this.getContent(this.props.content)}
                        </Col>
                    </Columns>
                    </div>
              
            </Fragment>
      );
    }
}