import React from 'react'

export const Knowledge: React.FC<any> = () => {
    return (
        <div className='knowledeges'>
            <div className='section-title-wrapper mb-3'>
                <h4 className='section-title'>Knowledges</h4>
            </div>

            <div className='knowledeges-item-wrap'>
                <span className='gk-item'>Digital Design</span>
                <span className='gk-item'>Communication</span>
                <span className='gk-item'>Social Media</span>
                <span className='gk-item'>Time Management</span>
                <span className='gk-item'>Flexibility</span>
            </div>
        </div>
    )
}

export default Knowledge
