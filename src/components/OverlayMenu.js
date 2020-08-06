import React from 'react'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next'
import LanguageSelect from './LanguageSelect'
import newtelcoLogo from '../images/newtelco-white.png'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import styled from '@emotion/styled'
import 'transition-style'

const OverlayMenu = ({ toggleMenu, isOpen }) => {
  const { t } = useTranslation()
  const x = useMotionValue(10)
  const y = useTransform(x, value => value * 2)

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: t('menu.products'), link: '/products' },
    { name: t('menu.services'), link: '/services' },
    { name: t('menu.team'), link: '/team' },
    { name: t('menu.about'), link: '/about' },
  ]

  const list = {
    visible: {
      opacity: [0, 1],
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.25,
        type: 'inertia',
      },
    },
  }
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      x: [-50, 0],
      opacity: [0, 1],
      transition: {
        duration: 0.25,
      },
    },
  }
  return (
    <OverlayWrapper transition='in:circle:top-right'>
      {/* className={isOpen ? 'active' : ''}> */}
      <HeaderImage src={newtelcoLogo} alt='Newtelco Logo' />
      <Navigation>
        <ul className={isOpen ? 'active' : ''}>
          <motion.div
            style={{ x, y }}
            animate={isOpen ? 'visible' : 'hidden'}
            variants={list}
          >
            {menuItems.map((menu, index) => (
              <motion.div
                initial='hidden'
                variants={variants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                key={index}
                className='mb-8'
              >
                <NavNumber>{`0${index}`}</NavNumber>
                <NavigationLink
                  to={menu.link}
                  aria-label={menu.name}
                  className='hover:no-underline hover:text-white font-display'
                  activeClassName='active'
                  onClick={toggleMenu}
                >
                  {menu.name}
                </NavigationLink>
              </motion.div>
            ))}
          </motion.div>
        </ul>
      </Navigation>
      <LanguageSelect toggleMenu={toggleMenu} isOpen={isOpen} />
    </OverlayWrapper>
  )
}

export default OverlayMenu

const OverlayWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -2;
  transition: opacity 0.35s ease-in-out, visibility 0.35s ease-in-out,
    max-height 0.35s ease-in-out;
  overflow: hidden;
  background-color: #292929;
  z-index: 98;
  opacity: 0;
  max-height: 0px;
  &.active {
    z-index: 9998;
    opacity: 1;
    transition: max-height 1s ease-in-out;
    max-height: 2000px;
  }
`

const NavNumber = styled.div`
  font-family: var(--font-mono);
  font-weight: 100;
  font-size: 1.7rem;
  color: #67b246;
  display: inline-block;
  margin-right: 15px;
`

const HeaderImage = styled.img`
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
`

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 100%;
  margin: 0 auto;
  position: relative;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  & ul {
    list-style: none;
    padding: 0;
    display: inline-block;
    position: relative;
    height: 90%;
    opacity: 0;
    transition: opacity 250ms ease-in-out;
    transition-delay: 300ms;
    &.active {
      opacity: 1;
    }
    & li {
      display: block;
      height: calc(100% / 7);
      position: relative;
      margin-left: 0px;
      margin-top: 40px;
      margin-bottom: 40px;
      text-align: left;
    }
  }
`

const NavigationLink = styled(Link)`
  text-decoration: none;
  position: relative;
  color: #fff;
  z-index: 101;
  text-align: left;
  font-size: 2.2rem;
  font-weight: 200;
  &.active {
    &:after {
      position: absolute;
      display: inline-block;
      content: '';
      border-bottom: 0.25rem solid #67b246;
      border-radius: 0 5px 5px;
      width: 375px;
      font-family: var(--font-face-san-serif);
      position: absolute;
      top: 50px;
      left: -200px;
    }
  }
`
