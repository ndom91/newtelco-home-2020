import React, { useContext } from 'react'
import styled from '@emotion/styled'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Reboot from '../style/reboot'
import GlobalStyle from '../style/global'
import { colors } from '../consts/style'
import { layoutTypes } from '../types/propTypes'

const SiteWrapper = styled.div`
  background: ${colors.light};
`
const LocaleContext = React.createContext()

const Layout = ({ children, location, pageContext: { locale } }) => {
  return (
    <LocaleContext.Provider value={{ locale }}>
      <SiteWrapper>
        <Reboot />
        <GlobalStyle />
        <Header location={location} />
        {children}
        <Footer />
      </SiteWrapper>
    </LocaleContext.Provider>
  )
}

Layout.propTypes = layoutTypes

export default Layout
