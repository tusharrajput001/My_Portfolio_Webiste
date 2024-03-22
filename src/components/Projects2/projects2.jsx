import React from 'react'
import './projects2.css'


function Projects2({cardImg,PrTitle,PrFe,PrBe,GithubLink}) {
  return (

    
    <div className='pr-card-container'>
      <div>
        <img src={cardImg} className='img-container'></img>
      </div>

        <div className="pr-card-desc">
            <h2 className='pr-title'>{PrTitle}</h2>
              <p className='paragraph-txt'>
                Frontend: {PrFe}<br/>
                Backend: {PrBe}
              </p>

              <a href={GithubLink} target="_blank" rel="noopener noreferrer">
                <button className='PrButton' type='button'>
                  - - LINK - -
                </button>
              </a>
         </div>
    </div>
  
  )
}

export default Projects2