import React from 'react'
import { About } from '../components'
import { usePortfolio } from '../contexts/portfolio.context'

export const AboutMe: React.FC<any> = () => {
    const { about } = usePortfolio()

    return (
        <section id='aboutme' className='about'>
            <About {...about} />
        </section>
    )
}

export default AboutMe
