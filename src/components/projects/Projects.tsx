import React from 'react'

import './projects.scss'

export const Projects: React.FC<any> = ({ projects }) => {
    return (
        <div className='projects'>
            <div className='row g-3'>
                {projects.map((project, i) => (
                    <div key={i} className='col-xl-6 col-lg-12'>
                        <div className='work-card'>
                            <a className='img' href={project.website || project.githubUrl} target='_blank'>
                                <img
                                    alt='portfolio'
                                    loading='lazy'
                                    decoding='async'
                                    srcSet={`${project.images[0]?.resolutions?.mobile?.url} 480w, ${project.images[0]?.resolutions?.desktop?.url} 800w`}
                                    src={project.images[0]?.resolutions?.thumbnail?.url}
                                />
                            </a>
                            <span className='item-subtitle'>{project.description}</span>
                            <h6 className='item-title'>
                                <a href='#' data-bs-toggle='modal' data-bs-target='#portfolio-1'>
                                    {project.displayName}
                                </a>
                            </h6>
                        </div>
                    </div>
                ))}
                {/* <div className='col-xl-6 col-lg-12'>
                    <div className='work-card'>
                        <a className='img' href='#' data-bs-toggle='modal'>
                            <img alt='portfolio' loading='lazy' decoding='async' data-nimg='1' src='/work-img-1.jpg' />
                        </a>
                        <span className='item-subtitle'>Travel Landing , UX/UI</span>
                        <h6 className='item-title'>
                            <a href='#' data-bs-toggle='modal' data-bs-target='#portfolio-1'>
                                Aura Dione
                            </a>
                        </h6>
                    </div>
                </div>
                <div className='col-xl-6 col-lg-12'>
                    <div className='work-card'>
                        <a className='img' href='#' data-bs-toggle='modal'>
                            <img alt='portfolio' loading='lazy' decoding='async' data-nimg='1' src='/work-img-1.jpg' />
                        </a>
                        <span className='item-subtitle'>Travel Landing , UX/UI</span>
                        <h6 className='item-title'>
                            <a href='#' data-bs-toggle='modal' data-bs-target='#portfolio-1'>
                                Aura Dione
                            </a>
                        </h6>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Projects
