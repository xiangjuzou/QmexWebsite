import React, { useState, useEffect } from 'react';
import CFLoader from './Contentful/CFLoader';
import { Link, withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const Search = withRouter((props) => {
    const [stateWords, setStateWords] = useState("");
    const [stateResult, setStateResult] = useState("loading");

    // update search data
    useEffect(() => {
        let words = props.location.search;
        if (words) {
            words = decodeURIComponent(words.substring(1)); // remove "?"
            if (words !== stateWords) {
                CFLoader.Search(words, callback);
                setStateWords(words);
            }
        }
        else {
            setStateResult("no search words");
        }
    }, [props.location.search]);

    const callback = (state) => {
        if (state) {
            props.statecallback(state);
            if (state.search.length === 0) {
                setStateResult("No results found");
            } else {
                setStateResult(""); // results found
            }
        } else {
            setStateResult("Search error");
        }
    }

    const findUrl = (name) => {
        if (!props.urls) {
            return "";
        }

        let namedUrl = name.replace("home", "");
        namedUrl = namedUrl.split(" ");
        if (namedUrl.length > 1) {
            namedUrl.pop();
        }
        namedUrl = "/" + namedUrl.join("/").toLowerCase();
        let url = props.urls.find(item => item.toLowerCase() === namedUrl)?.toLowerCase();

        if (url === namedUrl) {
            return url;
        }
        return url + ":" + namedUrl;
    }


    return (
        <div id="searchpage">
            <Container>
                <h1 className="my-5">Search result for {stateWords}</h1>
                <h2>{stateResult}</h2>
                {props.content && props.content.map(item => {
                    let url = findUrl(item.fields.name);
                    let found = (url.indexOf(":") === -1);

                    return (
                    <div className="mb-5">
                        <h3>{item.fields.name}</h3>
                        {!found && <h2 style={{ color: 'red' }}>{url}</h2>}
                        <p>{item.fields.tekst ?? item.fields.kortetekst}</p>
                        {found && <Link to={url}>Link</Link>}
                    </div>
                );})}
            </Container>
            
            <Container>
                <h1>Sitemap</h1>
                {props.urls && props.urls.map(item => (
                    <div className="mb-2">
                        <Link to={item}>{item}</Link>
                    </div>
                    ))}
            </Container>
        </div>
    );
});


export default Search;


