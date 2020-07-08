import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reboot from '../style/reboot'
// import { layoutTypes } from '../types/propTypes'

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
    <>
      <Reboot />
      <Header location={location} />
      {children}
      <Footer social={allDatoCmsSocial.nodes} />
    </>
  )
}

export default Layout
