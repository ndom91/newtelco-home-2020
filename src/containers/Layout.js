import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reboot from '../style/reboot'
import GlobalStyle from '../style/global'
import { layoutTypes } from '../types/propTypes'

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
    <I18nextProvider>
      <Reboot />
      <GlobalStyle />
      <Header location={location} />
      {children}
      <Footer social={allDatoCmsSocial.nodes} />
    </I18nextProvider>
  )
}

Layout.propTypes = layoutTypes

export default Layout
