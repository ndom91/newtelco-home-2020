import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HelmetTags from '../components/HelmetTags'
import Reboot from '../style/reboot'
import '../style/globals.css'
import '../style/fonts.css'

const Layout = ({ children, location, data, pageContext }) => {
  // console.log(location, data, pageContext)
  const { social, products, services } = useStaticQuery(
    graphql`
      query {
        social: allDatoCmsSocial(filter: { locale: { eq: "en" } }) {
          nodes {
            provider
            url
            locale
          }
        }
        products: allDatoCmsProduct(filter: { locale: { eq: "en" } }) {
          nodes {
            title
          }
        }
        services: allDatoCmsService(filter: { locale: { eq: "en" } }) {
          nodes {
            title
          }
        }
      }
    `
  )
  return (
    <>
      <Reboot />
      <HelmetTags />
      <Header location={location} />
      {children}
      <Footer
        social={social.nodes}
        products={products.nodes}
        services={services.nodes}
      />
    </>
  )
}

export default Layout
