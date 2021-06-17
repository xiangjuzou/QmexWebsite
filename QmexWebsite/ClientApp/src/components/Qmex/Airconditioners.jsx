import React, { Component, Fragment } from 'react';
import CFLoader from './CFLoader';
import { Link } from 'react-router-dom';
import Kaart from './Contentful/Kaart/Kaart';
import { Col } from 'react-bootstrap';
import Columns from './Common/Columns';
import WidthContainer from '../Common/WidthContainer';
import ReactMarkdownWithHtml from 'react-markdown/with-html';


 function Airconditioners (props) {
  
        if (!this.props.content) {
            CFLoader.LoadPage("3ougX80PczO4l2JMDf2BgQ", "productTussenpagina", this.props.statecallback);      
        }


    render() {
        if (!this.props.content) { return "Loading..."; }

        return (
            <Fragment>
                <div id="tussenpage_icoon">
                    <div style={{ background: 'rgba(51,51,51, 0.9)' }} className="pb-2">
                        <WidthContainer width={1.5}>
                            <Columns fluid>
                                {
                                    props.content.hoofdmenuitems.map((hmi) => (
                                        <Col className="text-center" >
                                            <Link id="hfLink" to={"/products/airconditioners " + hmi.fields.slug}>
                                                <img className='my-2' src={hmi.fields.iconUrl} />
                                                <br />
                                                <div className="text-white">{hmi.fields.title}</div>
                                            </Link>
                                        </Col>
                                    ))
                                }
                            </Columns>
                        </WidthContainer>

                    </div>

                    <div className="mt-5 mb-5 tussenpage_kaarten">
                        <Columns fluid  >
                            {
                                this.props.content.hoofdmenus.map((k, id) => (
                                    <Col key={id} md={4} lg={4} sm={12}>
                                        <Kaart content={k.fields} className="mx-1" />
                                    </Col>
                                ))
                            }
                        </Columns>
                    </div>

                </div>
            </Fragment>
        )
    
}

export default Airconditioners ;