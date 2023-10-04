import React, { FormEvent, FormEventHandler, useRef } from 'react'

import './contact.scss'

export const ContactForm: React.FC<any> = () => {
    const formRef = useRef<any>()
    const submit = (e: FormEvent) => {
        formRef.current.checkValidity()

        e.preventDefault()
        e.stopPropagation()
    }

    return (
        <div className='contact-form'>
            <h5 className='contact-title'>I'm always open to discussing product</h5>
            <h5 className='contact-title-b'>design work or partnerships.</h5>
            <div className='mb-5'>
                Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific
                question or comment, please feel free to email me directly at{' '}
                <a href='mailto:sellamMhammad3@gmail.com'>sellamMhammad3@gmail.com</a>. I make an effort to respond to all messages within
                24 hours, although it may take me longer during busy periods. Alternatively, you can use the contact form to get in touch. Simply fill
                out the required fields and I'll get back to you as soon as possible. Thanks again for your interest, and I look forward to hearing
                from you!
            </div>
            {/* <form ref={formRef} className='row g-3 needs-validation' noValidate onSubmit={submit}>
                <div className='col-12'>
                    <label htmlFor='subject' className='form-label'>
                        Your Name
                    </label>
                    <input type='text' className='form-control' id='subject' required />
                </div>

                <div className='col-12'>
                    <label htmlFor='email' className='form-label'>
                        Your Email
                    </label>
                    <input type='email' className='form-control' id='email' required />
                </div>

                <div className='col-12'>
                    <label htmlFor='message' className='form-label'>
                        Your Message
                    </label>
                    <textarea className='form-control' id='message' rows={5} required></textarea>
                </div>

                <div className='col-12 mt-4'>
                    <button type='submit' className='float-end btn btn-outline-primary'>
                        Send Message
                    </button>
                </div>
            </form> */}
        </div>
    )
}

export default ContactForm
