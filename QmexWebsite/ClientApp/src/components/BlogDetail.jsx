import React, { Component, Fragment } from "react";
import Verhaal from './Contentful/Verhaal/Verhaal';
import CFLoader from './Contentful/CFLoader';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';

const BlogDetail = (props) => {

    if (!props.content) {
        CFLoader.LoadPage(props.id, "blog_"+ props.slug, props.statecallback);
        return <div>Loading...</div>
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
    );


}

export default BlogDetail;