import React from 'react'

export const Experience: React.FC<any> = ({ works }) => {
    return (
        <>
            <div className='section-title-wrapper mb-3'>
                <i className='bi bi-briefcase'></i>
                <h4 className='section-title'>Experience</h4>
            </div>
            {works.map((work, i) => (
                <div key={i} className={'exp-card-item mb-2 ' + (i % 2 ? 'bg-catkrill' : 'bg-prink')}>
                    <span className='card-subtitle'>
                        {work.start.year}-{work.end.year}
                    </span>
                    <p className='card-title'>{work.position}</p>
                    <h6 className='card-text'>{work.company}</h6>
                </div>
            ))}
        </>
    )
}

export default Experience
