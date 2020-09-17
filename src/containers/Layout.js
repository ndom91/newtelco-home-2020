import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import HelmetTags from './HelmetTags'
import Reboot from '../style/reboot'
import '../style/globals.css'
import '../style/fonts.css'

const Layout = ({ children, location, data, pageContext }) => {
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
      <Wrapper>
        <Header location={location} />
        {children}
        <Footer
          social={social.nodes}
          products={products.nodes}
          services={services.nodes}
        />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 9999;
`

export default Layout
