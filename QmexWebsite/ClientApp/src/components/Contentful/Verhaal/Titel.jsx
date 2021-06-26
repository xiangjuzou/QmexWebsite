import React, { Component } from 'react';
import WidthContainer from '../../Common/WidthContainer';
import ReactMarkdownWithHtml from 'react-markdown/with-html';


// Props: 
// - width:  1,2,3,4,5 : Geeft de breedte aan van de "lege" zijkanten. (in bootstap tabel eenheden)
// - content           : De content van contenful (verhaal of verhaalmetfoto)
export default class Titel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // verzamel de "vreemde" props, en zet deze als attributen op de 1e div.
        const overgeblevenProps = { ...this.props };
        delete overgeblevenProps.width;
        delete overgeblevenProps.content;

        return (
            <div {...overgeblevenProps} >
                <WidthContainer width={this.props.width}>
                    <h2 className="my-4">{this.props.content?.titel}</h2>
                </WidthContainer>
            </div>
        );
    }
}

