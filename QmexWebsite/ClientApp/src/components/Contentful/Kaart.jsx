import React, { Component, Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

export default class Kaart extends Component {
    render() {
        // card met button-link
        if (this.props.content?.linkUrl && this.props.button) {
            return (
                <Card style={{ marginBottom: "15px" }} className={this.props.className} >
                    {this.renderCardBody(
                        <Button variant="outline-secondary" ><Link to={this.props.content?.linkUrl}>read more</Link></Button>
                    )}
                </Card>
            );
        }

        // card met link
        if (this.props.content?.linkUrl && !this.props.button) {
            return (
                <Card style={{ marginBottom: "15px" }} className={this.props.className}>
                    
                    {this.renderCardBody(
                        <Link to={this.props.content?.linkUrl}>read more</Link>
                    )}
                   
                </Card>
            );
        }

        // anders card zonder link
        return (
            <Card style={{ borderWidth: '0', marginBottom: "15px" }} className={this.props.className}>
                {this.renderCardBody("")}
            </Card>
        );
    }

    renderCardBody(btn) {
        return (
            <Fragment>
                <Card.Img variant="top" src={this.props.content?.fotoUrl}  />
                <Card.Body>
                    <Card.Text>
                        <ReactMarkdownWithHtml allowDangerousHtml>{this.props.content?.tekst}</ReactMarkdownWithHtml>
                    </Card.Text>
                    {btn}
                </Card.Body>
            </Fragment>
        );
    }
}