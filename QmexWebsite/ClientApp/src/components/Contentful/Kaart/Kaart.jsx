import React, { Component, Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactMarkdownWithHtml from 'react-markdown/with-html';


// - overlay : plaatjes is achtergrond, ipv erboven
// - button : link is als een knop
// - linkimage : link op de hele kaart zonder linktekst
// - linktekst : tekst op de link of button
export default class Kaart extends Component {
    render() {
        const overlay = this.props.overlay ? "card-img-overlay" : "";
        const lt = this.props.linktekst ?? "lees meer";

        // card met button-link
        if (this.props.content?.linkUrl && this.props.button) {
            return (
                <Card style={{ marginBottom: "15px", height:"100%" }} className={this.props.className}  >
                    {this.renderCardBody(
                        <Button className="bg-primary" style={{ display: "inline-block" }}><Link className="text-white" style={{ textDecoration: 'none', fontSize:'18px' }} to={this.props.content?.linkUrl}>{lt}</Link></Button>
                    , overlay)}
                </Card>
            );
        }

        // card met link
        if (this.props.content?.linkUrl && !this.props.button && !this.props.linkimage) {
            return (
                <Card style={{ marginBottom: "15px", height: "100%" }} className={this.props.className}>
                    {this.renderCardBody(
                        <Link style={{ textDecoration: 'none', marginTop:'auto' }} to={this.props.content?.linkUrl}> &gt; {lt}</Link>
                    , overlay)}
                </Card>
            );
        }

        // hele kaart wel een link??
        if (this.props.content?.linkUrl && this.props.linkimage) {
            return (
                <Link className="text-white" style={{ textDecoration: 'none' }} to={this.props.content?.linkUrl}>
                    <Card className={this.props.className} >
                        {this.renderCardBody("", overlay)}
                    </Card>
                </Link>
            );
        }


        // anders card zonder link
        return (
            <Card style={{ borderWidth: '0', marginBottom: "15px" }} className={this.props.className}>
                {this.renderCardBody("", overlay)}
            </Card>
        );




    }


    renderCardBody(btn, overlay) {
        return (
            <Fragment>
                <Card.Img variant="top" src={this.props.content?.fotoUrl} />
                <Card.Body className={overlay}>
                    <Card.Text>
                        <ReactMarkdownWithHtml allowDangerousHtml>{this.props.content?.tekst}</ReactMarkdownWithHtml>
                    </Card.Text>
                     {btn}
                </Card.Body>
            </Fragment>
        );
    }
}