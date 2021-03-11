import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './global.css';

import Home from './components/Home';
import Header from './components/Qmex/Header';
import Footer from './components/Qmex/Footer';
import Service from './components/Service';
import Production from './components/Production';
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Search from './components/Search';
import ServiceDetail from './components/ServiceDetail';
import CFLoader from './components/Contentful/CFLoader';



export default class App extends Component {
    displayName = App.name

    constructor(props) {
        super(props);

        // other links. deep links needs extra slash!
        this.links = [
            { to: '/privacy', title: 'Privacy Policy', render: () => <h1>Privacy policy</h1> },
            { to: '/services/marketing', title: 'Marketing', render: () => <ServiceDetail content={this.state.dienstInkoop} page='dienstInkoop' statecallback={this.saveState} /> },
            { to: '/services/OEM', title: 'OEM', render: () => <ServiceDetail content={this.state.dienstOEM} page='dienstOEM' statecallback={this.saveState} /> },
            { to: '/search', title: 'Search', render: () => <Search content={this.state.search} urls={this.state.urls} statecallback={this.saveState} /> },

            { to: '/', title: 'Home', render: () => <Home content={this.state.home} statecallback={this.saveState} /> },

            { to: '/products', title: 'Products', render: () => <div>Loading...</div> },
            { to: '/services', title: 'Services', render: () => <Service content={this.state.services} statecallback={this.saveState}/> },
            { to: '/production', title: 'Production', render: () => <Production content={this.state.production} statecallback={this.saveState} /> },
            { to: '/about', title: 'About us', render: () => <About content={this.state.about} statecallback={this.saveState}/> },
            { to: '/contact', title: 'Contact', render: () => <Contact content={this.state.contact} statecallback={this.saveState} /> }
        ];

        // menu en footer items 
        this.FooterlinksLeft = [this.links[4], this.links[5], this.links[6]];
        this.FooterlinksMiddle = [this.links[8], this.links[9], this.links[0]];
        this.menulinks = this.links.slice(4);

        // get all url's from the basic-route's and save them for the search. (products added later.)
        let urls = this.links.map(l => l.to);
        this.state = { urls: urls };

        // product groepen en slugs ophalen van contentful
        CFLoader.LoadPage("6MjPYhDBXepG4aLs1fNcIZ", "product", this.saveState);
        CFLoader.LoadSlugs(this.saveState);
    }



    // de pagina's laden 'hun' state van contentful en bewaren het in app-state.
    saveState = (state) =>  {
        this.setState(state);

        if (Object.keys(state)[0] == 'product') {
            let p = state.product.hoofdmenuitems[0];

            this.links[5] = {
                to: '/products', title: 'Products', render: () =>
                                <Products content={this.state['product_' + p.fields.slug]}
                                    statecallback={this.saveState}
                                    id={p.sys.id}
                                    slug={p.fields.slug}
                                    menu={this.state.product}
                                    submenu={this.state['product_' + p.fields.slug]} />
            };

            // add hoofdmenu's to urls list
            this.addUrlsTostate(state.product.hoofdmenuitems);
        }

        // add product urls to urls list
        if (Object.keys(state)[0] == 'slug') {
            this.addUrlsTostate(state.slug);
        }
    }

    addUrlsTostate(CFurls) {
        const producturls = CFurls.map(s => "/products/" + s.fields.slug);
        const newurls = [...this.state.urls].concat(producturls);
        this.setState({ urls: newurls });

    }

   
    render() {
        console.log("APPSTATE:", this.state);

        if (!this.state.product) { return "loading product menu..." }
        if (!this.state.slug) { return "loading products..." }

      
        return  (
            <Router>
                <Fragment>
                    <Header menulinks={this.menulinks} />
                    <main className="mb-5">
                        {/* onze 'harde' links */}
                        {this.links.map((ml) => (
                            <Route exact path={ml.to} render={ml.render} />
                        ))}

                        {/* De hoofdmenuitem links met de slug van contentful */}
                        {this.state.product.hoofdmenuitems.map((p) => (
                            <Route exact path={"/products/" + p.fields.slug} render={() =>
                                <Products content={this.state['product_' + p.fields.slug]}
                                    statecallback={this.saveState}
                                    id={p.sys.id}
                                    slug={p.fields.slug}
                                    menu={this.state.product}
                                    submenu={this.state['product_' + p.fields.slug]} />} />
                        ))}

                        {/* De product links met de slug van contentful */}
                        {this.state.slug.map((p) => (
                            <Route exact path={"/products/" + p.fields.slug} render={() =>
                                <Products content={this.state['product_' + p.fields.slug]}
                                    statecallback={this.saveState}
                                    id={p.sys.id}
                                    slug={p.fields.slug}
                                    menu={this.state.product}
                                    submenu={this.state['product_' + p.fields.slug.split('/')[0]]} />} />
                            ))}

                    </main>
                    <Footer navitemsLeft={this.FooterlinksLeft} navitemsMiddle={this.FooterlinksMiddle} />
                </Fragment>
            </Router>
        );
    }
}
