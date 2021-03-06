import React, { Component, Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactMarkdownWithHtml from 'react-markdown/with-html';


// - overlay : plaatjes is achtergrond, ipv erboven
// - button : link is als een knop
export default class OneKaart extends Component {
    render() {
        const overlay = this.props.overlay ? "card-img-overlay" : "";
        const lt = this.props.linktekst ?? "Bekijk meer";

        // card met button-link
        if (this.props.content?.linkUrl && this.props.button) {
            return (
                <Card style={{ marginBottom: "15px" }} className={this.props.className} >
                    {this.renderCardBody(
                        <Button variant="primary">
                            <Link className="text-white p-1 lead" to={this.props.content?.linkUrl}>{lt}</Link></Button>
                        , overlay)}
                </Card>
            );
        }

        // card met link
        if (this.props.content?.linkUrl && !this.props.button) {
            return (
                <Card style={{ marginBottom: "15px" }} className={this.props.className}>

                    {this.renderCardBody(
                        <Link to={this.props.content?.linkUrl}>{lt}</Link>
                        , overlay)}

                </Card>
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