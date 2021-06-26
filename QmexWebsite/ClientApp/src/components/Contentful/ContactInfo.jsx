import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as ReactMarkdown from "react-markdown";
import { Col } from 'react-bootstrap';
import Columns from "../Common/Columns";

export default class ContactInfo extends Component {

    render() {
   
        const Phone = <FontAwesomeIcon icon={faPhoneSquareAlt}  size="lg" />;
        const Email = <FontAwesomeIcon icon={faEnvelope}  size="lg" />;

        return (
            <Columns fluid >
                <Col id="contact_kaart-one" xs={11} md={3} lg={3} className="p-5 my-5 mx-3">
                    <h2 className="py-5">Adres</h2>
                    <ReactMarkdown>{this.props.content?.adres}</ReactMarkdown>
                </Col>
                <Col id="contact_kaart-two" xs={11} md={4} lg={3} className="p-5 my-5 mx-3 ">
                    <h2 className="py-5 ">Tel. & E-mail</h2>
                    <p className="pb-3">{Phone} &nbsp; {this.props.content?.telefoonnr}</p>
                    <p> {Email} &nbsp; {this.props.content?.email}</p>
                </Col>
                <Col id="contact_kaart-three" xs={11} md={3} lg={3} className="p-5 my-5 mx-3">
                    <h2 className="py-5">KVK & BTW </h2>
                    <p >{this.props.content?.kvk}</p>
                    <p> {this.props.content?.btw}</p>                 
                </Col>
            </Columns>
        );
    }


}