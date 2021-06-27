﻿import React, { Component,  Fragment } from 'react';
import CFLoader from './Contentful/CFLoader';
import {Col} from 'react-bootstrap';
import Columns from './Common/Columns';
import Kaart from './Contentful/Kaart/Kaart';
import Verhaal from './Contentful/Verhaal/Verhaal';
import Titel from './Contentful/Verhaal/Titel';
import WidthContainer from './Common/WidthContainer'
import VMFJumbo from './Contentful/VerhaalMetFoto/VMFJumbo';
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
                <div id="home_topbanner" className="mb-5">
                    <VMFJumbo content={this.props.content.banner.fields} height="77vh" cover pos="bottomleft" />    
                </div>

                <WidthContainer width={1} id="home_verhaal" className="my-5">
                    <Columns>
                        {
                          this.props.content.inleiding.map( (inleiding,i) => (
                              <Col lg={6} sm={12} id={"section_" + i}>
                                  <Verhaal className="text-left" content={inleiding.fields}/>
                                </Col>
                            ))
                        }
                    </Columns>
                </WidthContainer>

             
                <div >
                    <Titel className="text-center mt-5" content={this.props.content.productInleiding.fields}  />
                </div>

                <div className="mb-5 home_kaarten">
                    <Columns fluid  >
                    {
                            this.props.content.producten.map((k, id) => (
                                <Col key={id} md={6} lg={6} xl={3} sm={12}>
                                    <Kaart content={k.fields} className="p-2" />
                            </Col>
                           ))
                    }
                    </Columns>
                </div>
 
                <div id="home_waarden" className="my-5 py-5">
                    <Columns>
                        {this.props.content.waarden.map((k, i) => <Col id={"kaart_" + i} style={{ padding:'0px', marginBottom:'10px'}} key={k.fields.name} md={12} lg={4} xl={4} sm={12}  >
                            <Kaart content={k.fields} linkimage  className="d-flex flex-column align-items-center text-dark p-5" /></Col>)}
                    </Columns>
                </div>
               
               
                <div className="my-5 home_news" >
                    <Titel className="text-center home_titel" content={this.props.content.brancheInleiding.fields} />
                    <WidthContainer width={1.5}>
                        <VerhaalMetFoto id="home_blog"
                            content={this.props.content.homeTweedeBanner.fields} style={{paddingLeft:"30px"}} />
                </WidthContainer>
               </div>

            </Fragment>
        );
    }
}
