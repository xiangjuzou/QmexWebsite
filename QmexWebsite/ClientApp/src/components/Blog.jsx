import React, { Component, Fragment } from "react";
import Verhaal from './Contentful/Verhaal/Verhaal';
import VMFJumbo from './Contentful/VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';
import CFLoader from './Contentful/CFLoader';

const Blog = (props) => {

    if (!props.content) {
        CFLoader.LoadPage("1rJZpRzVDXeWemiJ6Gn79W", "blog", props.statecallback);
    }

    return (
        <Fragment>
            <div id="Blog_banner">
                <VMFJumbo content={props.content?.banner.fields} height="40vh" />
            </div>

            <div id="Blog_inleiding">
                <Verhaal className="text-center bg-white my-3 py-5" content={props.content?.inleiding.fields} width={3} />
            </div>

            <div><VerhaalMetFoto content={props.content?.blogs.fields} /></div>


            
        </Fragment>
        )
}

export default Blog;