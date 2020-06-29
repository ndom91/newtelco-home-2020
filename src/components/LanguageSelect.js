import React from 'react'
import LocalizedLink from './LocalizedLink'

const LanguageSelect = () => {
  const flags = [{ en: '🇬🇧' }, { de: '🇩🇪' }]

  return (
    <div>
      {flags.map(flag => {
        return (
          <LocalizedLink
            key={Object.keys(flag)[0]}
            locale={Object.keys(flag)[0]}
          >
            {Object.values(flag)[0]}
          </LocalizedLink>
        )
      })}
    </div>
  )
}

export default LanguageSelect
