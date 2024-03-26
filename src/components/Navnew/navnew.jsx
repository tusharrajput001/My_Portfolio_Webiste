import React from 'react'
import './navnew.css'
import { useState } from 'react'
import contactImg from "../../assets/contact.png"

function Navnew() {

   const [menuOpen,setMenuOpen] = useState(false);

   const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
       document.documentElement.classList.add('intro-margin');
    } else {
       document.documentElement.classList.remove('intro-margin');
    }
 };



  return (
    <nav className={`nav-new ${menuOpen ? 'menu-open' : ''}`}>
        <a href="/" className='title'>Portfolio</a>
        <div className='menu' 
        onClick={toggleMenu}>   
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>  
            <li><a href="/">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <button className='desktopMenuBtn'>
                <img href="#contact" src={contactImg} alt='' className='desktopMenuImg'/>Contact Me
        </button>
    </nav>
    
  )
}

export default Navnew;