import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';


const NavList = (props) => {
    const myprops = ['items', 'className'];
    let propkopie = { ...props };
    myprops.forEach((p) => delete propkopie[p]);


    const mystyle = {
        color: "#555"
        };

    const newclass = (props.className) ? props.className + " flex-column" : "flex-column";

    return (
        <Nav className={newclass} {...propkopie}>
                {props.items.map((item, index) => <NavItem key={index}><Link style={mystyle} to={item.to}>{item.title}</Link></NavItem>)}
            </Nav>

        );
    }


export default NavList;