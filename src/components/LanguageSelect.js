import React from 'react'
import styled from '@emotion/styled'
import media from '../style/mq'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'

const LanguageSelect = ({ toggleMenu, isOpen }) => {
  const { changeLanguage } = useI18next()

  const flags = [{ en: '🇬🇧' }, { de: '🇩🇪' }]

  const handleLanguageChange = lng => {
    changeLanguage(lng)
    isOpen && toggleMenu()
  }

  return (
    <LanguageWrapper className={isOpen ? 'active' : ''}>
      <LanguageItem className={isOpen ? 'active' : ''} className='pt-4'>
        <svg
          height='32'
          width='32'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'></path>
        </svg>
      </LanguageItem>
      <LanguageChoiceWrapper className={isOpen ? 'active' : ''}>
        {flags.map(flag => {
          const lng = Object.keys(flag)[0]
          return (
            <LanguageItemDropdown key={lng}>
              <LanguageLink
                onClick={() => handleLanguageChange(lng)}
                to={'/'}
                language={lng}
              >
                {Object.values(flag)[0]}
              </LanguageLink>
            </LanguageItemDropdown>
          )
        })}
      </LanguageChoiceWrapper>
    </LanguageWrapper>
  )
}

export default LanguageSelect

const LanguageWrapper = styled.ul`
  display: flex;
  position: absolute;
  top: 1rem;
  right: 1rem;
  ${media.tabletSmall_up`
    margin-left: 0;
    position: relative;
    top: 0;
    right: 0;
  `}
  transition: visibility 250ms, opacity 250ms ease-in-out;

  list-style: none;
  position: relative;

  & > ul {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 11px;
    right: 27px;
  }

  ${media.tabletSmall`
    display: none;

    &.active {
      display: inline-block;
      position: relative;
      width: 100%;
    }
  `}
`

const LanguageChoiceWrapper = styled.ul`
  display: flex;
  border-radius: 0 0 5px 5px;
  padding: 10px 0px;
  z-index: 21;
  transition: visibility 250ms ease-in-out, opacity 250ms ease-in-out;

  &:hover {
    visibility: visible;
    opacity: 1;
  }

  &.active {
    visibility: visible;
    opacity: 1;
    z-index: 21;
    position: absolute;
    flex-direction: row;
    top: -100px;
    left: 50%;
    transform: translateX(calc(-50% + 10px));
    background-color: transparent;
    box-shadow: none;
    width: 250px;
    justify-content: space-around;
  }
`

const LanguageItemDropdown = styled.li`
  display: list-item;

  width: 50px;
  float: none;
  display: list-item;
  position: relative;
  margin-right: 5px;

  & svg:hover {
    cursor: pointer;
  }
`

const LanguageItem = styled.li`
  margin-left: var(--space-sm);
  display: inline-block;
  transition: visibility 150ms, opacity 150ms ease-in-out;

  &:hover svg {
    cursor: pointer;
    border-radius: 5px;
  }

  &:hover ~ ul {
    opacity: 1;
    visibility: visible;
  }

  & ~ ul {
    padding: 3px;
    border-radius: 0 5px 5px 0;
  }

  &.active {
    display: none;
  }
`

const LanguageLink = styled(Link)`
  display: inline-block;
  color: var(--grayColor);
  font-size: 1.4rem;
  margin: 4px 6px;
  display: block;
  padding: 0 10px;
  color: #fff;
  font-size: 1.4rem;
  line-height: 30px;
  ${media.tabletSmall`
    font-size: 2.75rem;
  `}
  &:hover {
    text-decoration: none;
  }
`
