import { useEffect, useState } from 'react'
import {
    faAndroid,
  faGitAlt,
  faJava,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className='p' >
            I'm a very ambitious developer looking for a role
             with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p className='p'>
        As a Native Android Developer with expertise in Kotlin and Java,
         I have a strong foundation in mobile development. In addition to my
          skills in the Spring framework, I am also a FullStack Developer with 
          experience in the MERN stack. With a background in JavaScript ,Python,  
          Kotlin and Java, I am able to bring a wide range of technical skills to any project.
           My passion for Artificial Intelligence has also led me to become an expert in Python,
            allowing me to incorporate cutting-edge technology into my work.
             With a strong track record of delivering successful projects, 
             I am confident in my ability to drive results for clients. 
          </p>
          <p className='p'>
            <h2>A few thingsI love doing </h2>
            <ul>
                <li>Innovating what I beleive in</li>
                <li>Designing Great user Interfaces</li>
                <li>Simplifying things</li>
            </ul>
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAndroid} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About