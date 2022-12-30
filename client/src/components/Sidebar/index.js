import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index2.scss';
import Logo from '../../assets/images/logo.jpg';
import Image from 'react-bootstrap/esm/Image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faComment, faHome, faUser, faAddressBook, faPortrait, faBars, faClose} from '@fortawesome/free-solid-svg-icons';

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
             <FontAwesomeIcon icon= {faUser} color = "#4d4d4e" />  
            </NavLink>

            <NavLink 
            activeClassName = "active"
             className = "contact-link"
              to="/contact" 
               onClick={() => setShowNav(false)} >
             <FontAwesomeIcon icon= {faComment} color = "#4d4d4e" />  
            </NavLink>


            <NavLink 
            activeClassName = "active"
            className = "portfolio-link"
             to="/portfolio" 
              onClick={() => setShowNav(false)} >
             <FontAwesomeIcon icon= {faPortrait} color = "#4d4d4e" />  
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
             href=''
             className="anchor-icon"
             >
               <FontAwesomeIcon icon={faAddressBook} color = "#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank"
             rel='noreferrer'
             href=''
             className="anchor-icon"
             >
               <FontAwesomeIcon icon={faAddressBook} color = "#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank"
             rel='noreferrer'
             href=''
             className="anchor-icon"
             >
               <FontAwesomeIcon icon={faAddressBook} color = "#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank"
             rel='noreferrer'
             href=''
             className="anchor-icon"
             >
               <FontAwesomeIcon icon={faAddressBook} color = "#4d4d4e" />
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
