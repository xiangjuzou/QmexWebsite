import React from 'react';
import { Col } from 'react-bootstrap';
import Columns from '../Common/Columns';
import Kaart from '../Contentful/Kaart/Kaart';

import './HomeWaarden.css';

const HomeWaarden = (props) => {

    return (
        <div className="home_waarden my-6 py-3 mx-auto" >
          
            <Columns >
                {props.content.waarden.map((k, i) =>
                    <Col className="waarden_kaart" key={k.fields.name} lg={4} md={12}>
                        <Kaart content={k.fields} clickall overlay className={`kaart_${i} text-white text-center mx-2`} />
                    </Col>)}
            </Columns>
        </div>
    );
};

export default HomeWaarden;