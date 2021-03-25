import React, { Component,Fragment } from 'react';
import { Jumbotron, InputGroup, Form, Col, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelope, faUser, faPen } from '@fortawesome/free-solid-svg-icons';


export default class ContactForm extends Component{
    constructor(props) {
        super(props);

        this.state = { };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(ev) {
        ev.preventDefault();
        }
     

    handleChange(e) {
    this.setState({
        [e.target.id]: e.target.value
    })
}


    render() {
        const Phone = <FontAwesomeIcon icon={faPhoneSquareAlt} className="text-dark" size="lg" />;
        const Email = <FontAwesomeIcon icon={faEnvelope} className="text-dark" size="lg" />;
        const User = <FontAwesomeIcon icon={faUser} className="text-dark" size="lg"/>;
        const Pen = <FontAwesomeIcon icon={faPen} className="text-dark" size="lg"/>;

        return (
            <Fragment >
                <Form onSubmit={this.handleSubmit}  >
                            <Form.Row>
                        <Form.Group as={Col}>
                            <InputGroup>
                                <InputGroup.Prepend >
                                    <InputGroup.Text>{User}</InputGroup.Text>
                                        </InputGroup.Prepend>
                                <Form.Control onChange={this.handleChange} id="contactFirst" placeholder="First Name" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>{User}</InputGroup.Text>
                                        </InputGroup.Prepend>
                            <Form.Control onChange={this.handleChange} id="constactLast" placeholder="Last Name" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>{Email}</InputGroup.Text>
                                        </InputGroup.Prepend>
                            <Form.Control onChange={this.handleChange} id="contactEmail" placeholder="email" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>{Phone}</InputGroup.Text>
                                        </InputGroup.Prepend>
                            <Form.Control onChange={this.handleChange} id="contactPhone" placeholder="Phone number" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>{Pen}</InputGroup.Text>
                                        </InputGroup.Prepend>
                            <Form.Control onChange={this.handleChange} id="contactSubject" type="subject" placeholder="Subject" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                        <Form.Control onChange={this.handleChange} as="textarea" rows={6} placeholder="Message" id="contactMessage" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                            <Button id="toggle" className="contactForm_button text-white" variant="primary" type="submit" data-toggle="tooltip" data-placement="bottom" title="Submit your question!" >Submit</Button>
                                </Col>
                            </Form.Row>

                        </Form>
                </Fragment >
            );
    }
}