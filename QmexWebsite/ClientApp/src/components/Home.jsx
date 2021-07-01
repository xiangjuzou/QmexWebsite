import React, { Component,  Fragment } from 'react';
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
                              <Col lg={6} md={12} id={"section_" + i}>
                                  { i === 0 && <Verhaal className="text-left" content={inleiding.fields} />}
                                  { i === 1 && <Container fluid><Row><Col xl={7} lg={12}><Verhaal className="text-left" content={inleiding.fields} /></Col><Col xl={5} lg={12}></Col></Row></Container>}
                               </Col>
                            ))
                        }
                        </Row>
                </Container>

             
                <div className="home_productInleiding text-center" >
                    <Titel content={this.props.content.productInleiding.fields} />
                </div>

                <div className="home_kaarten mb-6">
                    <Columns fluid  >
                    {
                            this.props.content.producten.map((k, id) => (
                                <Col key={id} md={6} lg={6} xl={3} sm={12}>
                                    <Kaart content={k.fields} className="home_kaart" button />
                            </Col>
                           ))
                    }
                    </Columns>
                </div>
 
                <div id="home_waarden" className="my-6 py-3 mx-auto" style={{ width: "80%" }} >
                    <Columns fluid>
                        {this.props.content.waarden.map((k, i) => <Col id={"kaart_" + i} style={{ marginBottom:'10px'}} key={k.fields.name} md={4} lg={4} xl={4} sm={12}  >
                            <Kaart content={k.fields} linkimage  className="text-white text-center mx-1" /></Col>)}
               
                   </Columns>
                </div>
               
               
                <div className="my-6 py-3" >
                 
                 <WidthContainer width={1}>
                        <VerhaalMetFoto id="home_qmex"
                            content={this.props.content?.homeTweedeBanner.fields} style={{paddingLeft:"30px"}} />
                </WidthContainer>
                </div>

                <div className="my-6 pt-3 position-relative" >
                    <div >
                        <VMFJumbo content={this.props.content.blogBanner.fields} height="max(275px, 33vw)" cover id="home_blogBanner"  pos="bottomleft"  />
                    </div>
                </div>

            </Fragment>
        );
    }
}
