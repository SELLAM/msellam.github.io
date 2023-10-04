import React from 'react'

export const Education: React.FC<any> = ({ educations }) => {
    return (
        <>
            <div className='section-title-wrapper mb-3'>
                <i className="bi bi-book"></i>
                <h4 className='section-title'>Education</h4>
            </div>
            {educations.map((educt, i) => (
                <div key={i} className={'exp-card-item mb-2 ' + (i % 2 ? 'bg-prink' : 'bg-catkrill')}>
                    <span className='card-subtitle'>
                        {educt.start.year}-{educt.end.year}
                    </span>
                    <p className='card-title'>{educt.institution}</p>
                    <h6 className='card-text'>{educt.area}</h6>
                </div>
            ))}
        </>
    )
}

export default Education
