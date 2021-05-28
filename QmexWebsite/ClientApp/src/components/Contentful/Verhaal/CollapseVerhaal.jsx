import Hr from "../../Common/Hr";
import React from 'react';
import WidthContainer from '../../Common/WidthContainer';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

// Props: 
// - width:  1,2,3,4,5 : Geeft de breedte aan van de "lege" zijkanten. (in bootstap tabel eenheden)
// - content           : De content van contenful
// - last              : geeft aan dat het de laatste is (en dus lijn onder.)

// default "titel" zichtbaar, na klick "vouwt" de lange tekst uit.
const CollapseVerhaal = (props) =>  {
    // verzamel de "vreemde" props, en zet deze als attributen op de 1e div.
    const overgeblevenProps = { ...props };
    delete overgeblevenProps.width;
    delete overgeblevenProps.content;
    delete overgeblevenProps.last;
    delete overgeblevenProps.children;
    const uid = 'CV_' + uuid();


    return (
        <div {...overgeblevenProps} >

            <WidthContainer width={props.width}>
                <div>
                    <Hr />
                    <h2 className="d-flex" data-target={'#' + uid} data-toggle="collapse">{props.content?.titel}
                        <button className='btn_collapse btn-primary border text-white ml-auto'>
                            <FontAwesomeIcon icon={faArrowDown}  size="sm" />
                        </button>  
                    </h2>
                </div>
                <div className="collapse" id={uid}>
                    <ReactMarkdownWithHtml allowDangerousHtml>{props.content?.tekst}</ReactMarkdownWithHtml>
                    <div className="d-flex flex-wrap px-1">
                        {props.children}
                    </div>
                </div>
                {props.last && <Hr />}
            </WidthContainer>
        </div>
    );
}


export default CollapseVerhaal;