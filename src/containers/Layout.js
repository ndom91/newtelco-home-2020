import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import MetaTags from './MetaTags'
import GlobalReboot from '../style/reboot'
// import { useQuery } from 'react-datocms'
import '../style/globals.css'
import '../style/fonts.css'

const Layout = ({ children, location, data, pageContext }) => {
  // const { status, error, data } = useQuery({
  //   enabled: true,
  //   query: `
  //     query FooterQuery($language: StringType) {
  //       social: allDatoCmsSocial(filter: { locale: { eq: "en" } }) {
  //         nodes {
  //           provider
  //           url
  //           locale
  //         }
  //       }
  //       locations: allDatoCmsLocation(filter: { locale: { eq: $language } }) {
  //         nodes {
  //           city
  //           address
  //           image {
  //             fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
  //               ...GatsbyDatoCmsFluid
  //             }
  //           }
  //         }
  //       }
  //       products: allDatoCmsProduct(
  //         filter: { locale: { eq: $language }, onHomepage: { eq: true } }
  //       ) {
  //         nodes {
  //           shortText
  //           title
  //           image {
  //             alt
  //             fluid(imgixParams: { auto: "format", fit: "max", w: "600" }) {
  //               ...GatsbyDatoCmsFluid
  //             }
  //           }
  //         }
  //       }
  //       services: allDatoCmsService(
  //         filter: { locale: { eq: $language }, onHomepage: { eq: true } }
  //       ) {
  //         nodes {
  //           shortText
  //           title
  //           image {
  //             alt
  //             fluid(imgixParams: { auto: "format", fit: "max", w: "600" }) {
  //               ...GatsbyDatoCmsFluid
  //             }
  //           }
  //         }
  //       }
  //     }`,
  //   variables: { language: pageContext.language },
  //   token: process.env.DATO_CMS_KEY
  // })
  // console.table(status, error, data)

  return (
    <>
      <GlobalReboot />
      <MetaTags />
      <Wrapper>
        <Header location={location} />
        {children}
        <Footer
          social={data.social.nodes}
          products={data.products.nodes}
          services={data.services.nodes}
          locations={data.locations.nodes}
        />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  top: 0;
  width: 100vw;
  z-index: 9999;

  &:after {
    content: '';
    background-image: url('/blackmamba.png');
    height: 300%;
    width: 300%;
    opacity: 0.3;
    position: fixed;
    top: 0;
    pointer-events: none;
    overflow: hidden;
  }
`

export default Layout
