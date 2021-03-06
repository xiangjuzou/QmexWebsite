import React, { Component, Fragment } from 'react';
import CFLoader from './Contentful/CFLoader';

import Columns from './Common/Columns';
import VMFJumbo from './Contentful/VerhaalMetFoto/VMFJumbo';
import Kaart from './Contentful/Kaart/Kaart';
import Verhaal from './Contentful/Verhaal/Verhaal';
import WidthContainer from './Common/WidthContainer';
import { Col,Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default class Service extends Component {

    constructor(props) {
        super(props);

        if (!this.props.content) {
            CFLoader.LoadPage("4hh8D4pfxDFDMqKIPg0ipO", "services", this.props.statecallback);
        }
    }



    render() {
        if (!this.props.content) { return "Loading..."; }

        const Waarde = <FontAwesomeIcon icon={faCheck} className="fa-2x text-success " />;
      
        return (
            <Fragment>
                <div id="service_jumbo" className="mb-5 ">
                    <VMFJumbo content={this.props.content.banner?.fields} height="58vh" cover pos="bottomleft"/>
                </div>  

               
                <div id="service_waarden">
                    <WidthContainer width ={1}>
                    <Columns fluid>
                        {this.props.content.waarden.map(k =>
                            <Col className="text-left" >
                                <div className="ml-5 pl-5">{Waarde}</div>
                                <Kaart key={k.fields.name} content={k.fields} />
                            </Col>)}
                        </Columns>
                     </WidthContainer>
                </div>

                <div className="bg-light">
                <Container>
                <Verhaal className="text-center my-5 py-5" content={this.props.content.inleiding.fields} />
                    </Container>
                 </div>

                <div id="service_kaarten" className="my-5 pt-5">
                    <Columns>
                        {this.props.content.kaarten.map( (k,index) => <Col key={index} md={4} lg={4} xl={4} sm={12}>
                            <Kaart key={k.fields?.name} button target="_blank" content={k.fields} className="service_kaart" /></Col>)}
                    </Columns>
                </div>
            </Fragment>
        );
    }
}
