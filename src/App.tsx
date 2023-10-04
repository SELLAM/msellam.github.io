import React from 'react'
import { Layout } from './components'
import { usePortfolio } from './contexts/portfolio.context'

export const App: React.FC<any> = () => {
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

    return <Layout />
}

export default App
