import React from 'react';
import './style.css';
import './assets/logo.png'
import Intro from './components/Intro/intro';
import Education from './components/Education/education';
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer';
import Skills from './components/Skills/skill';
import Navnew from './components/Navnew/navnew';
import videoSource from './assets/starsvid.mp4'
import Project2main from './components/Projects2/project2main';
import { useEffect } from 'react';





function App() {
  useEffect(() => {
    const video = document.getElementById("video-background");

    const handleVideoEnd = () => {
      video.currentTime = 0;
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);



  return (
    <>

    <Navnew/>
    <video autoPlay muted loop id="video-background">
        <source src={videoSource} type="video/mp4" />
    </video>
    <Intro/>  
    <Skills/>
    <Project2main/>
    <Education/>
    <Contact/>
    <Footer/>
    
    
    </>
  );
}

export default App;
