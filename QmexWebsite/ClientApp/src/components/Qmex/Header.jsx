import { Link, withRouter } from 'react-router-dom';
import React, { PureComponent } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


class InternalHeader extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { search: "" };
    }

    updateSearch(e) {
          this.setState({ search: e.target.value });
    }

    checkEnter(e) {
        if (e.key === "Enter") {
            this.searchButton();
        }
    }

    searchButton() {
        this.setState({ search: "" });
        this.props.history.push('/search?' + encodeURIComponent(this.state.search));
    }

     render() {
         const page = '/' + this.props.location.pathname.split('/')[1];

         return (
             <header style={{ background: 'rgb(240,240,240)' }}>
                 <Navbar collapseOnSelect expand="lg" >
                     <Navbar.Brand style={{width:"25%", minWidth:"300px"}}><img src="/img/QmexLogo.png" width="300" className="mr-5" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
                     <Navbar.Collapse id="navbarSupportedContent" style={{ zIndex: 2000, background: 'rgb(240,240,240)' }}>
                         <Nav id="navbarSupportedContent" style={{ flexWrap:"wrap",  columnGap: "30px", whiteSpace: "nowrap", fontSize: "23px"  }} >
                             {
                                 this.props.menulinks.map((ml) => 
                                      (<Nav.Item key={ml.title} className="my-auto d-inline pl-3" style={{ width: "126px" }} data-toggle="collapse" data-target=".navbar-collapse.show, .navbar-toggler">
                                         <Link to={ml.to} className={"mr-4 " + ((ml.to === page) ? "text-primary" : "text-dark")}>
                                             {ml.title}
                                         </Link>
                                     </Nav.Item>)
                                    )
                             }
                             
                         </Nav>
                         <div className="ml-auto form-inline" style={{ width: "350px", flexWrap: "nowrap" }}>
                             <FormControl type="text" placeholder="Search" className="mr-2" onChange={(e) => this.updateSearch(e)} onKeyUp={(e) => this.checkEnter(e)} value={this.state.search} />
                             <Button variant="outline-dark" className="mr-4" onClick={() => this.searchButton()}>Search</Button>
                             <br />&nbsp;<br />&nbsp;
                         </div>
                    </Navbar.Collapse>
                </Navbar>
            </header>
         );
    }

}




const Header = withRouter(props => <InternalHeader {...props} />);
export default Header;

