import React from 'react'
import {Navbar, NavLink} from 'react-bootstrap'
const Nav = () => {
    return (
   <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <NavLink href="/">About</NavLink>
 <NavLink href="/#/portfolio">Portfolio</NavLink>
 <NavLink href="/#/contact">Contact</NavLink>
  </Navbar.Collapse>
</Navbar>
    
    )
}

export default Nav
