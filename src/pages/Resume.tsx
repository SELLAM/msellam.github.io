import React from 'react'
import { Education, Experience } from '../components'
import Skills from '../components/about/Skills'
import Knowledge from '../components/about/Knowledge'
import { usePortfolio } from '../contexts/portfolio.context'

export const Resume: React.FC<any> = () => {
    const { education, skills, work } = usePortfolio()

    return (
        <section id='resume' className='resume'>
            <div className='page-title-wrapper pt-5 px-4 px-lg-5'>
                <h2 className='page-title'>Resume</h2>
            </div>
            <div className='section-wrapper px-4 px-lg-5'>
                <div className='row g-2 g-lg-3'>
                    <div className='col-xl-6 col-lg-12'>
                        <Education educations={education} />
                    </div>
                    <div className='col-xl-6 col-lg-12'>
                        <Experience works={work} />
                    </div>
                </div>
            </div>
            <div className='section-wrapper p-4 p-lg-5'>
                <div className='row g-2 g-lg-3'>
                    <div className='col-xl-6 col-lg-12'>
                        <Skills skills={skills} />
                    </div>
                    <div className='col-xl-6 col-lg-12'>
                        <Knowledge Knowledge={skills}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume
