import React, { useMemo } from 'react'

import { usePortfolio } from '../../contexts/portfolio.context'
import './about.scss'

const LANG_PER = {
    Current: '100%',
    Advanced: '80%',
    Intermediate: '50%',
    A2: '30%',
    B1: '40%',
}

export const Info: React.FC<any> = () => {
    const { about = {}, languages } = usePortfolio()

    const { name, label, phone, profiles, headline, email, region, picture } = about

    const links = useMemo(
        () =>
            profiles
                .filter((p) => p.network !== 'gitconnected')
                .map((profile, key) => (
                    <li key={key}>
                        <a target='_blank' href={profile.url} className={profile.network.toLowerCase()}>
                            <i className={'bi bi-' + profile.network.toLowerCase()}></i>
                        </a>
                    </li>
                )),
        [profiles]
    )

    return (
        <div className='profile'>
            <div className='profile_image'>
                <img src={picture} />
            </div>
            <h4 className='info-name'>
                <a href='#'>{name}</a>
            </h4>
            <div className='info-bio mb-3'>
                Freelance : <span className='text-success'>Available</span>
            </div>
            <span className='info-bio mb-3'>{label}</span>
            <ul className='info-social-link mb-5'>
                {links}
                <li>
                    <a href='mailto:sellamMhammad3@gmail.com' className='email'>
                        <i className='bi bi-envelope-at-fill'></i>
                    </a>
                </li>
            </ul>

            <div className='info-contact mb-5'>
                <div className='info-contact-item'>
                    <div className='icon phone'>
                        <i className='bi bi-phone'></i>
                    </div>
                    <div className='text'>
                        <span>Phone</span>
                        <p>{phone}</p>
                    </div>
                </div>
                <div className='info-contact-item'>
                    <div className='icon email'>
                        <i className='bi bi-envelope'></i>
                    </div>
                    <div className='text'>
                        <span>Email</span>
                        <p>{email}</p>
                    </div>
                </div>
                <div className='info-contact-item'>
                    <div className='icon location'>
                        <i className='bi bi-pin-map'></i>
                    </div>
                    <div className='text'>
                        <span>Location</span>
                        <p>{region}</p>
                    </div>
                </div>
                <div className='info-contact-item'>
                    <div className='icon birthday'>
                        <i className='bi bi-calendar-event'></i>
                    </div>
                    <div className='text'>
                        <span>Birthday</span>
                        <p>{headline}</p>
                    </div>
                </div>
            </div>

            <div className='info-lang mb-5'>
                {languages.map((lang: any, i: number) => (
                    <div key={i} className='skill-bar-item mb-4'>
                        <div className='title-wrap'>
                            <h5 className='title'>{lang.language}</h5>
                            <span className='count'>{LANG_PER[lang.fluency]}</span>
                        </div>
                        <div className='progress-bar-wrap'>
                            <div className={`progress-line progress-bg-${(i + 1) % 5}`} style={{ width: LANG_PER[lang.fluency] }}></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='btn-cv'>
                <a className='btn btn-primary btn-lg' download target='_blank' href='/SELLAM_Mhammad.pdf'>
                    <i className='bi bi-download'></i>
                    <span>Download cv</span>
                </a>
            </div>
        </div>
    )
}

export default Info
