import React from "react";
import Verhaal from './Contentful/Verhaal/Verhaal';
import CFLoader from './Contentful/CFLoader';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';

const Privacy = (props) => {

    if (!props.content) {
        CFLoader.LoadPage("2FpNFHyS9QnCKSan0c2C7z", "privacy", props.statecallback);

        return <div>loading...</div>;
    }


    const getVerhaal = (gi) => {
        switch (gi.sys.contentType.sys.id) {
            case "story": return <Verhaal content={gi.fields} className="flex-basis-1 container mt-5 mb-3 pl-4" />;
            case "verhaalmetfoto": return <VerhaalMetFoto content={gi.fields} className="flex-basis-1" />;
        }
    }


    return (
            <div className="d-flex flex-wrap" id="blogdetail">
                {props.content.verhalen?.map((gi) => getVerhaal(gi))}
            </div>
    )
}

export default Privacy;