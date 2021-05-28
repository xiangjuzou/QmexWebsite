import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelope, faUser, faPen } from '@fortawesome/free-solid-svg-icons';
import * as ReactMarkdown from "react-markdown";
import Hr from "../Common/Hr";
import { Col, Container } from 'react-bootstrap';
import Columns from "../Common/Columns";

export default class ContactInfo extends Component {


    render() {
   
        const Phone = <FontAwesomeIcon icon={faPhoneSquareAlt} className="text-dark" size="lg" />;
        const Email = <FontAwesomeIcon icon={faEnvelope} className="text-dark" size="lg" />;

        return (

            <Columns fluid className="mt-5 py-5">
                <Col className="border border-primary p-3 offset-1 mb-3 pl-2">
                    <h4 className="pb-3 pt-2 ">Adres</h4>
                 
                    <ReactMarkdown>{this.props.content?.adres}</ReactMarkdown>
                </Col>
                <Col className="border border-primary p-3 offset-1 mb-3 pl-2 ">
                    <h4 className="pb-4 pt-2 ">Telefoonnummer & Email</h4>
                    <p className="pb-3">{Phone} &nbsp; {this.props.content?.telefoonnr}</p>
                    <p> {Email} &nbsp; {this.props.content?.email}</p>
                </Col>
                <Col className="border border-primary p-3 offset-1 mb-3 pl-2">
                    <h4 className="pb-4 pt-2">KVK & BTW & Banknummer</h4>
                    <p >{this.props.content?.kvk}</p>
                    <p> {this.props.content?.btw}</p>
                    <p> {this.props.content?.banknr}</p>
                </Col>

            </Columns>
        );
    }


}