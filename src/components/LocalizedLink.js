import { Link } from 'gatsby'
import React from 'react'

const DEFAULT_LOCALE = 'en'

const LocalizedLink = ({ locale, to, children }) => {
  const localePrefix = !locale || locale === DEFAULT_LOCALE ? '' : `/${locale}`
  return <Link to={`${localePrefix}/${to ? to : ''}`}>{children}</Link>
}

export default LocalizedLink
