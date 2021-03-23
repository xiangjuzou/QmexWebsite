import React, { Component, Fragment } from "react";
import Verhaal from './Contentful/Verhaal/Verhaal';
import VMFJumbo from './Contentful/VerhaalMetFoto/VMFJumbo';
import VerhaalMetFoto from './Contentful/VerhaalMetFoto/VerhaalMetFoto';

const Blog = (props) => {
    return (
        <Fragment>
            <div id="Blog_banner">
                <VMFJumbo content={props.content.banner.fields} height="77vh" />
            </div>

            <div id="Blog_inleiding">
                <Verhaal className="text-center bg-white my-3 py-5" content={props.content.inleiding.fields} width={3} />
            </div>
            
            <div>{props.content.Blogs.fields }</div>


            
        </Fragment>
        )
}

export default Blog;