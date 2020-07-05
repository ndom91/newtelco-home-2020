import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reboot from '../style/reboot'
import GlobalStyle from '../style/global'
import { layoutTypes } from '../types/propTypes'

const LocaleContext = React.createContext()

const Layout = ({ children, location, pageContext: { locale } }) => {
  const { allDatoCmsSocial } = useStaticQuery(
    graphql`
      query {
        allDatoCmsSocial(filter: { locale: { eq: "en" } }) {
          nodes {
            provider
            url
            locale
          }
        }
      }
    `
  )
  return (
    <LocaleContext.Provider value={{ locale }}>
      <Reboot />
      <GlobalStyle />
      <Header location={location} />
      {children}
      <Footer social={allDatoCmsSocial.nodes} />
    </LocaleContext.Provider>
  )
}

Layout.propTypes = layoutTypes

export default Layout
