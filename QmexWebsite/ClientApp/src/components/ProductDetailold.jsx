import React, { Component, Fragment } from 'react';
import { Jumbotron, Row, Col, Card, Button, Container, Nav } from 'react-bootstrap';

export default class ProductDetail extends Component {

    constructor(props) {
        super(props);

        this.state = { airco: false };
        this.AircoClick = this.AircoClick.bind(this);
    }



    AircoClick(e) {
        this.setState((oldstate, props) => ({ airco: !oldstate.airco }));
    }

    render() {

        let Aircodiv = (this.state.airco) ? <div style={{ background: 'red' }}>Airco info</div> : "";

        return (
            <Fragment>
                

        

                <div className="extends">
                    <p>Airco</p><button onClick={this.AircoClick}>BUTTON!</button>
                    {Aircodiv}
                    <p>Koekast</p><button></button>
                    <p>Warmtepomp</p><button></button>
                    <p>Warmtepomp</p><button></button>

                </div>



               

                </Fragment>

               );
            }
            }