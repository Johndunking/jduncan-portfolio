import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import simform from '../../assets/simform.jpg'


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
    <Card className='hover-card' style={{ width: '38rem', backgroundColor: 'white', color:'black', transition: 'transform 0.3s'  }}>
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
    <Row className='cards'>
        <Card className='hover-card' style={{ width: '38rem',backgroundColor: 'white', color:'black', transition: 'transform 0.3s' }}>
      <Card.Img variant="top" 
      src={simform}
       />
      <Card.Body>
        <Card.Title>Student Intervention Matching Form</Card.Title>
        <Card.Text>
         SIM form built using ReactJS <br /> Answer questions about student behaviors. < br/> Answers are scored to generate the appropriate resources to support student behaviors.
        </Card.Text>
        <Button backgroundColor="#F08080"  variant="primary" href="https://simsform.netlify.app"
        target="_blank">SIM Form</Button>
      </Card.Body>
      
    </Card>
    </Row>
    <Row className='cards'>
        <Card className='hover-card' style={{ width: '38rem',backgroundColor: 'white', color:'black', transition: 'transform 0.3s' }}>
      <Card.Img variant="top" 
      src="https://www.freebiefindingmom.com/wp-content/uploads/2021/02/free_printable_colorful_cartoon_letters_alphabet.jpg"
       />
      <Card.Body>
        <Card.Title>Letter and number tracing game</Card.Title>
        <Card.Text>
         Tracing game built with phaser framework which allows studsents to practice tracing their numbers and letters.< br/> Each letter is read before students begin tracing to increase letter recognition. < br/>
        </Card.Text>
        <Button backgroundColor="#F08080"  variant="primary" href="https://tracinggame.netlify.app"
        target="_blank">Tracing game</Button>
      </Card.Body>
      
    </Card>
    </Row>
    <Row className='cards'>
        <Card className='hover-card' style={{ width: '38rem',backgroundColor: 'white', color:'black', transition: 'transform 0.3s' }}>
      <Card.Img variant="top" 
      src='https://static.vecteezy.com/system/resources/previews/027/242/015/original/oak-tree-autumn-tree-isolated-ai-generated-png.png'
       />
      <Card.Body>
        <Card.Title>Leaf counting </Card.Title>
        <Card.Text>
         Basic leaf counting game to support students in counting from 1 - 20< br/> The application counts with the student as they pick each leaf < br/>
        </Card.Text>
        <Button backgroundColor="#F08080"  variant="primary" href="https://leafcounting.netlify.app"
        target="_blank">Leaf counting game</Button>
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