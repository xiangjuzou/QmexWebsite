import React, { Component, Fragment } from "react";
import Verhaal from './Contentful/Verhaal/Verhaal';
import VMFJumbo from './Contentful/VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';
import CFLoader from './Contentful/CFLoader';
import OneKaart from './Contentful/Kaart/OneKaart';

const Blog = (props) => {

    if (!props.content) {
        CFLoader.LoadPage("1rJZpRzVDXeWemiJ6Gn79W", "blog", props.statecallback);
    }

    return (
        <Fragment>
            <div id="Blog_banner">
                <VMFJumbo content={props.content?.banner.fields} height="50vh" />
            </div>

            <div id="blog_section" className="mx-auto bg-white position-relative" style={{ width: '80%', top: '-150px' }}> 

            <div id="blog_inleiding">
                <Verhaal className="text-center my-3 py-5" content={props.content?.inleiding.fields} width={3} />
            </div>

                {props.content?.blogs && props.content?.blogs.map(b => (
                    <OneKaart key={b.fields.name} content={b.fields} linktekst="Lees meer" />    
                    ))}
                
                
            </div>
        </Fragment>
        )
}

export default Blog;