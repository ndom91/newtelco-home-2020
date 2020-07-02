import React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import LanguageSelect from './LanguageSelect'
import newtelcoLogo from '../images/newtelco-white.png'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import styled from '@emotion/styled'

const OverlayMenu = ({ toggleMenu, isOpen }) => {
  const x = useMotionValue(10)
  const y = useTransform(x, value => value * 2)

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Products', link: '/products' },
    { name: 'About', link: '/about' },
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
    <OverlayWrapper className={isOpen ? 'active' : 'hidden'}>
      <HeaderImage src={newtelcoLogo} alt="Newtelco Logo" />
      <Navigation>
        <ul className={isOpen ? 'active' : ''}>
          <motion.div
            style={{ x, y }}
            animate={isOpen ? 'visible' : 'hidden'}
            variants={list}
          >
            {menuItems.map((menu, index) => (
              <motion.div
                initial="hidden"
                variants={variants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                key={index}
              >
                <li key={menu.name}>
                  <NavNumber>{`0${index + 1}`}</NavNumber>
                  <NavigationLink
                    to={menu.link}
                    aria-label={menu.name}
                    activeClassName="active"
                    onClick={toggleMenu}
                  >
                    {menu.name}
                  </NavigationLink>
                </li>
              </motion.div>
            ))}
          </motion.div>
        </ul>
      </Navigation>
      <LanguageSelect toggleMenu={toggleMenu} isOpen={isOpen} />
      {/* <ShapeOverlays
        className="shape-overlays"
        id="shape-overlays"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path className="shape-overlays__path"></path>
        <path className="shape-overlays__path"></path>
        <path className="shape-overlays__path"></path>
      </ShapeOverlays> */}
    </OverlayWrapper>
  )
}

export default OverlayMenu

const OverlayWrapper = styled.div`
  width: 100vw;
  height: 0%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
  background-color: #67b246;
  &.active {
    z-index: 9998;
    transform: translate(0%, 0%);
    height: 100%;
  }
  &.hidden {
    z-index: 99998;
    transform: translate(0%, 0%);
    height: 0vh;
  }
  /* & #shape-overlays {
    z-index: -1;
  } */
`

const NavNumber = styled.div`
  font-family: var(--font-face-serif);
  font-size: 2rem;
  color: var(--gray);
  display: inline-block;
  margin-right: 10px;
`

const HeaderImage = styled.img`
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
`

const ShapeOverlays = styled.svg`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  & path:nth-of-type(1) {
    fill: #c4dbea;
  }
  & path:nth-of-type(2) {
    fill: #4c688b;
  }
  & path:nth-of-type(3) {
    fill: #2e496a;
  }
`

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 60%;
  margin: 0 auto;
  position: relative;
  top: 50%;
  left: -10%;
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
  font-family: var(--font-face-serif);
  font-weight: 300;
  &.active {
    &:after {
      position: absolute;
      display: inline-block;
      content: '';
      border-bottom: 10px solid #fff;
      width: 320px;
      font-family: var(--font-face-san-serif);
      position: absolute;
      top: 40px;
      left: -150px;
    }
  }
`
