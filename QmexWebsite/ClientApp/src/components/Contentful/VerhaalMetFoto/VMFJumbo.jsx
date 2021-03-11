import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Jumbotron, Row, Col, Nav, Button, Container } from 'react-bootstrap';



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
                pos = "text-left  pl-5 pb-5";
                break;
            case "top":
                pos = "text-center pt-1";
                break;
         
            default:
                pos = "text-center lead text-dark";
                break;
        }

        return (
            <div style={this.getFotoStyle(this.props.cover)} {...overgeblevenProps} >
                <Container fluid >
                    <Row>
                        <Col className={pos}>
                            <h1 className='display-4'>{this.props.content?.titel}</h1>
                            <ReactMarkdown>{this.props.content?.tekst}</ReactMarkdown>
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