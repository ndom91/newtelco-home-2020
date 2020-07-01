import React, { useState } from 'react'
import LanguageSelect from '../components/LanguageSelect'
import Logo from '../components/newtelco-logo'
import { graphql } from 'gatsby'
import OverlayMenu from './OverlayMenu'
import ButtonMenu from './ButtonMenu'

import { headerTypes } from '../types/propTypes'

/* const headerQuery = graphql` */
/*   { */
/*     logo: file(relativePath: { eq: "logo.png" }) { */
/*       childImageSharp { */
/*         fluid(maxWidth: 40) { */
/*           ...GatsbyImageSharpFluid */
/*         } */
/*       } */
/*     } */
/*   } */
/* ` */

export default function Header({ location }) {
  const [toggleMenu, setToggleMenu] = useState(false)

  /* const data = useStaticQuery(headerQuery) */

  /**
   * Oftentimes we'll have different UI state
   * based on the router location.  Do it here.
   */
  /* useEffect(() => console.log(location), [location]) */

  return (
    <header className="text-gray-500 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Logo />
        </a>
        <nav className="md:mr-auto md:ml-3 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center hidden sm:flex">
          <a className="mr-5 hover:text-white">First Link</a>
          <a className="mr-5 hover:text-white">Second Link</a>
          <a className="mr-5 hover:text-white">Third Link</a>
          <a className="mr-5 hover:text-white">Fourth Link</a>
        </nav>
        {/* <LanguageSelect /> */}
        <ButtonMenu
          handleClick={() => setToggleMenu(!toggleMenu)}
          isActive={toggleMenu}
        />
        <OverlayMenu
          isActive={toggleMenu}
          toggleMenu={() => setToggleMenu(!toggleMenu)}
        />
      </div>
    </header>
  )
}

Header.propTypes = headerTypes
