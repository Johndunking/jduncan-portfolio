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
                    I am an ambitious full stack developer looking for a team to 
                    collaborate and grow with! 
                    As an education specialist I strive to learn something new from each day and every experience.
                    Coming from a teaching background, I have alot of experience in working with teams and understand that in receiving criticism,
                    suggestions or feedback it is essential to assume positive intent to foster the most effective collaboration.
                    As a full stack developer I will always leverage my data analysis, communication and collaborative problem solving skills to best support the team!

                </p>
                <p>
                    I have a strong passion for programming and would
                    value the oppurtunity to work on diverse and challenging 
                    projects.
                    Currently, I enjoy utilizing frameworks like react and angular with packages like tailwind css, bootstrap and gsap to creatively solve problems
                    and create modern designs for web apps.
                </p>
                <p>
                    As a lifelong learner with a creative and open mindset,
                    my goal in programming is to continue learning new languages, frameworks and best practices in fullstack development!
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