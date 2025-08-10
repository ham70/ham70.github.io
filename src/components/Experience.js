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
                            <h3 className='exp-name'>Software Developer Intern</h3>
                            <h5 className='exp-date'>October 2024-Present</h5>
                        </div>
                        <img className='exp-image' src={bing}></img>
                    </div>
                    <div className='exp-description'>
                        <li>Automate university workflows, such as semester withdrawal forms, using JavaScript, Graphene, Hermes API, and Mustache Templates, reducing manual workload and improving operational efficiency</li>
                        <li>Write user documentation for applications, ensuring clear guidance and seamless adoption of internal tools</li>
                        <li>Investigate secondary university accounts, gathering information on uses and staff sponsors to aid in ensuring university security by flagging suspicious or unused user accounts</li>
                    </div>
                </div>
                <div className='exp'>
                    <div className='exp-header'>
                        <div className='exp-title'>
                            <h3 className='exp-name'>IT Intern</h3>
                            <h5 className='exp-date'>August 2024-Present</h5>
                        </div>
                        <img className='exp-image' src={bing}></img>
                    </div>
                    <div className='exp-description'>
                        <li>Collaborated with a team of 30 consultants to provide IT support to students in residence halls, ensuring consistent service quality and timely issue resolution for a wide range of personal IT issues</li>
                        <li>Diagnosed and resolved technical issues for Windows and MacOS devices, enabling seamless connectivity</li>
                    </div>
                </div>
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
            </div>
        </div>
    )
}

export default Experience