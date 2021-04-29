import React from 'react';
import { Navbar, NavLink, NavItem } from 'react-bootstrap';
import '../styles/nav.css';
const NavBar = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Navbar.Brand href='#home'>React-Portfolio</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
               
				<NavItem >
					<NavLink  href='/' className = "active" >
					  About
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='#/portfolio'className = "active">Portfolio</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='#/contact' className = "active">Contact</NavLink>
				</NavItem>
              
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
