import React, { Component, Fragment } from 'react';
import CFLoader from './Contentful/CFLoader';
import VMFJombo from './Contentful/VerhaalMetFoto/VMFJumbo';
import Verhaal from './Contentful/Verhaal/Verhaal';
import WidthContainer from './Common/WidthContainer';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';

export default class SupportDetail extends Component {
    constructor(props) {
        super(props);

        if (!this.props.content) {
            switch (this.props.page) {
                case "supportdiensten":
                    CFLoader.LoadPage("7IvQi3D1o2Qc1xwJfGoN01", "supportdiensten", this.props.statecallback);
                    break;
                case "supportproductdevelopment":
                    CFLoader.LoadPage("70zXKrVG1GD5BcgwwYGywT ", "supportproductdevelopment", this.props.statecallback);
                    break;
                case "supportsubsidies":
                    CFLoader.LoadPage("4nY34Ickcp0NKDmJZ1wbXj ", "supportsubsidies", this.props.statecallback);
                    break;
                case "supportgrantie":
                    CFLoader.LoadPage("5sw1q9tGnvyzFQdMPKLvC6 ", "supportgrantie", this.props.statecallback);
                    break;
                case "supportdownloads":
                    CFLoader.LoadPage("paginaDienstDetail ", "supportdownloads", this.props.statecallback);
                    break;
                case "supportvideo":
                    CFLoader.LoadPage("3kwmkicombbPES9YJmK394 ", "supportvideo", this.props.statecallback);
                    break;
                default: break;
            }
        }
    }


    render() {
        if (!this.props.content) { return "Loading..."; }


        const lijstZonderEerste = this.props.content.verhalen.slice(1);

        return (
            <Fragment>
                <div id="supportdetail_main_content">
                    <VMFJombo content={this.props.content.verhalen[0].fields} pos="top" height="40vh" />
                    <WidthContainer width={1}>
                        {lijstZonderEerste.map((v) => this.kiesComponent(v))}
                    </WidthContainer>
                </div>
            </Fragment>
        )
    }

    kiesComponent(v) {
        switch (v.sys?.contentType.sys.id) {
            case "verhaalmetfoto":
                return <VerhaalMetFoto content={v.fields} />
            default:
                return <Verhaal content={v.fields} width={2} />
        }
    }
}