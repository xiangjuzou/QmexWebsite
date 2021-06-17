import { Link, withRouter } from 'react-router-dom';
import React, { PureComponent } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class Header extends PureComponent {

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
        const searchbtn = <FontAwesomeIcon icon={faSearch} className="" size="md" />;
         const page = '/' + this.props.location.pathname.split('/')[1];

         return (
             <header style={{ background:'rgb(240,240,240)' }}>
                 <Navbar collapseOnSelect expand="lg" >
                     <Navbar.Brand href="/" ><img src="/img/logotrano.png" width="300px" style={{ height:'auto'}} className="header_logo mr-4" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
                     <Navbar.Collapse id="navbarSupportedContent" style={{ zIndex:3, background: 'rgb(240,240,240)' }}>
                         <Nav id="navbarSupportedContent" style={{ flexWrap: "wrap", fontSize: "23px"}}  >
                             {
                                 this.props.menulinks.map((ml) => 
                                     (<Nav.Item key={ml.title} className="d-inline " id="navLink" data-toggle="collapse" data-target=".navbar-collapse.show, .navbar-toggler">
                                         <Link to={ml.to} className={"mx-4 " + ((ml.to === page) ? "text-primary" : "text-dark")}>
                                             {ml.title}
                                         </Link>
                                     </Nav.Item>)
                                    )
                             }
                             
                         </Nav>
                         <div className="ml-auto form-inline" style={{ width: "350px", flexWrap: "nowrap" }}>
                             <FormControl type="search"placeholder="Search" onChange={(e) => this.updateSearch(e)} onKeyUp={(e) => this.checkEnter(e)} value={this.state.search} />
                             <Button type="button" className="bg-light" onClick={() => this.searchButton()}>
                                 {searchbtn} { }Zoek
                             </Button>
                         </div>
                    </Navbar.Collapse>
                </Navbar>
            </header>
         );
    }

}


export default withRouter(Header);


