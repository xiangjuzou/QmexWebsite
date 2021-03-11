import React from 'react';
import { Col } from 'react-bootstrap';
import Columns from './Columns';


// maakt een bootstrap-tabel met links en rechts 2 lege kolommen met breedte md= opgegeven width en content in het midden
// Props: 
// - width:  1,2,3,4,5 : Geeft de breedte aan van de "lege" zijkanten. (in bootstap tabel eenheden)
const WidthContainer = (props) => {
    const myprops = ['children', 'width'];
    let propkopie = { ...props };
    myprops.forEach((p) => delete propkopie[p]);

    // bepaal de breedte van de "lege kolomen" links en rechts.
    let legeCol = "";
    let MdMidden = 12;
    let SmMidden = 12;
    if (props.width) {
        let smw = Math.floor(props.width / 2);
        legeCol = <Col sm={0} lg={smw} xl={props.width}></Col>;
        MdMidden = 12 - props.width * 2;
        SmMidden = 12 - smw *2;
    }

    return (
        <Columns {...propkopie} fluid>
            {legeCol}
            <Col sm={12} lg={SmMidden} xl={MdMidden}>
                {props.children}
            </Col>
            {legeCol}
        </Columns>
    );
}

export default WidthContainer;