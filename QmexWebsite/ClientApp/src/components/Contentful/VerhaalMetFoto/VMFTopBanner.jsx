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
        delete overgeblevenProps.height;
        delete overgeblevenProps.cover;

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
                        <Col className="ml-auto py-6 pl-6 productTopbanner">
                            <h1 className='display-4 d-inline font-weight-bold pl-5' style={{color:'black'}}>QMEX </h1>
                            <h1 className='display-4 text-white d-inline' style={{marginLeft: '-0.6rem' }}>{this.props.content?.titel}</h1>
                            <ReactMarkdownWithHtml allowDangerousHtml className='text-white pl-5'>{this.props.content?.tekst}</ReactMarkdownWithHtml>
                        </Col>
                    </Row>
                   
                        {this.props.content.fotoUrl && <img className="position-absolute"
                            style={{ right: "10vw", bottom: "-6rem", width: "max(33vw,325px)" }} src={this.props.content.fotoUrl} />
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
            case "ACCESSORIES": return 'bg-success';
        }
    }

    getFotoStyle(cover) {
        // hoogte
        let h = '100%';
        if (this.props.height) { h = this.props.height }
        // positie
        let alignitems = "";
        let bgpos = "";
        switch (this.props.pos) {
            case "bottomleft":
                alignitems = "flex-end";
                bgpos = "center right";
                break;
            case "left":
                alignitems = "center";
                bgpos = "center";
                break;
            case "top":
                alignitems = "flex-start";
                bgpos = "center 5rem";
                break;
            default:
                alignitems = "center";
                bgpos = "center";
                break;
        }

        let style = {
            height: h,
            alignItems: alignitems,
            display: "flex"
        }

        if (this.props.content?.fotoUrl === undefined || this.props.content?.fotoUrl === null) {
            return style;
        }

        // add styles for background image
        style.backgroundImage = "url(" + this.props.content?.fotoUrl + ") ";
        style.backgroundPosition = bgpos;
        style.backgroundRepeat = 'no-repeat';
        if (cover) {
            style.backgroundSize = 'cover';
        }
        return style;
    }
}