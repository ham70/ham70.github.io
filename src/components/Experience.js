import React from 'react';
import bing from '../assets/bing200.png'
import headstart from '../assets/theheadstarter200.jpg'
import Code355 from '../assets/355Code.png'

const Experience = () => {
    return (
        <div id='experience' className="experience-section">
            <h1>Experience</h1>
            <div className='exp-gallery'>
                <div className='exp'>
                    <div className='exp-header'>
                        <div className='exp-title'>
                            <h3 className='exp-name'>355Code Marketing Intern</h3>
                            <h5 className='exp-date'>June 2023-Aug 2023 & May 2024-July 2024</h5>
                        </div>
                        <img className='exp-image355' src={Code355}></img>
                    </div>
                    <div className='exp-description'>
                        <li>Coordinated a team of 4 interns through the recruitment and hiring process by performing outreach, monitoring payroll, and 
                        facilitating tasks of interns</li>
                        <li>Hosted public tabling events to attract new users with live coding demos and prizes</li>
                        <li>Researched demographics of students at 50+ local elementary schools to gather and share projected target audience with the 
                        company Founder and prioritize sponsorships to certain school programs  </li>
                    </div>
                </div>
                <div className='exp'>
                    <div className='exp-header'>
                        <div className='exp-title'>
                            <h3 className='exp-name'>HeadStarter SWE Fellow</h3>
                            <h5 className='exp-date'>July 2024-Ongoing</h5>
                        </div>
                        <img className='exp-image' src={headstart}></img>
                    </div>
                    <div className='exp-description'>
                        <li>Software Engineering fellow with the goal of building 5 Ai projects in 5 weeks</li>
                        <li>Goal to get 1000 people on waitlist, 1000 accounts created, or $1000 in revenue for final project</li>
                    </div>
                </div>
                <div className='exp'>
                    <div className='exp-header'>
                        <div className='exp-title'>
                            <h3 className='exp-name'>Binghamton University ResConn</h3>
                            <h5 className='exp-date'>Starting August 2024</h5>
                        </div>
                        <img className='exp-image' src={bing}></img>
                    </div>
                    <div className='exp-description'>
                        <li>Campus Residential computer consultant assiting undergrads and facility with IT needs</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience