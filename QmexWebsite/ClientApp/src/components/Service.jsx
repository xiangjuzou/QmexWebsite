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
                    <VMFJumbo content={this.props.content.banner?.fields} height="48vh" cover pos="bottomleft"/>
                </div>  

               
                <div id="service_waarden">
                    <WidthContainer width={1}>
                    <Columns fluid>
                        {this.props.content.waarden.map(k =>
                            <Col className="text-left" >
                                <span className="d-inline-block"><img src="/img/lamp.png" width="42px" alt="lamp" /> </span>
                                <Kaart key={k.fields.name} content={k.fields} className="d-inline-block" />
                            </Col>)}
                        </Columns>
                     </WidthContainer>
                </div>

                <div className="bg-light">
                <Container>
                <Verhaal className="text-center my-5 px-5 support_verhaal" content={this.props.content.inleiding.fields} />
                    </Container>
                 </div>

                <div className="my-5 pt-5 service_kaarten">
                    <Columns>
                        {this.props.content.kaarten.map((k, i) =>
                            <Col key={i} className={"servicekaart_" + i + " text-left" + "mb-5"} >
                                <Kaart key={k.fields} target="_blank" content={k.fields} overlay clickall/>
                            </Col>)}
                    </Columns>
                </div>

                
            </Fragment>
        );
    }
}
