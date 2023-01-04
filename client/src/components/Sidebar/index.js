import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index2.scss';
import Logo from '../../assets/images/logo.jpg';
import Image from 'react-bootstrap/esm/Image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faHome, faUser, faPortrait, faBars, faClose, faContactCard, faCommentSlash, faStoreAlt, faTasksAlt, faPerson, faStarHalf, faH} from '@fortawesome/free-solid-svg-icons';
import { faDev, faGithubSquare, faKickstarter, faLinkedinIn, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Sidebar() {

 const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-bar'>
        
       <Link className='logo'
        to='/' 
        onClick={() => setShowNav(false)}> 

       <Image src = {Logo} rounded  />

       </Link> 

       <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact = "true" 
            activeClassName = "active" 
             to="/"  
             onClick={() => setShowNav(false)}>
             <FontAwesomeIcon icon= {faHome} color = "#4d4d4e"  />  
            </NavLink>

            <NavLink 
            activeClassName = "active"
             className = "about-link" 
             to="/about"
               onClick={() => setShowNav(false)} >
             <FontAwesomeIcon icon= {faH} color = "#4d4d4e" />  
            </NavLink>

            <NavLink 
            activeClassName = "active"
             className = "contact-link"
              to="/contact" 
               onClick={() => setShowNav(false)} >
             <FontAwesomeIcon icon= {faTasksAlt} color = "#4d4d4e" />  
            </NavLink>


            <NavLink 
            activeClassName = "active"
            className = "portfolio-link"
             to="/Portfolio" 
              onClick={() => setShowNav(false)} >
             <FontAwesomeIcon icon= {faStoreAlt} color = "#4d4d4e" />  
            </NavLink>

            <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="3x"
            className='close-icon' />
       </nav>

       <ul>
        <li>
            <a target="_blank"
             rel='nofollow'
             href='https://twitter.com/njagiiiiii'
             className="anchor-icon"
             >
               <FontAwesomeIcon icon={faTwitter} color = "#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank"
             rel='noreferrer'
             href='https://github.com/Harmaton'
             className="anchor-icon"
             >
               <FontAwesomeIcon icon={faGithubSquare} color = "#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank"
             rel='noreferrer'
             href='https://www.linkedin.com/in/harmaton-njagi-1b2272189/'
             className="anchor-icon"
             >
               <FontAwesomeIcon icon={faLinkedinIn} color = "#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank"
             rel='noreferrer'
             href='https://medium.com/@njagiiharmaton'
             className="anchor-icon"
             >
               <FontAwesomeIcon icon={faMedium} color = "#4d4d4e" />
            </a>
        </li>
        
       </ul>
       
       <FontAwesomeIcon 
         onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
       </div>
  )
}
