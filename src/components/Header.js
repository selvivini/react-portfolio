import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap'

const Header = () => {
    return (
          <Container fluid>
          <Jumbotron  style={{backgroundImage:`radial-gradient(circle,cyan,pink)`}}>
              <h1> Hello, I'm Vinitha Kumar</h1>
              </Jumbotron>  
              </Container>
    )
}

export default Header
