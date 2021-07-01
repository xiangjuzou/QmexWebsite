import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import './global.css';

import Home from './components/Home';
import Header from './components/Qmex/Header';
import Footer from './components/Qmex/Footer';
import Service from './components/Service';
import Production from './components/Production';
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Blog from './components/Blog';
import { BlogDetail2 } from './components/BlogDetail';
import Search from './components/Search';
import ServiceDetail from './components/ServiceDetail';
import Privacy from './components/Privacy';
import Faq from './components/Faq';
import CFLoader from './components/Contentful/CFLoader';



export default class App extends Component {
    displayName = App.name

    constructor(props) {
        super(props);

        // other links. deep links needs extra slash!
        this.links = [
            { to: '/privacy', title: 'Privacy', render: () => <Privacy content={this.state.privacy} statecallback={this.saveState} /> },
            { to: '/support/diensten', title: 'Diensten', render: () => <ServiceDetail content={this.state.dienst} page='dienst' statecallback={this.saveState} /> },
            { to: '/support/productdevelopment', title: 'Producte development', render: () => <ServiceDetail content={this.state.productdevelopment} page='productdevelopment' statecallback={this.saveState} /> },
            { to: '/support/subsidies', title: 'Subsidies', render: () => <ServiceDetail content={this.state.subsidies} page='subsidies' statecallback={this.saveState} /> },
            { to: '/support/grantie', title: 'Grantie', render: () => <ServiceDetail content={this.state.gratie} page='gratie' statecallback={this.saveState} /> },
            { to: '/support/downloads', title: 'Downloads', render: () => <ServiceDetail content={this.state.downloads} page='dienst' statecallback={this.saveState} /> },
            { to: '/support/video', title: 'Video', render: () => <ServiceDetail content={this.state.vedio} page='vedio' statecallback={this.saveState} /> },
            { to: '/search', title: 'Search', render: () => <Search content={this.state.search} urls={this.state.urls} statecallback={this.saveState} /> },
            { to: '/blog', title: 'BLOG', render: () => <Blog content={this.state.blog} urls={this.state.urls} statecallback={this.saveState} /> },
            { to: '/faq', title: 'FAQ', render: () => <Faq content={this.state.faq} statecallback={this.saveState} /> },

            { to: '/', title: 'HOME', render: () => <Home content={this.state.home} statecallback={this.saveState} /> },
            { to: '/products', title: 'PRODUCTEN', render: () => <div>Loading...</div> },
            { to: '/support', title: 'SUPPORT', render: () => <Service content={this.state.services} statecallback={this.saveState}/> },
           /* { to: '/production', title: 'Productie', render: () => <Production content={this.state.production} statecallback={this.saveState} /> },*/
            { to: '/about', title: 'OVER QMEX', render: () => <About content={this.state.about} statecallback={this.saveState}/> },
            { to: '/contact', title: 'CONTACT', render: () => <Contact content={this.state.contact} statecallback={this.saveState} /> }
        ];
        this.home = 10;

        // menu en footer items 
        this.FooterlinksLeft = [this.links[this.home+2], this.links[this.home+1], this.links[this.home+3]];
        this.FooterlinksMiddle = [this.links[9], this.links[8], this.links[this.home+4]];
        this.menulinks = this.links.slice(this.home);

        // get all url's from the basic-route's and save them for the search. (products added later.)
        let urls = this.links.map(l => l.to);
        this.state = { urls: urls };

        // product groepen en slugs ophalen van contentful
        CFLoader.LoadPage("6MjPYhDBXepG4aLs1fNcIZ", "products", this.saveState);
        CFLoader.LoadProductSlugs(this.saveState);
        CFLoader.LoadBlogSlugs(this.saveState);
        CFLoader.LoadTussenPaginaSlugs(this.saveState);
    }

    // de pagina's laden 'hun' state van contentful en bewaren het in app-state.
    saveState = (state) =>  {
        this.setState(state);
        if (Object.keys(state)[0] === 'products') {
            let p = state.products.hoofdmenuitems[0];

            this.links[this.home+1] = {
                to: '/products', title: 'Products', render: () =>
                                <Products content={this.state['products_' + p.fields.slug]}
                                    statecallback={this.saveState}
                                    id={p.sys.id}
                                    slug={p.fields.slug}
                                    menu={this.state.products}
                                    submenu={this.state['products_' + p.fields.slug]} />
            };

        // add hoofdmenu's to urls list
            this.addProductUrlsTostate(state.products.hoofdmenuitems);
        }

        // add product urls to urls list
        if (Object.keys(state)[0] === 'productslug' ) {
            this.addProductUrlsTostate(state.productslug);
        }
        if (Object.keys(state)[0] === 'blogslug') {
            this.addBlogUrlsTostate(state.blogslug);
        }    
    }

    addProductUrlsTostate(CFurls) {
        const producturls = CFurls.map(s => "/products/" + s.fields.slug);
        const newurls = [...this.state.urls].concat(producturls);
        this.setState({ urls: newurls });
    }

    addBlogUrlsTostate(CFurls) {
        const urls = CFurls.map(s => "/blog/" + s.fields.slug);
        const newurls = [...this.state.urls].concat(urls);
        this.setState({ urls: newurls });
    }


   
    render() {
        console.log("APPSTATE:", this.state);
        if (!this.state.products) { return "loading product menu..." }
        if (!this.state.productslug) { return "loading products..." }
        if (!this.state.blogslug) { return "loading blogs..." }
        if (!this.state.tussenpaginaslug) { return "loading TussenPaginas..." }

        return  (
            <Router>
                <Fragment>
                    <Header menulinks={this.menulinks} />
                    <main className="mb-5">
                        <Switch>
                        {/* onze 'harde' links */}
                        {this.links.map((ml,i) => (
                            <Route exact path={ml.to} render={ml.render} key={i} />
                        ))}

                        {/* De hoofdmenuitem links met de slug van contentful */}
                        {this.state.products.hoofdmenuitems?.map((p,i) => (
                            <Route exact key={i} path={"/products/" + p.fields.slug} render={() =>
                                <Products content={this.state['products_' + p.fields.slug]}
                                    statecallback={this.saveState}
                                    id={p.sys.id}
                                    slug={p.fields.slug}
                                    menu={this.state.products}
                                    submenu={this.state['products_' + p.fields.slug]} />} />
                        ))}

                            {/* De tussenpagina-product links met de slug van contentful */}
                            {this.state.tussenpaginaslug.map((p, i) => (
                                p.fields.hoofdmenus.map((hm,j) => (

                                <Route exact key={i + "_" + j} path={"/products/" + hm.fields.slug} render={() =>
                                    <Products content={this.state['products_' + hm.fields.slug]}
                                        statecallback={this.saveState}
                                        id={hm.sys.id}
                                        slug={hm.fields.slug}
                                        menu={this.state.products}
                                        submenu={this.state['products_' + hm.fields.slug.split('/')[0]]} />} />
                                ))
                            ))}

                                    


                        {/* De blog links useParams*/}
                        <Route path="/blog/:article">
                            <BlogDetail2 slug={this.state.blogslug}/>
                        </Route>
                       

                        {/* De product links met de slug van contentful */}
                        {this.state.productslug.map((p,i) => (
                            <Route exact key={i} path={"/products/" + p.fields.slug} render={() =>
                                <Products content={this.state['products_' + p.fields.slug]}
                                    statecallback={this.saveState}
                                    id={p.sys.id}
                                    slug={p.fields.slug}
                                    menu={this.state.products}
                                    submenu={this.state['products_' + p.fields.slug.split('/')[0]]} />} />
                            ))}

                        {/* De blog links met de slug van contentful 
                        {this.state.blogslug.map((p,i) => (
                            <Route exact key={i} path={"/blog/" + p.fields.slug} render={() =>
                                <BlogDetail content={this.state['blog_' + p.fields.slug]}
                                    statecallback={this.saveState}
                                    id={p.sys.id}
                                    slug={p.fields.slug} />} />
                            
                        ))}
                        */}
                    </Switch>
                    </main>
                    <Footer navitemsLeft={this.FooterlinksLeft} navitemsMiddle={this.FooterlinksMiddle} />
                    </Fragment>
            </Router>
        );
    }
}
