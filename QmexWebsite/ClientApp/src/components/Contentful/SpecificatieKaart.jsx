import React, { Component, Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import Hr from '../Common/Hr';

export default class SpecificatieKaart extends Component {
    constructor(props) {
        super(props);

        this.attributen = [
            { afk: 'ac', name: 'Artikelcode', eenh: '' },
            { afk: 'c', name: 'Capaciteit', eenh: 'BTU/h' },
            { afk: 'm2', name: 'voor ruimtes van-tot', eenh: 'm2' },
            { afk: 'label', name: 'Koelen/Verwarmen energielabel', eenh: '' },
            { afk: 'combi', name:'Combinatie mogelijkheden met binnenunits', eenh:''},
            { afk: 'kv', name: 'Koelen/Verwarmen', eenh: '' },
            { afk: 'middel', name: 'Koudemiddel', eenh: '' },
            { afk: 'type', name: 'Type', eenh: '' },
            { afk: 'capkv', name: 'Capaciteit koelen/verwarmen', eenh:''},
            { afk: 'capk', name: 'Capaciteit koelen', eenh: 'w' },
            { afk: 'capv', name: 'Capaciteit verwarmen', eenh: 'w' },
            { afk: 'apf', name: 'Koelen/Verwarmen Apf', eenh: 'W/W' },
            { afk: 'gelin', name: 'Geluidsniveau Binnenunit', eenh: 'dB(A)' },
            { afk: 'geout', name: 'Geluidsniveau Buitenunit', eenh: 'dB(A)' },
            { afk: 'geluids', name: 'Geluidsniveau', eenh: 'dB(A)' },
            { afk: 'na', name: 'Neto afmetingen', eenh: '' },
            { afk: 'sree', name: 'Koelen Seer', eenh: 'W/W' },
            { afk: 'scop', name: 'Koelen Scop', eenh: 'W/W' },
            { afk: 'nain', name: 'Neto afmetingen Binnenunit', eenh: '' },
            { afk: 'nainyv', name: 'Neto afmetingen binnenunit YV-serie', eenh: 'mm' },
            { afk: 'vp', name: 'Verpakkingsafmeting', eenh: '' },
            { afk: 'vain', name: 'Verpakkingsafmeting', eenh: '' },
            { afk: 'vaout', name: 'Verpakkingsafmeting Buitenunit', eenh: 'mm' },
            { afk: 'gew', name: 'Netto/Bruto gewicht ', eenh: '' },
            { afk: 'gewout', name: 'Netto/Bruto gewicht Buitennunit', eenh: 'kg' },

            { afk: 'wkoper', name: 'Wanddikte koperleiding', eenh: 'mm' },
            { afk: 'wiso', name: 'Wanddikte isolatieleiding', eenh: 'mm' },
            { afk: 'lengte', name: 'Lengte', eenh: 'm' }
        ];

    }

    getKenmerk(a, attr) {

        return (
            <div style={{fontSize: "13px"}}>
                <strong>{a.name}</strong> <br />
                <div>
                    <ReactMarkdownWithHtml allowDangerousHtml>{attr[a.afk] + ' ' + a.eenh}</ReactMarkdownWithHtml> 
                </div>
                <Hr />
            </div>
        );
    }

    render() {

        let attr = this.props.content?.attributen;
        if (!attr) {
            return <Fragment />;
        }
       
        return (
            <Card style={{ borderWidth: '0', marginBottom: "15px" }} className={this.props.className + " bg-light"}>
                <Card.Body>
                    <Card.Text>
                        <div>
                            <ReactMarkdownWithHtml allowDangerousHtml>{this.props.content?.tekst}</ReactMarkdownWithHtml>
                            </div>
                        {this.attributen.map(a => attr[a.afk] ? this.getKenmerk(a,attr) : <Fragment />)}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}