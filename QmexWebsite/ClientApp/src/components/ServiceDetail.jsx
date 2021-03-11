import React, { Component, Fragment } from 'react';
import CFLoader from './Contentful/CFLoader';

import { Row, Col, Container } from 'react-bootstrap';
import VMFJombo from './Contentful/VerhaalMetFoto/VMFJumbo';
import Verhaal from './Contentful/Verhaal';
import WidthContainer from './Common/WidthContainer';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';

export default class ServiceDetail extends Component {
    constructor(props) {
        super(props);

        if (!this.props.content) {
            switch (this.props.page) {
                case "dienstInkoop":
                    CFLoader.LoadPage("2K61zDKyvwVRhf74pUQxmA", "dienstInkoop", this.props.statecallback);
                    break;
                case "dienstOEM":
                    CFLoader.LoadPage("6jDqOC9jJL8uFeh4DfSRpw", "dienstOEM", this.props.statecallback);
                    break;
            }
        }
    }


    render() {
        if (!this.props.content) { return "Loading..."; }


        const lijstZonderEerste = this.props.content.verhalen.slice(1);

        return (
            <Fragment>
            <div id="servicedetail_main_content">
                    <VMFJombo content={this.props.content.verhalen[0].fields} pos="top" height="40vh" />
                    <WidthContainer width={1}>
                        {lijstZonderEerste.map((v) => this.kiesComponent(v))}
                    </WidthContainer>
                </div> 
           
             </Fragment>
            )
    }

    kiesComponent(v) {
        switch (v.sys?.contentType.sys.id) {
            case "verhaalmetfoto":
                return <VerhaalMetFoto content={v.fields} />
            default:
                return <Verhaal  content={v.fields} width={2} />
        }
    }
}