import React, { Component, Fragment } from "react";
import CFLoader from './Contentful/CFLoader';
import ContactForm from './Qmex/ContactForm';
import Map from './Qmex/Map';
import Verhaal from './Contentful/Verhaal/Verhaal';
import WidthContainer from './Common/WidthContainer';
import VMFJumbo from './Contentful/VerhaalMetFoto/VMFJumbo';
import ContactInfo from './Contentful/ContactInfo';
import Titel from './Contentful/Verhaal/Titel';



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

                <div id="contact_banner" className="position-relative mb-3 text-dark">
                    <VMFJumbo content={this.props.content.banner.fields} cover pos="bottomleft" height="48vh" />
                </div>

             
                <Columns fluid >
                    <Col id="contact_kaart-one" xs={11} md={3} lg={3} className="p-4 my-4 mx-3">
                        <h2 className="py-5">Adres</h2>
                        <ReactMarkdown>{this.props.content?.adres}</ReactMarkdown>
                    </Col>
                    <Col id="contact_kaart-two" xs={11} md={4} lg={3} className="p-4 my-4 mx-3 ">
                        <h2 className="py-5 ">Tel. & E-mail</h2>
                        <p className="pb-3">{Phone} &nbsp; {this.props.content?.telefoonnr}</p>
                        <p> {Email} &nbsp; {this.props.content?.email}</p>
                    </Col>
                    <Col id="contact_kaart-three" xs={11} md={3} lg={3} className="p-4 my-4 mx-3">
                        <h2 className="py-5">KVK & BTW </h2>
                        <p >{this.props.content?.kvk}</p>
                        <p> {this.props.content?.btw}</p>
                    </Col>
                </Columns>
              

                <div className="text-center position-relative" style={{ top: '-120px' }}>
                <div id="contact_verhaal bg-light">
                      <Verhaal content={this.props.content.verhaal.fields} width={3} />
                  </div>
                
                <div id="contact_form" className="mx-auto" style={{width:"780px"}}>
                        <ContactForm />
                </div>

                 </div>
                <div>
                    <Titel className="text-center position-relative" style={{ top: '-60px' }}
                        content={this.props.content.mapInleiding.fields} />
                <div style={{ width:"80%"}} className="mx-auto ">
                        <Map center={{ lat: 52.2409555, lng: 6.1859974 }} zoom={12} />

                   <WidthContainer width={2} >
                            <ContactInfo content={this.props.content.contactgegevens.fields} />
                        </WidthContainer> 
                 </div>
                </div>

                
            </Fragment>
        );
    }
}