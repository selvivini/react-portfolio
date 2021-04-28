import React from 'react'
import {Container, Card, Row, Col, Button} from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import projects from '../data/projects.json'

const Portfolio = () => {
    return (
        <>
     <Header/>  
    <Container>
        <Row>
        {projects.map(project=>{
            return (<Col md={6} lg={4}>
                <Card className="m-3 shadow rounded-0" border="danger"style={{background: "#FFFDE7"}}>
                    <Card.Body>
                        <Card.Img src={project.image} height="200px" />
                        <Card.Title className="text-danger">{project.name}</Card.Title>
                        <hr></hr>
                        <Card.Subtitle className= "text-primary">{project.description}</Card.Subtitle>
                        <Card.Text className= "text-info">{project.technologies}</Card.Text>
                        <Col>
                        <a href={project.deployedLink} target="_blank"rel="noreferrer"><Button className="m-1" variant="success">Deployed Link</Button></a>
                        
                       <a href={project.repository} target="_blank"rel="noreferrer"><Button variant="dark">GithubRepo</Button></a> 
                        </Col>
                    </Card.Body>
               </Card>
            </Col>
            )
        }
            
        )}
        </Row>
     </Container>
     <Footer/> 
     </>
    )
}

export default Portfolio
