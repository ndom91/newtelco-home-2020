import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import Logo from '../images/NewtelcoLogo'
import OverlayMenu from './OverlayMenu'
import ButtonMenu from './ButtonMenu'

export default function Header() {
  const { t } = useTranslation()
  const [toggleMenu, setToggleMenu] = useState(false)
  const { language } = useI18next()

  return (
    <Wrapper className='top-0 text-gray-500 body-font bg-transparent'>
      <div className='container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center z-50 bg-transparent'>
        <Link
          language={language}
          to='/'
          aria-label='Home'
          className='flex title-font font-medium items-center text-white mb-4 md:mb-0'
        >
          <Logo />
        </Link>
        <nav className='md:mr-auto md:ml-3 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center hidden sm:flex'>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 999;
  position: sticky;
  top: 0;
  backdrop-filter: saturate(180%) blur(5px);
`
