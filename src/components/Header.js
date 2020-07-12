import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useMediaQuery } from 'react-responsive'
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import Logo from '../images/NewtelcoLogo'
import OverlayMenu from './OverlayMenu'
import ButtonMenu from './ButtonMenu'

export default function Header() {
  const { t } = useTranslation()
  const [toggleMenu, setToggleMenu] = useState(false)
  const { language } = useI18next()
  const isMobile = useMediaQuery({ query: '(max-device-width: 641px)' })

  return (
    <Wrapper className='top-0 text-gray-500 bg-transparent body-font'>
      <div className='container z-50 flex flex-col flex-wrap items-center p-2 mx-auto bg-transparent md:flex-row'>
        <Link
          language={language}
          to='/'
          aria-label='Home'
          className='flex items-center font-medium text-white title-font'
        >
          <Logo />
        </Link>
        <nav className='flex flex-wrap items-center justify-center hidden text-base md:mr-auto md:ml-3 md:py-1 md:pl-4 sm:flex'>
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
        {isMobile ? (
          <>
            <ButtonMenu
              handleClick={() => setToggleMenu(!toggleMenu)}
              isOpen={toggleMenu}
            />
            <OverlayMenu
              isOpen={toggleMenu}
              toggleMenu={() => setToggleMenu(!toggleMenu)}
            />
          </>
        ) : (
          <ButtonMenu
            handleClick={() => setToggleMenu(!toggleMenu)}
            isOpen={toggleMenu}
          />
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 999;
  position: sticky;
  top: 0;
  backdrop-filter: saturate(120%) blur(10px);
`
