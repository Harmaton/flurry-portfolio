import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/hsmall.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['a', 'r', 'm', 'a', 't', 'o', 'n']
  const jobArray = [
    ',',
    '',
    '-',
    'a',
    '',
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.'
  ]

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt=" Harmaton"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2> Native Android Developer (Kotlin/Java)/ Back-end Developer (Spring framework) 
            / FullStack Developer(MERN)
            /JavaScript expert / Java Expert / AI/ML expert (Python)</h2>
          <Link to="/contact" className="flat-button">
            CONTACT/HIRE ME
          </Link>
        </div>
        {/* <img
        className="solid-logo"
        src={LogoS}
        alt="  Developer"
      /> */}
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home