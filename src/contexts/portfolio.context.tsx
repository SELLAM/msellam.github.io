import React, { useState } from 'react'

const PortfolioContext = React.createContext<any>({})

export const usePortfolio = () => React.useContext(PortfolioContext)

export const PortfolioProvider: React.FC<any> = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [portfolio, setPortfolio] = React.useState({})

    const openLink = (url: any) => {
        window.open(url, '_blank')
    }

    React.useEffect(() => {
        setLoading(true)
        const url = 'https://gitconnected.com/v1/portfolio/sellam'
        fetch(url)
            .then((res) => res.json())
            .then((rep) => {
                const { basics, languages, education, skills, work, projects, references } = rep
                setPortfolio({
                    skills,
                    work,
                    projects,
                    references,
                    education,
                    languages,
                    about: basics,
                })
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return <PortfolioContext.Provider value={{ ...portfolio, loading }}>{children}</PortfolioContext.Provider>
}

export default PortfolioProvider
