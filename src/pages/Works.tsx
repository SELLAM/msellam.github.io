import React from 'react'
import { Projects } from '../components'
import { usePortfolio } from '../contexts/portfolio.context'

export const Works: React.FC<any> = () => {
    const { projects } = usePortfolio()

    return (
        <section id='section-work' className='contact'>
            <div className='page-title-wrapper pt-5 px-4 px-lg-5'>
                <h2 className='page-title'>Portfolio</h2>
            </div>
            <div className='section-wrapper pb-5 px-4 px-lg-5'>
                <Projects projects={projects} />
            </div>
        </section>
    )
}

export default Works
