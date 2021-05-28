import React, { Component } from 'react';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { Jumbotron, Row, Col, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


/* VMF JUMBO
 * 
 * props:
 * - content        (van contentful)
 * - pos: 
 *      - center    (default)
 *      - bottomleft
 * - height:        (string) height of jumbo.  (default: 100%)
 * - cover:         (boolean)  of het plaatje cover moet hebben of niet.
*/
export default class VMFJumbo extends Component {
    render() {
        // verzamel de "vreemde" props, en zet deze als attributen op de 1e div.
        const overgeblevenProps = { ...this.props };
        delete overgeblevenProps.pos;
        delete overgeblevenProps.content;
        delete overgeblevenProps.height;
        delete overgeblevenProps.cover;

        let pos = "";
        let text = "";
        switch (this.props.pos) {
            case "bottomleft":
                pos = "text-left ml-5 pl-5 pb-5";
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
            <div style={this.getFotoStyle(this.props.cover)} {...overgeblevenProps} >
                <Container fluid >
                    <Row>
                        <Col className={pos}>
                            <h1 className='display-4'>{this.props.content?.titel}</h1>
                            <ReactMarkdownWithHtml allowDangerousHtml>{this.props.content?.tekst}</ReactMarkdownWithHtml>
                            <div className="my-4">
                                {this.props.content?.moreUrl && <Link style={{ fontSize:'21px', textDecoration:'none'}} className="text-white bg-primary p-2"
                                    to={this.props.content.moreUrl}>{this.props.content?.moreUrlText}</Link>}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            );
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
                bgpos = "center";
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
            style.backgroundSize= 'cover';
        }
        return style;
    }
}