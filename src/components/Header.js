import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap'

const Header = () => {
    return (
          <Container fluid>
          <Jumbotron  style={{backgroundImage:`radial-gradient(circle,blue, pink, purple)`}}>
              <h1 className="text-light"> Hello, I'm Vinitha Kumar</h1>
              </Jumbotron>  
              </Container>
    )
}

export default Header
