import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reboot from '../style/reboot'
import GlobalStyle from '../style/global'
import { layoutTypes } from '../types/propTypes'

const LocaleContext = React.createContext()

const Layout = ({ children, location, pageContext: { locale } }) => {
  return (
    <LocaleContext.Provider value={{ locale }}>
      <Reboot />
      <GlobalStyle />
      <Header location={location} />
      {children}
      <Footer />
    </LocaleContext.Provider>
  )
}

Layout.propTypes = layoutTypes

export default Layout
