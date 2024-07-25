import React from 'react';
import nycCheapEats from '../assets/nycCheapEats_logo313x313.png';
import kMap from '../assets/kmap2.png';

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";




const Projects = () => {
    return (
        <div id='projects' className='project-section'>
            <h1 className='projects-header'>Projects</h1>
            <div className='project-gallery'>
                <a href="https://nyccheapeats.vercel.app" target="_blank" rel="noopener noreferrer">
                    <div className='project'>
                        <div className='project-info'>
                            <h3 className='project-title'>NYC Cheap Eats</h3>
                            <p className='project-description'>Fullstack Mern application made to be a catolog of cheap restaurants to eat in nyc.</p>
                            <div className='project-techs'>
                                <SiMongodb/>
                                <SiExpress/>
                                <FaReact/>
                                <FaNodeJs/>
                            </div>
                        </div>
                        <div className='project-image'>
                            <img src={nycCheapEats} alt="NYC Cheap Eats"></img>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/ham70/Kmap-Generator" target="_blank" rel="noopener noreferrer">
                    <div className='project'>
                        <div className='project-info'>
                            <h3 className='project-title'>K-Map Generator</h3>
                            <p className='project-description'>Simple Karnaugh map generatore for 2-4 variable boolean equations.</p>
                            <div className='project-techs'><FaPython /></div>
                        </div>
                        <div className='project-image'>
                            <img src={kMap} alt="K-Map Generator"></img>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects;
