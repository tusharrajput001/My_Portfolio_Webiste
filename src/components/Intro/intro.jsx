import React from 'react'
import './intro.css'
import bg from '../../assets/img1 (4).jpg'
import { Link } from 'react-scroll'


function Intro() {
    const handleButtonClick = (link) => {
        window.location.href = link;
    };

  return (
    <section id='intro'>
        <div className='introContent'> 

            <div className='profile-container'>
                <img src={bg} alt="Your Image" className="profile-img"/>
            </div>
            <div className='content-div'>

                <span className='hello' id='home-scroll'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Tushar Rajput</span></span>
                <div><div className="Typewriter" data-testid="typewriter-wrapper"><span className="Typewriter__wrapper">Web Developer</span><span className="Typewriter__cursor"></span></div></div>
                <p className="introPara">i am skilled web developer experience in creating websites.</p>
                <Link className='intro-btns'>   
                    <button className='btn' onClick={() => handleButtonClick('https://github.com/tusharrajput001')}><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-256.png" alt='Github' className='btnImg'/><p className='btn-txt'>Github</p> </button>
                    <button className='btn' onClick={() => handleButtonClick('https://twitter.com/Devop_tusharR')}><img src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-256.png" alt='Twitter' className='btnImg'/><p className='btn-txt'>Twitter</p></button>
                    <button className='btn' onClick={() => handleButtonClick('https://www.linkedin.com/in/tusharrajputt/')}><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-256.png" alt='LinkedIn' className='btnImg'/><p className='btn-txt'>LinkedIn</p> </button>
                </Link>                
            </div> 




        </div>

        

    </section>

    )
}

export default Intro;