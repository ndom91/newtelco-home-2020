import React from 'react'
import styled from '@emotion/styled'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'

const LanguageSelect = ({ toggleMenu }) => {
  const { languages, originalPath, changeLanguage } = useI18next()

  const flags = [{ en: '🇬🇧' }, { de: '🇩🇪' }]

  /* const changeLang = lang => { */
  /*   i18n.changeLanguage(lang) */
  /* } */
  const handleLanguageChange = lng => {
    changeLanguage(lng)
    toggleMenu()
  }

  return (
    <Wrapper>
      {flags.map(flag => {
        const lng = Object.keys(flag)[0]
        return (
          <Link
            key={lng}
            onClick={() => handleLanguageChange(lng)}
            to={'/'}
            language={lng}
          >
            {Object.values(flag)[0]}
          </Link>
        )
      })}
    </Wrapper>
  )
}

export default LanguageSelect

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
  font-size: 3rem;
  display: flex;
  justify-content: center;
`
