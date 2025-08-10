import React from 'react'
import { Link } from "react-router-dom"
import headshot from '../assets/head.JPG'
import githubLogo from '../assets/github.png'
import linkedInLogo from '../assets/linkedIn.png'
import Resume from '../assets/MatthewHam_Resume.pdf'
import resumeLogo from '../assets/resume-icon-png-5.png'

const Welcome = () => {
    return (
        <div id='welcome' className='welcome-section'>
            <div className='my-info'>
                <h1 className='title'>Matthew Ham</h1>
                <p className='about-me'>Hi, thanks for joining me on my journey of programming, computer science, software development, and all things computers!</p>
                <div className='my-links'>
                    <a href="https://github.com/ham70" target="_blank" rel="noopener noreferrer">
                        <img className='link-logo' src={githubLogo}></img>
                    </a>
                    <a href="https://www.linkedin.com/in/matthew-ham-/" target="_blank" rel="noopener noreferrer">
                        <img className='link-logo' src={linkedInLogo}></img>
                    </a>
                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                    <img className='link-logo' src={resumeLogo}></img>
                    </a>
                </div>
            </div>
            <div className='my-picture'>
                <img className='headshot' src={headshot}></img>
            </div>    
            

        </div>
    )
}

export default Welcome

/*

<Link to="https://github.com/ham70">Github</Link>
            <Link to="https://www.linkedin.com/in/matthew-ham-/">LinkedIn</Link>

*/