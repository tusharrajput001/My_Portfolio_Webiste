import React from 'react'

function Skill_icon({name,link}) {
  return (
    <div className="skills-icon"><img src={link}/>{name}</div>
  )
}

export default Skill_icon