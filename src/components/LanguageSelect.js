import React from 'react'
//import LocalizedLink from './LocalizedLink'
//import { useTranslation } from 'react-i18next'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'

const LanguageSelect = () => {
  //const { i18n } = useTranslation()
  const { languages, originalPath, changeLanguage } = useI18next()

  const flags = [{ en: '🇬🇧' }, { de: '🇩🇪' }]

  /* const changeLang = lang => { */
  /*   i18n.changeLanguage(lang) */
  /* } */

  return (
    <div>
      {flags.map(flag => {
        const lng = Object.keys(flag)[0]
        return (
          <Link
            key={lng}
            // locale={lng}
            onClick={() => changeLanguage(lng)}
            to={'/'}
            language={lng}
          >
            {Object.values(flag)[0]}
          </Link>
        )
      })}
    </div>
  )
}

export default LanguageSelect
