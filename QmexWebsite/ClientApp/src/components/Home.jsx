﻿import React, { Component,  Fragment } from 'react';
import CFLoader from './Contentful/CFLoader';
import { Col, Row, Container } from 'react-bootstrap';
import Columns from './Common/Columns';
import Kaart from './Contentful/Kaart/Kaart';
import Verhaal from './Contentful/Verhaal/Verhaal';
import Titel from './Contentful/Verhaal/Titel';
import WidthContainer from './Common/WidthContainer'
import VMFJumbo from './Contentful/VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import HomeWaarden from './Qmex/HomeWaarden';

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
                    <VMFJumbo content={this.props.content.banner.fields} height="82vh" cover pos="bottomleft" />    
                </div>

                <Container fluid div id="home_verhaal" className="my-5">
                    <Row>
                        {
                          this.props.content.inleiding.map( (inleiding,i) => (
                              <Col  id={"section_" + i}>
                                  { i === 0 && <Verhaal className="text-left" content={inleiding.fields} />}
                                  { i === 1 && <Container fluid id="home_verhaalR"><Row><Col xl={8} lg={8} md={11} ><Verhaal className="text-left" content={inleiding.fields} /></Col><Col xl={4} lg={4} md={1} ></Col></Row></Container>}
                               </Col>
                            ))
                        }
                        </Row>
                </Container>

             
                <div className="home_productInleiding text-center " >
                    <Titel content={this.props.content.productInleiding.fields} />
                </div>

                <div className="home_kaarten mb-6">
                    <Columns fluid  >
                    {
                            this.props.content.producten.map((k, id) => (
                                <Col key={id} md={6} xl={3} sm={12}>
                                    <Kaart content={k.fields} className="home_kaart" button />
                            </Col>
                           ))
                    }
                    </Columns>
                </div>

                <HomeWaarden content={this.props.content} />
               
                <WidthContainer width={1} className="my-6 py-3">
                        <VerhaalMetFoto id="home_qmex"
                            content={this.props.content?.homeTweedeBanner.fields} style={{paddingLeft:"30px"}} />
                </WidthContainer>
               

                <div className="my-6 pt-3 position-relative" >
                    <div>
                        <VMFJumbo content={this.props.content.blogBanner.fields} height="max(275px, 28vw)" cover 
                            id="home_blogBanner" pos="bottomhardleft" sign='/img/home_blogsign2.png' />
                    </div>
                </div>

            </Fragment>
        );
    }
}
