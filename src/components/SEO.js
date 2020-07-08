import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'

const SEO = ({ meta, favicon = '', global = '' }) => {
  return (
    <HelmetDatoCms seo={meta} favicon={favicon}>
      <title>{global.siteName || 'Newtelco GmbH'}</title>
      <html lang='en' />
    </HelmetDatoCms>
  )
}

export default SEO
