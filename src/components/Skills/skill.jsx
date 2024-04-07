import React from 'react'
import './skill.css'
import Skill_icon from './skill_icon'

function Skills() { 
  return (
    <div>
        <h1 className='skills-heading' id='skills'>Skills</h1>
        <p className='skills-head-desc'>Here are some of my skills on which I have been working on for the past years.</p>
    
    <div className='skills-boss'>
        <div className='skills-card-container'>
            <h2 className='skills-head'>Frontend</h2>   
            <div className='skills-base'>
                <Skill_icon name={"HTML"} link={"https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-64.png"}/>
                <Skill_icon name={"CSS"} link={"https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-256.png"}/>
                <Skill_icon name={"JS"} link={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-256.png"}/>
                <Skill_icon name={"ReactJs"} link={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"}/>
                <Skill_icon name={"Saas"} link={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-256.png  "}/>
                <Skill_icon name={"BStrap"} link={"https://icon.icepanel.io/Technology/svg/Bootstrap.svg"}/>
                <Skill_icon name={"Tailwind"} link={"https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"}/>
                
                
            </div>
        </div>

        <div className='skills-card-container'>
            <h2 className='skills-head'>Backend</h2>
            <div className='skills-base'>
                <Skill_icon name={"NodeJS"} link={"https://cdn4.iconfinder.com/data/icons/logos-3/454/nodejs-new-pantone-white-256.png"}/>
                <Skill_icon name={"ExpressJS"} link={"https://cdn.iconscout.com/icon/free/png-512/free-express-8-1175029.png?f=webp&w=256"}/>
                <Skill_icon name={"MongoDB"} link={"https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/mongodb-256.png"}/>
                <Skill_icon name={"Python"} link={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png"}/>
                <Skill_icon name={"MySQL"} link={"https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-256.png"}/>
                <Skill_icon name={"APIs"} link={"https://cdn0.iconfinder.com/data/icons/buno-api/32/api_calls_programming-10-256.png"}/>
                <Skill_icon name={"SQLite3"} link={"https://cdn0.iconfinder.com/data/icons/file-format-database-j-fill/64/database_file_document-56-256.png"}/>
            </div>
        </div>


        <div className='skills-card-container'>
            <h2 className='skills-head'>Others</h2>
            <div className='skills-base'>
                <Skill_icon name={"C"} link={"https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-1/15/c-256.png"}/>
                <Skill_icon name={"Python"} link={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png"}/>
                <Skill_icon name={"Java"} link={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-256.png"}/>    
                <Skill_icon name={"Linux"} link={"https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_linux-256.png"}/>
                <Skill_icon name={"Photoshop"} link={"https://cdn4.iconfinder.com/data/icons/ais/512/Ps.png"}/>
                <Skill_icon name={"Postman"} link={"https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/postman-256.png"}/>
                <Skill_icon name={"Git"} link={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/141_Git_logo_logos-256.png"}/>
                <Skill_icon name={"Github"} link={"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-256.png"}/>

            </div>
        </div>
    
        
    </div>
    </div>
  )
}

export default Skills