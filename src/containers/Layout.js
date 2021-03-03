import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import MetaTags from './MetaTags'
import GlobalReboot from '../style/reboot'

const Layout = ({ children, location, data, pageContext }) => {
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

`

export default Layout
