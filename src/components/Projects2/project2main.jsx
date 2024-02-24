import React from 'react'
import Projects2 from './projects2'
import './project2main.css'
import PrImg1 from '../../assets/plag.png'
import PrImg2 from '../../assets/notifier.png'
import Black from '../../assets/black.jpg'

function Project2main() {
  return (
    <section >
    <h1 className='project-txt' id='project'>Projects</h1>
    <p className='project-desc'>Here are some of my projects.</p>

    <div className='projects-container'>
        <Projects2 GithubLink="https://github.com/tusharrajput001/DesktopNotifierr" cardImg={PrImg2} PrTitle="Desktop Notifier Application" PrFe="Python, Tkinter" PrBe = "SQLite3"/>
        <Projects2 GithubLink="https://github.com/tusharrajput001/Plagiarism_checker" cardImg={PrImg1} PrTitle="Plagiarism Checker Application" PrFe="Python, Tkinter" PrBe = "SQLite3, RestAPI"/>
        <Projects2 GithubLink="https://www.google.com" cardImg={Black}  PrTitle="---" PrFe="--" PrBe = "--"/>
        
    </div>
    </section>
  );
}

export default Project2main;