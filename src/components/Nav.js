import React from 'react'
import {Navbar} from 'react-bootstrap'
const Nav = () => {
    return (
   
    <Navbar variant="light" style={{backgroundImage:`linear-gradient(to right top, #6b6bd1, #6066cf, #5460ce, #475bcc, #3656cb, #3355cf, #3055d2, #2c54d6, #3c57df, #4a5ae9, #585df2, #665ffb)`}}>
    <Navbar.Brand href="/" className= "text-light" >About</Navbar.Brand>
    <Navbar.Brand href="/#/portfolio" className= "text-light">Portfolio</Navbar.Brand>
    <Navbar.Brand href="/#/contact" className= "text-light">Contact</Navbar.Brand>
    
    </Navbar>
    
    )
}

export default Nav
