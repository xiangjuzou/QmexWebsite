import React, { Component, Fragment } from 'react';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


/* VMF JUMBO, neeeeeheee!  VMFTopBanner!
 * 
 * props:
 * - content        (van contentful)
 * - pos: 
 *      - center    (default)
 *      - bottomleft
 * - height:        (string) height of jumbo.  (default: 100%)
 * - cover:         (boolean)  of het plaatje cover moet hebben of niet.
*/
export default class VMFTopBanner extends Component {

    render() {
       
        //nobanner!
        if (this.props.content === null || this.props.content === undefined) {
            return <Fragment />;
        }


        // banner!
        // verzamel de "vreemde" props, en zet deze als attributen op de 1e div.
        const overgeblevenProps = { ...this.props };
        delete overgeblevenProps.pos;
        delete overgeblevenProps.content;


        let pos = "";
        switch (this.props.pos) {
            case "bottomleft":
                pos = "text-left ml-5 pl-5 pb-4";
                break;
            case "top":
                pos = "text-center pt-2 lead";
                break;
            case "left":
                pos = "center pl-1 lead";
                break;
            default:
                pos = "text-center lead";
                break;
        }

        return (
            <div className={'position-relative ' + this.getBGStyle(this.props.content?.titel)} {...overgeblevenProps} >
                <Container fluid >
                    <Row>
                        <Col className="ml-auto my-3 py-6 pl-6  productTopbanner">
                            <h1 className='display-3 d-inline font-weight-bold pl-6' style={{color:'black'}}>QMEX </h1>
                            <h1 className='display-3 text-white d-inline' style={{marginLeft: '-0.6rem' }}>{this.props.content?.titel}</h1>
                            <ReactMarkdownWithHtml allowDangerousHtml className='text-white pl-6'>{this.props.content?.tekst}</ReactMarkdownWithHtml>
                        </Col>
                    </Row>
                   
                        {this.props.content.fotoUrl && <img className="position-absolute"
                            style={{ right: "10vw", bottom: "-6rem", width: "max(33vw,328px)" }} src={this.props.content.fotoUrl} />
                        }
                </Container>
            </div>
        );
    }


    getBGStyle(titel) {
        switch (titel) {
            case "WARMTEPOMP": return 'bg-roodbruin';
            case "AIRCO": return 'bg-aicro';
            case "VRF SYSTEEM": return 'bg-vrf';
            case "ACCESSORIES": return 'bg-acces';
        }
    }

   
}