import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components'
import { usePortfolio } from './contexts/portfolio.context'
import { AboutMe, Contact, Resume, Works } from './pages'

export const App: React.FC<any> = () => {
    const location = useLocation()
    const { loading } = usePortfolio()

    if (loading) {
        return (
            <img
                src={process.env.PUBLIC_URL + '/images/logo.png'}
                className='rounded-circle position-absolute top-50 start-50 translate-middle'
                loading='lazy'
                width='10%'
            />
        )
    }

    return (
        <Routes key={location.pathname} location={location}>
            <Route path='/*' Component={Layout}>
                <Route path='about' Component={AboutMe} />
                <Route path='contact' Component={Contact} />
                <Route path='resume' Component={Resume} />
                <Route path='works' Component={Works} />
                <Route path='*' element={<Navigate to='/about' />} />
            </Route>
        </Routes>
    )
}

export default App
