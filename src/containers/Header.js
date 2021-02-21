import React, { useState } from 'react'
import styled from '@emotion/styled'
import { createBreakpoint } from 'react-use'
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import Logo from '../images/NewtelcoLogo'
import OverlayMenu from './OverlayMenu'
import ButtonMenu from './ButtonMenu'

const useBreakpoint = createBreakpoint({ phone: 640 })

export default function Header() {
  const { t } = useTranslation()
  const [toggleMenu, setToggleMenu] = useState(false)
  const { language } = useI18next()
  const breakpoint = useBreakpoint()

  return (
    <Wrapper className='top-0 text-gray-500 bg-transparent body-font'>
      <div className='container z-50 flex flex-col flex-wrap items-center px-8 py-2 mx-auto bg-transparent sm:flex-row max-w-screen-lg'>
        <Link
          language={language}
          to='/'
          aria-label='Home'
          className='mt-2 sm:mt-0 sm:-mr-6 md:mr-0 flex items-center font-medium text-white title-font'
        >
          <Logo />
        </Link>
        {breakpoint !== 'phone' ? (
          <OverlayMenu
            isOpen={toggleMenu}
            toggleMenu={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <nav className='flex flex-wrap items-center justify-center hidden font-mono text-base sm:mr-auto sm:ml-3 sm:py-1 sm:pl-10 sm:flex'>
            <NavLink
              language={language}
              to='/products'
              className='mr-16 text-white hover:text-white hover:no-underline h-7'
            >
              {t('menu.products')}
            </NavLink>
            <NavLink
              language={language}
              to='/services'
              className='mr-16 text-white hover:text-white hover:no-underline h-7'
            >
              {t('menu.services')}
            </NavLink>
            <NavLink
              language={language}
              to='/team'
              className='mr-16 text-white hover:text-white hover:no-underline h-7'
            >
              {t('menu.team')}
            </NavLink>
            <NavLink
              language={language}
              to='/about'
              className='mr-16 text-white hover:text-white hover:no-underline h-7'
            >
              {t('menu.about')}
            </NavLink>
          </nav>
        )}
        <ButtonMenu
          handleClick={() => setToggleMenu(!toggleMenu)}
          isOpen={toggleMenu}
        />
      </div>
    </Wrapper>
  )
}

const NavLink = styled(Link)`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 0;
    background: #67b246;
    height: 3px;
    transition-property: right;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
  &:hover:before,
  &:focus:before,
  &:active:before {
    right: 0;
  }
  &:last-child {
    margin-right: 0 !important;
  }
`

const Wrapper = styled.div`
  z-index: 999;
  position: sticky;
  top: 0;
  backdrop-filter: saturate(120%) blur(10px);
`
