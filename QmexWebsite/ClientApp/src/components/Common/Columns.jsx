import React, { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';

const Columns = (props) => {
    // maak een kopie van de props, verwijder de props die we zelf al gebruiken
    // en de props die overblijven, zetten we als attribuut op de html. (bijvoorbeeld een 'id')
    const myprops = ['className', 'children', 'fluid'];
    let propkopie = { ...props };
    myprops.forEach((p) => delete propkopie[p]);

    const newclass = (props.className) ? props.className + " row justify-content-md-center" : "row justify-content-md-center";

    return (
        <Container fluid={props.fluid}>
            <Row className={newclass} {...propkopie} >
                    {props.children.map((child, index) => <Fragment key={index}>{child}</Fragment>)}
            </Row>
        </Container>
    );
}

export default Columns;