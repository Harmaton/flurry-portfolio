import React from 'react'
import { useEffect, useState } from 'react'
import projects from '../../data/projects'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'

export default function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  return (
    <>
     <div className="container portfolio-page">
    <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['F','e','w','','','P', 'r', 'o', 'j', 'e', 'c ', 't', 's']}
              idx={15}
            />
          </h1>
          </div>
    <div className="card-deck">
    {projects.map(project => (
      <div className="card" key={project.name}>
        <img className="card-img-top" src={project.img} alt={project.name} />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.desc}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{project.stack}</small>
        </div>
      </div>
    ))}
  </div>
  </div>
  </>
  )
}
