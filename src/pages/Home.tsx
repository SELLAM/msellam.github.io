import React from 'react'

export const Home: React.FC<any> = () => {
    return (
        <section id='home' className='d-flex home profile-img justify-content-center align-items-center'>
            <div className='container'>
                <div className='name_wrap'>
                    <h3>
                        <span>SELLAM</span> Mhammad.
                    </h3>
                </div>
                <div className='job_wrap'>
                    <span className='job'>
                        Web & mobile developer<span className='overlay_effect'></span>
                    </span>
                </div>

                <button type='button' className='btn btn-outline-primary btn-cv'>
                    Download CV
                </button>
            </div>
        </section>
    )
}

export default Home
