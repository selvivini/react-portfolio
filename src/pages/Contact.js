import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container, Form,Card, Button, Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <>
         <Header/> 
         <Container >
             <Card className=" mb-3 border-info" style={{backgroundColor: "lavender"}}>
                 <Card.Body>
            <h2 className="text-left text-dark">Contact<i class="far fa-address-card m-2 p-2 text-info"></i></h2>
            <hr/>
         <Form>
  <Form.Group controlId="formGroupEmail" >
    <Form.Label >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" className="border-info" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" className="border-info" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" placeholder="Message" className="border-info" />
  </Form.Group>
<Button variant="dark" className="px-5 mt-2 mb-3" type="submit" >Submit</Button>
 </Form>
</Card.Body>
</Card>
<h1 className="h1 text-center social"> Social And Contact</h1>
<Row>
    <div className="col-12">
    <h3 className="text-center">
 <a href= "https://drive.google.com/file/d/1KU5XuDQUou7xWSaADBvLIqiHt9t0oPt7/view?usp=sharing" target="_blank" download="resume" className="btn btn-danger " rel="noreferrer"><i className="fab fa-linkedin-in m-1"></i>Resume</a>
    <a href= "mailTo:selvivini@gmail.com" className="btn btn-danger m-2" target="_blank" rel="noreferrer"><i className="fa fa-envelope m-1" ></i>Email</a>
    <a href= "https://github.com/selvivini" className="btn btn-danger"  target="_blank" rel="noreferrer"><i className="fab fa-github m-1"></i>Github</a>
    <a href= "https://www.linkedin.com/in/vinitha-kumar-8255351b2/" target="_blank" className="btn btn-danger m-2"rel="noreferrer"><i className="fab fa-linkedin m-1"></i>Linkedin</a>
    </h3>
</div>
</Row>
</Container>
<Footer/>
</>
    )
}

export default Contact
