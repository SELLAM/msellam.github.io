import React from 'react'

const SKILL_PER = {
    Expert: '100%',
    Advanced: '80%',
    Intermediate: '60%',
}

export const Skills: React.FC<any> = ({ skills }) => {
    return (
        <div className='skill'>
            <div className='section-title-wrapper mb-3'>
                <h4 className='section-title'>Working Skills</h4>
            </div>
            <div className='kill-bar-wrapper'>
                {skills.map((skill, i) => (
                    <div className='skill-bar-item mb-4' key={i}>
                        <div className='title-wrap'>
                            <h5 className='title'>{skill.name}</h5>
                            <span className='count'>{SKILL_PER[skill.level]}</span>
                        </div>
                        <div className='progress-bar-wrap'>
                            <div className={`progress-line progress-bg-${(i + 1) % 5}`} style={{ width: SKILL_PER[skill.level] }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
