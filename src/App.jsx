import React, { useState, useEffect } from 'react';
import './style.css';
import './assets/logo.png'
import Intro from './components/Intro/intro';
import Education from './components/Education/education';
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer';
import Skills from './components/Skills/skill';
import Navnew from './components/Navnew/navnew';
import Project2main from './components/Projects2/project2main';
import Loading from './components/Loading/loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Render loading component while loading is true
    return <div><Loading loading={loading} /></div>;
  }

  return (
    <>
      <Navnew />
      <Intro />
      <Skills />
      <Project2main />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
