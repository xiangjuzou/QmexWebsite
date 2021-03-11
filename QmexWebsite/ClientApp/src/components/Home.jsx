import React, { Component, Fragment } from 'react';
import CFLoader from './Contentful/CFLoader';
import { Col, Container } from 'react-bootstrap';
import Columns from './Common/Columns';
import ReactMarkdown from 'react-markdown';

import Kaart from './Contentful/Kaart';
import Verhaal from './Contentful/Verhaal';
import WidthContainer from './Common/WidthContainer';
import VMFJumbo from './Contentful/VerhaalMetFoto/VMFJumbo';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faStar, faClock } from '@fortawesome/free-solid-svg-icons';


export default class Home extends Component {
    constructor(props) {
        super(props);

        if (!this.props.content) {
            CFLoader.LoadPage("c3pzHjdTf98FC3DscZGTa", "home", this.props.statecallback);
        }
    }

    

    render() {
        if (!this.props.content) { return "Loading..."; }
        const WaardOne = <FontAwesomeIcon icon={faSeedling} className="text-dark display-3" />;
        const WaardTwo = <FontAwesomeIcon icon={faStar} className="text-dark display-3" />;
        const WaardThree = <FontAwesomeIcon icon={faClock} className="text-dark display-3" />;

        return (
            <Fragment>
                <div id="home_topbanner">
                    <VMFJumbo content={this.props.content.banner.fields} height="70vh" />
                </div>

                <div id="home_verhaal">
                    <Verhaal className="text-center bg-white my-5 py-5" content={this.props.content.inleiding.fields} width={3} />
                </div>

                <div id="home_waarden" className="my-5 py-5" >
                       <Columns>
                            <Col lg={4} className="text-center">{WaardOne}</Col>
                            <Col lg={4} className="text-center">{WaardTwo}</Col>
                            <Col lg={4} className="text-center">{WaardThree}</Col>
                            {this.props.content.waarden.map(k => <Col>
                            <Kaart key={k.fields.name} content={k.fields} className="d-flex text-center" /></Col>)}
                        </Columns>
                 </div>
            
                <div >
                    <Verhaal className="text-center my-3 " content={this.props.content.productInleiding.fields}  />
                </div>
                <div className="home_kaarten bg-light py-3" >
                    <Columns className="py-5 " id="home_kaarten">
                    {
                        this.props.content.producten.map( (k,id) => (
                            <Col key={id} md={6} sm={12}>
                                <Kaart  content={k.fields} />
                            </Col>
                           ))
                    }
                    </Columns>
                </div>

                <div >
                    <Verhaal className="text-center my-4 pt-3 " content={this.props.content.brancheInleiding.fields} />
                </div>  

                <div id="homeTweedeBanner">
                    <VerhaalMetFoto className="text-white bg-secondary pl-5 "
                       content={this.props.content.homeTweedeBanner.fields} width={5} /> 
                 </div>
            </Fragment>
        );
    }
}
