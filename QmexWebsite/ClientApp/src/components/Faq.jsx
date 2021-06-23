import React, {  Fragment } from 'react';
import CollapseVerhaal from './Contentful/Verhaal/CollapseVerhaal';
import VMFJombo from './Contentful/VerhaalMetFoto/VMFJumbo';
import CFLoader from './Contentful/CFLoader';


// props:
// - content       : contenful content
function Faq(props) {
    if (!props.content) {
        CFLoader.LoadPage("08mA3oAFEP2bdyOYBnw4d", "faq", props.statecallback);

        return <div>loading...</div>;
    }

 
    return (
        <Fragment>
            <VMFJombo content={props.content.verhalen[0].fields} height="50vh" className="mb-5 faq_banner" />
            <div className="mx-auto" style={{ width: '80%' }}>
                {props.content.verhalen?.map((mi, i, arr) => (i===0)? <Fragment /> : 
                    <CollapseVerhaal content={mi.fields} width={1} last={(i === arr.length - 1)} />
                )}
            </div>
        </Fragment>
    );
}


export default Faq;
