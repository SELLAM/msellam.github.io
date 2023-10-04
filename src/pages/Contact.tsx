import React from 'react'
import { ContactForm } from '../components'

export const Contact: React.FC<any> = () => {
    return (
        <section id='contact' className='contact'>
            <div className='page-title-wrapper pt-5 px-4 px-lg-5'>
                <h2 className='page-title'>Contact</h2>
            </div>
            <div className='section-wrapper pb-5 px-4 px-lg-5'>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact
