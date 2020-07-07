import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import { seoTypes } from '../types/propTypes'

const SEO = ({ meta, favicon = '', global = '' }) => {
  return (
    <HelmetDatoCms seo={meta} favicon={favicon}>
      <title>{global.siteName || 'Newtelco GmbH'}</title>
      <html lang='en' />
    </HelmetDatoCms>
  )
}

SEO.propTypes = seoTypes

export default SEO
