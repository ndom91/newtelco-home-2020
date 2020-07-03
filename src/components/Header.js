import React, { useState } from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Logo from '../components/NewtelcoLogo'
import OverlayMenu from './OverlayMenu'
import ButtonMenu from './ButtonMenu'

import { headerTypes } from '../types/propTypes'

export default function Header() {
  const { t } = useTranslation()
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="text-gray-500 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Logo />
        </a>
        <nav className="md:mr-auto md:ml-3 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center hidden sm:flex">
          <a className="mr-5 hover:text-white">{t('menu.products')}</a>
          <a className="mr-5 hover:text-white">{t('menu.services')}</a>
          <a className="mr-5 hover:text-white">{t('menu.team')}</a>
          <a className="mr-5 hover:text-white">{t('menu.about')}</a>
        </nav>
        <ButtonMenu
          handleClick={() => setToggleMenu(!toggleMenu)}
          isOpen={toggleMenu}
        />
        <OverlayMenu
          isOpen={toggleMenu}
          toggleMenu={() => setToggleMenu(!toggleMenu)}
        />
      </div>
    </header>
  )
}

Header.propTypes = headerTypes
