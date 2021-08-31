import React, { Component } from 'react';
import WidthContainer from '../../Common/WidthContainer';
import { Col } from 'react-bootstrap';


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
                    <Col>
                        <h2 id="titel" className="mt-5 text-center position-relative f-roboto">{this.props.content?.titel}</h2>
                        <div className="mx-auto mb-4" style={{ borderTop: "5px #f48c00 solid", width: '100px', boxShadow: '0px 3px 1px #ccc' }} />
                    </Col>
                </WidthContainer>
            </div>
        );
    }
}

