import React from 'react'

export const About: React.FC<any> = ({ summary }) => {
    return (
        <>
            <div className='page-title-wrapper pt-5 px-4 px-lg-5'>
                <h2 className='page-title'>About</h2>

                <p>{summary}</p>
            </div>
            <div className='page-title-wrapper px-4 px-lg-5'>
                <h3 className='section-title'>What I do!</h3>
            </div>
            <div className='p-4 px-lg-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6'>
                        <div className='what-do-item bg-catkrill'>
                            <div className='icon'>
                                <img
                                    alt='feature'
                                    loading='lazy'
                                    width='130'
                                    height='40'
                                    decoding='async'
                                    data-nimg='1'
                                    src={process.env.PUBLIC_URL + '/images/webdev.svg'}
                                />
                            </div>
                            <div className='text'>
                                <h4 className='title'>Web Development</h4>
                                <p>
                                    Proficient web developer with expertise in designing and coding websites and web applications. Skilled in
                                    front-end and back-end development, I create responsive and user-friendly digital experiences using various
                                    programming languages and frameworks. My passion for clean code, attention to detail, and dedication to staying
                                    updated with industry trends allow me to craft effective online solutions that meet user needs and business
                                    objectives.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6'>
                        <div className='what-do-item bg-prink'>
                            <div className='icon'>
                                <img
                                    alt='feature'
                                    loading='lazy'
                                    width='130'
                                    height='40'
                                    decoding='async'
                                    data-nimg='1'
                                    src={process.env.PUBLIC_URL + '/images/app-development.svg'}
                                />
                            </div>
                            <div className='text'>
                                <h4 className='title'>App Development</h4>
                                <p>
                                    Experienced app developer specializing in creating mobile applications for both iOS and Android platforms.
                                    Proficient in the entire app development lifecycle, from concept and design to coding, testing, and deployment. My
                                    expertise encompasses a range of programming languages and development tools, allowing me to build intuitive and
                                    feature-rich applications that enhance user experiences. I am committed to delivering high-quality,
                                    performance-driven mobile solutions that meet client and user expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
