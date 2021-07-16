import React, { Component } from 'react';
import CFLoader from './Contentful/CFLoader';
import Verhaal from './Contentful/Verhaal/Verhaal';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';
import VMFJumbo from './Contentful/VerhaalMetFoto/VMFJumbo';
import Kaart from './Contentful/Kaart/Kaart';
import { Row, Col } from 'react-bootstrap';

export default class ServiceDetail extends Component {
    constructor(props) {
        super(props);


        if (!this.props.content) {
            switch (this.props.page) {
                case "dienst":
                    CFLoader.LoadPage("7IvQi3D1o2Qc1xwJfGoN01", "dienst", this.props.statecallback);
                    break;
                case "productdevelopment":
                    CFLoader.LoadPage("70zXKrVG1GD5BcgwwYGywT", "productdevelopment", this.props.statecallback);
                    break;
                case "subsidies":
                    CFLoader.LoadPage("4nY34Ickcp0NKDmJZ1wbXj", "subsidies", this.props.statecallback);
                    break;
                case "garantie":
                    CFLoader.LoadPage("5sw1q9tGnvyzFQdMPKLvC6", "garantie", this.props.statecallback);
                    break;
                case "downloads":
                    CFLoader.LoadPage("50A0v7sxdEWw3QrREZnS9j", "downloads", this.props.statecallback);
                    break;
                case "video":
                    CFLoader.LoadPage("3kwmkicombbPES9YJmK394", "video", this.props.statecallback);
                    break;               
                default: break;
            }
        }
    }


    render() {
        if (!this.props.content) { return "Loading..."; }

        const c = this.props.content;

        return (
            <div>
                {c.banner && <VMFJumbo content={c.banner.fields} />}
                {c.inleiding && <VerhaalMetFoto content={c.inleiding.fields} />}
                {c.verhaal && <Verhaal content={c.verhaal.fields} />}
                <Row>
                    {c.kaarten?.map((k) => <Col md={6} key={k.fields.name}><Kaart content={k.fields} /></Col> )}
                </Row>
             </div>
        )  
    }
}