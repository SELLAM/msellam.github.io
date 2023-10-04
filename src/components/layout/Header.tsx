import React from 'react'
import { useLocation } from 'react-router-dom'

export const Header: React.FC<any> = () => {
    const location = useLocation()

    const paths = [{
        name: 'About',
        icon: 'person',
        url: 'section-about',
    },{
        name: 'Resume',
        icon: 'file-earmark-text',
        url: 'section-resume'
    },{
        name: 'Works',
        icon: 'briefcase',
        url: 'section-work'
    },{
        name: 'Contact',
        icon: 'journal',
        url: 'section-contact'
    }]

    return (
        <nav className='header navbar'>
            <ul className='navbar-nav mb-auto'>
                {
                    paths.map((path:any, index:number)=>{
                        return <li className='nav-item' key={index}>
                        <a className={`nav-link ${location.pathname === `/${path.url}`?'active':''}`} href={`#${path.url}`}>
                            <i className={`bi bi-${path.icon}`}></i>
                            <span>{path.name}</span>
                        </a>
                    </li>
                    })
                }
            </ul>
        </nav>
    )
}

export default Header
