import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem, Image, Card} from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
    return (
        <>
       
        <Header />
        <Container>
            
        <Row>
       
        <Col md= {9}>
        <Card className = 'mb-3'>
        <h5 >Biography</h5>
        <Card.Body>
        <Image alt= "profile" src= "images/Profile.JPG" height="150" width="150" thumbnail roundedCircle className="text-center img-fluid mx-auto d-block"/>
        <p >
        Hi Everyone! My name is Vinitha, I am from India. I was graduated with the masters degree in Business administration from India. I started my career working for hsbc bank as a loan officer in the retail Assets processing team. Then soon after my marriage I moved to united States with my husband who is working as an IT consultant for USDA(Nitc) data center. I live in Overland Park, KS since 2011. I have a financial background and coding was entirely new to me. I developed interest towards writing web content when I started to do write some food blogs. I started working with wordpress(CMS). Then slowly I started learning web technologies like html and css. I didn’t get my work permit until 2015. So I started to work for an Indian software company in remote which is located in my home town where I was a part in developing some of their Ui portions for their clients.
       Slowly then I started with the basics of javascript  and learnt Javascript frameworks like Reactjs, Angularjs and mobile frameworks like Ionic and React Native. 
       </p>
      <br/>
        <p >
    I started my first Job in united states in 2018 with computer Impressions a startup company located in Overland Park, Kansas ,where I worked there in different projects that helped to gain skills in various technologies. My last job was with Sprint as a software consultant. I am a self-taught developer, I followed tutorials took some courses in udemy . 
    I have 2 kids. My hobbies are trying out some new recipes as I have always been fond of cooking, travelling, and reading. I am a positive person, quick learner willing to learn and work with new technologies and develop my career as a full stack developer.
        </p>
        </Card.Body>
        </Card>
        </Col>
      
        <Col md= {3}>
        <Card className="mb-3">
        <h5 >Skills</h5>
 <ListGroup>
     <ListGroupItem>Html</ListGroupItem>
     <ListGroupItem className="list-group-item-dark">css</ListGroupItem>
     <ListGroupItem>Javascript</ListGroupItem>
     <ListGroupItem className="list-group-item-dark">Jquery</ListGroupItem>
     <ListGroupItem>React</ListGroupItem>
     <ListGroupItem className="list-group-item-dark">Angular</ListGroupItem>
     <ListGroupItem>NodeJs</ListGroupItem>
     <ListGroupItem className="list-group-item-dark">MongoDb</ListGroupItem>
     <ListGroupItem>MySQl</ListGroupItem>
     <ListGroupItem className="list-group-item-dark">Wordpress</ListGroupItem>
     <ListGroupItem >Ionic</ListGroupItem>
     <ListGroupItem className="list-group-item-dark">React Native</ListGroupItem>
 </ListGroup>
</Card>
        </Col>
        </Row>
        </Container>
        <Footer/>
        </>
    )
}

export default About

