import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reboot from '../style/reboot'
import Rubik300 from '../../static/fonts/Rubik_300.woff2'
import Rubik400 from '../../static/fonts/Rubik_400.woff2'
import Raleway100 from '../../static/fonts/Raleway_100.woff2'
import Raleway200 from '../../static/fonts/Raleway_200.woff2'
import Raleway500 from '../../static/fonts/Raleway_500.woff2'
import '../style/globals.css'

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
      <HelmetDatoCms>
        {/* <link rel='preload' href={Rubik300} as='font' /> */}
        {/* <link rel='preload' href={Rubik400} as='font' /> */}
        {/* <link rel='preload' href={Raleway200} as='font' /> */}
        {/* <link rel='preload' href={Raleway100} as='font' /> */}
        {/* <link rel='preload' href={Raleway500} as='font' /> */}
      </HelmetDatoCms>
      <Reboot />
      <Header location={location} />
      {children}
      <Footer social={allDatoCmsSocial.nodes} />
    </>
  )
}

export default Layout
