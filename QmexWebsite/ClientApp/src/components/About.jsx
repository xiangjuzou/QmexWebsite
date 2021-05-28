import React, { Component, Fragment } from 'react';
import CFLoader from './Contentful/CFLoader';
import { Col, Row, Container } from 'react-bootstrap';

import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';
import VMFJumbo from './Contentful/VerhaalMetFoto/VMFJumbo';
import Verhaal from './Contentful/Verhaal/Verhaal';
import WidthContainer from './Common/WidthContainer';


export default class About extends Component {
    constructor(props) {
        super(props);

        if (!this.props.content) {
            CFLoader.LoadPage("626BaVtkrNibZt5aOcM6oe", "about", this.props.statecallback);
        }
    }



    render() {
        if (!this.props.content) { return "Loading..."; }

        let topbanner = this.props.content.verhalen[0];
        let topverhaal = this.props.content.verhalen[1];
        let verhalen = [...this.props.content.verhalen];
        verhalen.splice(0, 2);

        return (
            <Fragment>
                <div id="about_topbanner">
                    <VMFJumbo content={topbanner.fields} height="40vh" cover id="topbanner"/>
                </div>
              
                <div id="about_topverhaal" className=" bg-light py-3 mb-5 text-left" >
                      <Verhaal content={topverhaal.fields} width={3} />
                </div>
                  
                <WidthContainer width={1} id="about_sidefotos">
                    {verhalen.map((v, i) => <VerhaalMetFoto reverse={i % 2} content={v.fields} className="mb-5"/>)}
                </WidthContainer>
            </Fragment>
        );
    }
}






