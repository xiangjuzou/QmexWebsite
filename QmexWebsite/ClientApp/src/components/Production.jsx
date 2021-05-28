import React, { Component, Fragment } from 'react';
import CFLoader from './Contentful/CFLoader';
import Kaart from './Contentful/Kaart/Kaart';
import Verhaal from './Contentful/Verhaal/Verhaal';
import Columns from './Common/Columns';
import { Col, Container } from 'react-bootstrap';
import VMFJumbo from './Contentful/VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';
import WidthContainer from './Common/WidthContainer';

export default class Production extends Component {
    constructor(props) {
        super(props);

        if (!this.props.content) {
            CFLoader.LoadPage("4BKHmFQgYEfZsbJSCqaTiD", "production", this.props.statecallback);
        }
    }



    render() {
        if (!this.props.content) { return "Loading..."; }
        return (
                <div className="position-relative">

                    <VMFJumbo content={this.props.content.banner.fields} height="70vh" />

                    <div id="production_section" className="bg-light mx-auto position-relative" style={{ width:'80%', top:'-250px'}}>  
                        <Columns fluid className="py-5 px-5 text-center" id="production_fabKaart">
                            {
                            this.props.content.fabKaart.map((k, id) => (
                                <Col key={id} md={4} sm={12}>
                                    <Kaart content={k.fields} overlay className="text-white" />
                                </Col>
                                ))
                            }
                        </Columns>

                        <Verhaal content={this.props.content.fabriek.fields} className="text-center" width={3}  /> 

                    <VMFJumbo className="pl-5 production" cover pos="left" height="60vh" content={this.props.content.location.fields} />
                        
                        <div className="bg-light py-3 text-center ">
                            <Columns fluid className="py-5 mb-3" id="production_locKaart">
                                {
                                    this.props.content?.locKaart.map((k, id) => (
                                        <Col key={id} md={4} sm={12}> 
                                            <Kaart content={k.fields} />
                                        </Col>
                                    ))
                                }
                            </Columns>
                        </div>

                    </div>
                </div>
        );
    }
}