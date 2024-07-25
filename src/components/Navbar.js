import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className='navbar'>

                <div>
                    <Link to="welcome" smooth={true} offset={-55}>Welcome</Link>
                </div>
                <div>
                <Link to="projects" smooth={true} offset={15}>Projects</Link>
                </div>
                <div>
                <Link to="experience" smooth={true} offset={15}>Experience</Link>
                </div>
        </nav>
    )
}

export default Navbar

/*
<div>
    <Link to="more" smooth={true} offset={15}>More</Link>
</div>
*/