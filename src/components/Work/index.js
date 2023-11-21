import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'


import React from 'react'

const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

     return (
        <>

        <div className='container work-page'>
            <div className='text-zone'>
                
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P', 'r', 'o', 'j','e','c','t','s']}
                idx={15}
                />
                </h1>
            </div>
        
        <Container data-spy="scroll" className='cards' style={{ overflowY: 'scroll', overflowX: "hidden" }}> 
        <Row className='px-5 py-4'>
        </Row>
        <Row className='cards'>
        <Card className='hover-card' style={{ width: '38rem',backgroundColor: 'white', color:'black', transition: 'transform 0.3s' }}>
      <Card.Img variant="top" 
      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWNhZGVtaWNzfGVufDB8fDB8fHww"
       />
      <Card.Body>
        <Card.Title>IEP Accommodation Resources</Card.Title>
        <Card.Text>
          A website that includes IEP Accommodations and an openAI chatgpt interface acting as a teacher to answer any questions.<br />
          I created this web app to provide parents of my students digital access to IEP Accommodations they can use to support their children. <br />
          This is a full stack web application hosted with Heroku.
        </Card.Text>
        <Button backgroundColor="#F08080"  variant="primary" href="https://accommodation-resources.com/#/"
        target="_blank">IEP Accommodation Resources</Button>
      </Card.Body>
      
    </Card>
    </Row>
    <Row className='cards'>
        <Card className='hover-card' style={{ width: '38rem',backgroundColor: 'white', color:'black', transition: 'transform 0.3s' }}>
      <Card.Img variant="top" 
      src="https://www.classdojo.com/static/cdb0e0cf08f67fed08f35fe80cec04c3/about-image.svg"
       />
      <Card.Body>
        <Card.Title>Social Dojo</Card.Title>
        <Card.Text>
          A social media app for teachers and students to access learning and teaching resources.<br />
          This is a social media platform designed to provide a professional community and resources for students and teachers. <br />
          This is a full stack web application hosted with Sanity.
        </Card.Text>
        <Button backgroundColor="#F08080"  variant="primary" href="https://social-dojo.netlify.app"
        target="_blank">Social Dojo</Button>
      </Card.Body>
      
    </Card>
    </Row>
    <Row className='cards'>
        <Card className='hover-card' style={{ width: '38rem',backgroundColor: 'white', color:'black', transition: 'transform 0.3s' }}>
      <Card.Img variant="top" 
      src="https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?auto=format&fit=crop&q=80&w=2815&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       />
      <Card.Body>
        <Card.Title>HandyDude</Card.Title>
        <Card.Text>
         Handyman website template built for small businesses. <br /> I can personalize logo, images and add additional features! < br/> Please reach out if interested!
        </Card.Text>
        <Button backgroundColor="#F08080"  variant="primary" href="https://handydude.netlify.app"
        target="_blank">HandyDude</Button>
      </Card.Body>
      
    </Card>
    <Card style={{ width: '38rem', backgroundColor: 'white', color:'black', transition: 'transform 0.3s'  }}>
      <Card.Img variant="top" src="https://mathworksheetsgenerator.netlify.app/static/media/logo.d40992fa3b94872e2e0c.png" />
      <Card.Body>
        <Card.Title>Math worksheet generator</Card.Title>
        <Card.Text>
          An addition, subtraction, multiplication and division math worksheet generator created with react.
        </Card.Text>
        <Button variant="primary" href='https://mathworksheetsgenerator.netlify.app/'>Math Worksheets</Button>
      </Card.Body>
    </Card>
    </Row>
    </Container>
    </div>
         
        <Loader type="pacman" />
        </>

    )
}

export default Work