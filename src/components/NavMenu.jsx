import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import logo from '../assets/logo.png';

class NavMenu extends Component {
    static displayName = NavMenu.name;

    // Set state
    state = {
        collapsed: true
    };

    //Toggle for navbar collapsing
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    toggleNavbar = this.toggleNavbar.bind(this);

    render() {
        return (
            <Navbar color='primary' dark className='navbar-expand-sm navbar-toggleable-sm box-shadow mb-3 fixed-top'>
                <NavbarBrand href='/' className='mr-auto brand' tabindex="-1" aria-disabled="true" alt="Home Page"><img src={logo} alt="Branding" /></NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
                <Collapse className='d-sm-inline-flex flex-sm-row-reverse' isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href='/' className='text-white nav-link' tabindex="-1" aria-disabled="true">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/signup' className='text-white nav-link' tabindex="-1" aria-disabled="true">Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/login' className='text-white nav-link' tabindex="-1" aria-disabled="true">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default (NavMenu);