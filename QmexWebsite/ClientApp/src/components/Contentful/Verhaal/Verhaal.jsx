import React, { Component } from 'react';
import WidthContainer from '../../Common/WidthContainer';
import ReactMarkdownWithHtml from 'react-markdown/with-html';


// Props: 
// - width:  1,2,3,4,5 : Geeft de breedte aan van de "lege" zijkanten. (in bootstap tabel eenheden)
// - content           : De content van contenful
export default class Verhaal extends Component {
    constructor(props) {
        super(props);
        this.state = { uitgeklapt: false };
    }

     uitklappen = () =>{
        if (this.state.uitgeklapt) {
            this.setState({ uitgeklapt: false });
        } else {
            this.setState({ uitgeklapt: true });
        }
    }

    bepaalUitklapbareTekst() {
        // standaard: geen korte tekst, en dus geen button
        let tekst = this.props.content?.tekst;
        let btn = ""

        if (this.props.content?.kortetekst !== undefined
            && this.props.content?.kortetekst !== null
            && this.props.content.kortetekst.length > 0) {

            // wel een korte tekst, dus button, en kijken of de korte of lange tekst te zien is.
            if (this.state.uitgeklapt) {
                tekst = this.props.content?.tekst;
                btn = <button onClick={this.uitklappen}>Read less</button>
            } else {
                tekst = this.props.content.kortetekst;
                btn = <button onClick={this.uitklappen} className="mt-2">Read more</button>
            }
        }  

        return { btn: btn, tekst: tekst };
    }

    render() {
        const content = this.bepaalUitklapbareTekst();
        const newclass = (this.props.className) ? this.props.className : "my-5 py-5";

        // verzamel de "vreemde" props, en zet deze als attributen op de 1e div.
        const overgeblevenProps = { ...this.props };
        delete overgeblevenProps.className;
        delete overgeblevenProps.width;
        delete overgeblevenProps.content;

        let h1class = "";
        if (content.tekst) {
            h1class = "mb-5";
        }

        return (
            <div className={newclass} {...overgeblevenProps} >
                <WidthContainer width={this.props.width}>
                    <h1 className={h1class} display-3>{this.props.content?.titel}</h1>
                    <ReactMarkdownWithHtml allowDangerousHtml>{content.tekst}</ReactMarkdownWithHtml>
                        {content.btn}
                </WidthContainer>
            </div>
        );
    }
}

