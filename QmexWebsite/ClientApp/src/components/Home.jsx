import React, { Component,  Fragment } from 'react';
import CFLoader from './Contentful/CFLoader';
import {Col} from 'react-bootstrap';
import Columns from './Common/Columns';
import Kaart from './Contentful/Kaart/Kaart';
import Verhaal from './Contentful/Verhaal/Verhaal';
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
                <div id="home_topbanner" >
                    <VMFJumbo className="text-white" content={this.props.content.banner.fields} height="77vh" cover pos="bottomleft" />    
                </div>

                <div id="home_verhaal" className="position-relative" style={{color:'white'}}>
                    <Verhaal className="text-center my-5 py-5 " content={this.props.content.inleiding.fields} width={3} />
                </div>

                <div id="home_waarden" className="my-5 py-5 position-relative" style={{display: 'white' }} >
                       <Columns >
                            <Col lg={4} className="text-center">{WaardOne}</Col>
                            <Col lg={4} className="text-center">{WaardTwo}</Col>
                            <Col lg={4} className="text-center">{WaardThree}</Col>
                            {this.props.content.waarden.map(k => <Col>
                            <Kaart key={k.fields.name} content={k.fields} className="d-flex text-center" /></Col>)}
                        </Columns>
                 </div>
            
                <div >
                    <Verhaal className="text-center my-3  home_assotiment " content={this.props.content.productInleiding.fields}  />
                </div>

                <div className="mt-5 mb-5 home_kaarten"  >
                    <Columns fluid  >
                    {
                            this.props.content.producten.map((k, id) => (
                                <Col key={id} md={4} lg={4} sm={12}>
                                    <Kaart content={k.fields} className="mx-1" />
                            </Col>
                           ))
                    }
                    </Columns>
                </div>

                <div >
                    <Verhaal className="text-center my-4 pt-3 " content={this.props.content.brancheInleiding.fields} />
                </div>  


                <WidthContainer width={1} id="homeTweedeBanner">
                    <VerhaalMetFoto 
                        content={this.props.content.homeTweedeBanner.fields} className="text-white bg-secondary pl-5 mb-3"/>
                </WidthContainer>

                
                
            </Fragment>
        );
    }
}
