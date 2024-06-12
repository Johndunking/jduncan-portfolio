import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])
     
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    It is my goal to leverage technology in the classroom to accommodate the needs of all scholars. I am eager to further my knowledge in education technology so i can provide scholars and their families with unique tools to best support them in achievinfg academic success and excellence.

                </p>
                <p>
                    I have a strong passion for education and programming and would
                    value the oppurtunity to work on diverse and challenging 
                    projects that extend my knowledge in education technology.
                </p>
                <p>
                    As a lifelong learner with a creative and open mindset,
                    my goal in education technology is to create unique applications and tools to support the diverse needs of all scholars.
                </p>

            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About