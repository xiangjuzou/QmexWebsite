import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelope, faUser, faPen } from '@fortawesome/free-solid-svg-icons';
import * as ReactMarkdown from "react-markdown";
import Hr from "../Common/Hr";

export default class ContactInfo extends Component {


    render() {
   
        const Phone = <FontAwesomeIcon icon={faPhoneSquareAlt} className="text-dark" size="lg" />;
        const Email = <FontAwesomeIcon icon={faEnvelope} className="text-dark" size="lg" />;

        return (
            <address {...this.props} style={{ width: "400px" }} >
                <h1 style={{fontSize:'48px'}} >Contact</h1>
                <br /><br/>
                <h4>Adres</h4>
                <Hr/>
                <ReactMarkdown>{this.props.content?.adres}</ReactMarkdown>
                <br />
                <h4>Telefoonnummer</h4>
                <Hr />
                {Phone} &nbsp; {this.props.content?.telefoonnr} <br />
                <br/><br/>
                <h4>Email</h4>
                <Hr />
                {Email} &nbsp; {this.props.content?.email} <br />
            </address>
        );
    }


}