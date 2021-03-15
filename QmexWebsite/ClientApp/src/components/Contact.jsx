import React, { Component, Fragment } from "react";
import CFLoader from './Contentful/CFLoader';
import { faPhoneSquareAlt, faEnvelope} from 'react-icons/fa';
import {Col, Row, Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Columns from "./Common/Columns";
import ContactForm from './Qmex/ContactForm';
import Map from './Qmex/Map';
import Verhaal from './Contentful/Verhaal';
import WidthContainer from './Common/WidthContainer';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';
import VMFJumbo from './Contentful/VerhaalMetFoto/VMFJumbo';
import ContactInfo from './Contentful/ContactInfo';



export default class Contact extends Component {
    constructor(props) {
        super(props);

        if (!this.props.content) {
            CFLoader.LoadPage("3BBdrJ8ylkeJfhWFpYgSqf", "contact", this.props.statecallback);
        }
    }



    render() {
        if (!this.props.content) { return "Loading..."; }

        return (
            <Fragment>

                <div id="contact_banner" className="mb-3">
                    <VMFJumbo content={this.props.content.banner.fields} cover pos="bottomleft" height="50vh" />
                </div>

                <WidthContainer width={1.5} >
                <ContactInfo id="contactInfo" content={this.props.content.contactgegevens.fields} />  
                 </WidthContainer> 
               
                    
                <div id="contact_verhaal" className="text-center bg-light">
                      <Verhaal content={this.props.content.verhaal.fields} width={3} />
                  </div>
                
                <div id="contact_form" className="mx-auto py-5 mb-5" style={{width:"780px"}}>
                        <ContactForm />
                </div>

                <div>
                    <Verhaal className="text-center my-4" content={this.props.content.mapInleiding.fields} />
                <div style={{ width:"80%"}} className="mx-auto ">
                 <Map center={{ lat: 52.2409555, lng: 6.1859974 }} zoom={12} />
                 </div>
                </div>

                
            </Fragment>
        );
    }
}