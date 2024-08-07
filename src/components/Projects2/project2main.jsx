import React from 'react'
import Projects2 from './projects2'
import './project2main.css'
import PrImg1 from '../../assets/plag.png'
import PrImg2 from '../../assets/notifier.png'
import PrImg3 from '../../assets/gym.png'
import PrImg4 from '../../assets/sneazers.png'

function Project2main() {
  return (
    <section className='projects-part'>
    <h1 className='project-txt' id='project'>Projects</h1>
    <p className='project-desc'>Here are some of my projects.</p>

    <div className='projects-container'>
        <Projects2 GithubLink="https://sneazers-e-commerce-dodh.vercel.app/" cardImg={PrImg4} PrTitle="Sneazers" PrFe="HTML, CSS, React.js" PrBe = "Node.Js, Express.js, MongoDB"/>
        <Projects2 GithubLink="https://radiantgym.netlify.app/" cardImg={PrImg3}  PrTitle="Gym Website Portal " PrFe="HTML, CSS, React.Js" PrBe = "MongoDB, NodeJS"/>
        {/* <Projects2 GithubLink="https://proformainvoicegen.netlify.app/" cardImg={PrImg4} PrTitle="Invoice Generator" PrFe="HTML, CSS, JS, ReactJS" PrBe = "MongoDB, NodeJS"/> */}
        <Projects2 GithubLink="https://github.com/tusharrajput001/Desktop_Notifier_Application" cardImg={PrImg2} PrTitle="Desktop Notifier Application" PrFe="Python, Tkinter" PrBe = "SQLite3"/>
        <Projects2 GithubLink="https://github.com/tusharrajput001/Plagiarism_checker" cardImg={PrImg1} PrTitle="Plagiarism Checker Application" PrFe="Python, Tkinter" PrBe = "SQLite3, RestAPI"/>
        
    </div>
    </section>
  );
}

export default Project2main;