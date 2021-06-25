import React, { Component } from 'react';
import CFLoader from './Contentful/CFLoader';
import Kaart from './Contentful/Kaart/Kaart';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';
import VMFJumbo from './Contentful/VerhaalMetFoto/VMFJumbo';
import Verhaal from './Contentful/Verhaal/Verhaal';
import WidthContainer from './Common/WidthContainer';
import { Col } from 'react-bootstrap';
import Columns from './Common/Columns';


export default class About extends Component {
    constructor(props) {
        super(props);

        if (!this.props.content) {
            CFLoader.LoadPage("626BaVtkrNibZt5aOcM6oe", "about", this.props.statecallback);
        }
    }



    render() {
        if (!this.props.content) { return "Loading..."; }

        let topbanner = this.props.content.verhalen[0];
        let topverhaal = this.props.content.verhalen[1];
        let verhalen = [...this.props.content.verhalen];
        verhalen.splice(0, 2);

        return (
        <div id="about_topbanner" className="position-relative" >
        <VMFJumbo content={topbanner.fields} height="60vh" cover id="topbanner"/>

        <div style={{ width: '80%', top: '-250px' }} className="bg-light mx-auto position-relative">
            <div id="about_kaarten"  >
                <Columns fluid>
                    {
                        this.props.content.kaarten.map((k) => (
                            <Col id='aboutKaart' key={k.fields.name} md={6} lg={6} xl={3} sm={12} className='m-2 pt-5 text-center'>
                                <Kaart content={k.fields} />
                            </Col>
                        ))
                    }
                </Columns>
            </div>
            <VMFJumbo height="40vh"  content={this.props.content.banner.fields} />
                           
            <div id="about_topverhaal"  className="p-3 text-left">
                    <Verhaal content={topverhaal.fields} width={3} />
            </div>
        </div>
        <div className="text-center position-relative" style={{ top: '-100px' }}>
            <Columns>
                {
                    this.props.content?.gallery.map((k, index) => (
                        <Col key={index} md={4} sm={12}>
                            <Kaart content={k.fields} />
                        </Col>
                    ))
                }
            </Columns>
        </div>
        <div className="mx-auto" >
            <WidthContainer width={1} id="about_sidefotos">
                {verhalen.map((v, i) => <VerhaalMetFoto reverse={i % 2} content={v.fields} className="mb-5" />)}
            </WidthContainer>
        </div>
        <div className="mt-6 pt-6"> 
            <Verhaal className="mb-5 text-center" content={this.props.content.showcaseInleiding.fields} />
            <WidthContainer width={1} >
                <VerhaalMetFoto content={this.props.content.showcase.fields} id="about_showcase" style={{ backgroundColor: "#f4f3f3", paddingLeft:"20px" }}/>
            </WidthContainer>
        </div>

    </div>
        );
    }
}






