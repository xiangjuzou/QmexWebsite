import React, { Component, Fragment } from 'react';
import CFLoader from './Contentful/CFLoader';
import Verhaal from './Contentful/Verhaal';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';

export default class Production extends Component {
    constructor(props) {
        super(props);

        if (!this.props.content) {
            CFLoader.LoadPage("4BKHmFQgYEfZsbJSCqaTiD", "production", this.props.statecallback);
        }
    }



    render() {
        if (!this.props.content) { return "Loading..."; }


        return (
            <Fragment>
                <div id="production_logistiek">
                    <Verhaal content={this.props.content.logistiek.fields} className="my-5" width={3} /> 
                </div>
                <div id="production_verhaal" >
                    <Verhaal content={this.props.content.productionVerhaal.fields} className="my-5"  width={3}  />
                </div>
                <div id="production_info" lg={6} md={12} className="text-white pl-5 " style={{width:'80%', margin:'auto'}}>
                    <VerhaalMetFoto lg={6} md={12} content={this.props.content.productionInfo.fields} />
                 </div>
            </Fragment>

        );
    }
}