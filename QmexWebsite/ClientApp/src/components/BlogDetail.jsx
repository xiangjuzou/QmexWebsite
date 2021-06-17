import React, {useEffect, useState } from "react";
import Verhaal from './Contentful/Verhaal/Verhaal';
import CFLoader from './Contentful/CFLoader';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';
import {BrowserRouter as useParams} from 'react-router-dom';


const BlogDetail = (props) => {

    if (!props.content) {
        CFLoader.LoadPage(props.id, "blog_"+ props.slug, props.statecallback);
     
    }

    const getVerhaal = (gi) => {
        switch (gi.sys.contentType.sys.id) {
            case "story": return <Verhaal content={gi.fields} className="flex-basis-1 container mt-5 mb-3 pl-4" />;
            case "verhaalmetfoto": return <VerhaalMetFoto content={gi.fields} className="flex-basis-1" />;
            default: return <div/>
        }
    }

    return (
            <div className="d-flex flex-wrap" id="blogdetail">
                {props?.content?.verhalen?.map((gi) => getVerhaal(gi))}
            </div>
    );
}

export default BlogDetail;




const BlogDetail2 = (props) => {
    let { article } = useParams();
    const [contentful, setContentful] = useState(null);

    const callback = (data) => {
        setContentful(data); 
    }

    
    useEffect((props) => {
        let id = props.slug.find(s => s.fields.slug === article)?.sys.id;
        CFLoader.LoadPage(id, "blog", callback);
    }, [article]);


    const getVerhaal = (gi) => {
        switch (gi.sys.contentType.sys.id) {
            case "story": return <Verhaal content={gi.fields} className="flex-basis-1 container mt-5 mb-3 pl-4" />;
            case "verhaalmetfoto": return <VerhaalMetFoto content={gi.fields} className="flex-basis-1" />;
            default: return <div/>
        }
    }


    return (
        <div className="d-flex flex-wrap" id="blogdetail">
            {contentful?.blog?.verhalen?.map((gi) => getVerhaal(gi))}
        </div>
    );
}

export { BlogDetail2 };