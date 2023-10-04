import React from 'react'

export const Home: React.FC<any> = () => {
    return (
        <React.Fragment>
            <div className='container hero_content'>
                <h3 className='hero_name'>
                    <span>SELLAM</span>
                    Mhammad
                </h3>
                <span id='hero_title'>Web & Mobile Developer</span>
                <div className='hero_social'>

                </div>
            </div>
            <div className='hero_background'>
                <img src='src/assets/IMG_4044.jpg' />
            </div>
        </React.Fragment>
    )
}

export default Home

