import React, { useEffect, useState } from 'react'
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import Logo from '../images/NewtelcoLogo'
import OverlayMenu from './OverlayMenu'
import ButtonMenu from './ButtonMenu'
import { useViewportScroll } from 'framer-motion'

import { headerTypes } from '../types/propTypes'

export default function Header() {
  const { t } = useTranslation()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [blur, setBlur] = useState(false)
  const { language } = useI18next()
  const { scrollY } = useViewportScroll()
  useEffect(() => {
    // console.log(scrollY)
  }, [scrollY])

  /* scrollY.onChange(pos => { */
  /*   if (pos > 100) { */
  /*     setBlur(true) */
  /*   } else { */
  /*     setBlur(false) */
  /*   } */
  /* }) */

  return (
    <header
      className={` top-0 text-gray-500 body-font bg-transparent ${
        blur ? 'bg-opacity-50' : 'bg-opacity-100'
      }`}
      style={
        blur
          ? {
              filter: 'blur(0px)',
            }
          : {}
      }
    >
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center z-50 bg-transparent'>
        <Link
          language={language}
          to='/'
          aria-label='Home'
          className='flex title-font font-medium items-center text-white mb-4 md:mb-0'
        >
          <Logo />
        </Link>
        <nav className='md:mr-auto md:ml-3 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center hidden sm:flex'>
          <Link
            language={language}
            to='/products'
            className='mr-5 text-white hover:text-white hover:no-underline'
          >
            {t('menu.products')}
          </Link>
          <Link
            language={language}
            to='/services'
            className='mr-5 text-white hover:text-white hover:no-underline'
          >
            {t('menu.services')}
          </Link>
          <Link
            language={language}
            to='/team'
            className='mr-5 text-white hover:text-white hover:no-underline'
          >
            {t('menu.team')}
          </Link>
          <Link
            language={language}
            to='/about'
            className='mr-5 text-white hover:text-white hover:no-underline'
          >
            {t('menu.about')}
          </Link>
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
