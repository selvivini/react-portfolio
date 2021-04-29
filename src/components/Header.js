import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap'
import NavBar from '../components/Nav'
const Header = () => {
    return (
          <Container fluid>
               <NavBar/>
          <Jumbotron  style={{backgroundImage:"url(hd-background-for-text.jpg)"}}>
              <h1 className="text-light"> Hello, I'm Vinitha Kumar</h1>
             <h5 className="text-light">Checkout my latest projects</h5>
              </Jumbotron>  
              </Container>
    )
}

export default Header
