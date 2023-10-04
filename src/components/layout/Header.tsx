import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header: React.FC<any> = () => {
    return (
        <nav className='header navbar'>
            <ul className='navbar-nav mb-auto'>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='about'>
                        <i className='bi bi-person'></i>
                        <span>About</span>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='resume'>
                        <i className='bi bi-file-earmark-text'></i>
                        <span>Resume</span>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='works'>
                        <i className='bi bi-briefcase'></i>
                        <span>Works</span>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='contact'>
                        <i className='bi bi-journal'></i>
                        <span>Contact</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header
