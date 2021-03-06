import React, { Component } from 'react';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Verhaal Met Foto
// props: reverse:  draait de volgorde van foto en tekst om
//        content:  de data van contentful
//        link:     eventueel een link
//
// de rest worden attributen in de html
export default class VerhaalMetFoto extends Component {
  

    render() {

        // verzamel de "vreemde" props, en zet deze als attributen op de 1e div.
      
        const overgeblevenProps = { ...this.props };
        delete overgeblevenProps.reverse;
        delete overgeblevenProps.content;
        delete overgeblevenProps.link;
        delete overgeblevenProps.className;

              // opbouw van de class attribuut
        let className = "mx-auto ";
        if (this.props.className) {  
            className += this.props.className;
        }

        let col1 = (
            <Col md={6} sm={12}>
                <h2 className="my-5">{this.props.content?.titel}</h2>
                <ReactMarkdownWithHtml allowDangerousHtml>{this.props.content?.tekst}</ReactMarkdownWithHtml>{' '}
                <div className="my-4">
                {this.props.content?.moreUrl && <Link style={{ fontSize: '21px', textDecoration: 'none' }} className="text-white p-2 bg-primary"
                        to={this.props.content.moreUrl}>{this.props.content?.moreUrlText}</Link>}
                    </div>
            </Col>
        );

        let col2 = (
            <Col md={6} sm={12}>
                <img src={this.props.content?.fotoUrl} className="img-fluid" alt="foto"/>
            </Col>
            );


        return (
            <div className={className} {...overgeblevenProps} >
                {(this.props.reverse) ? <Row>{col2}{col1}</Row> : <Row>{col1}{col2}</Row>}
            </div>
        );
    }
}